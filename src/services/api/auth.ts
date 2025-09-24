// Auth Methods - Authentication-related API operations

import { HttpClient } from "./httpClient";
import { API_ENDPOINTS } from "./constants";
import { LoginRequest, RegisterRequest, AuthTokens, User } from "./types";
import { setUserData, isAuthenticated, clearAuthData, getUserData } from "./utils";

export interface AuthResponse {
    success: boolean;
    message: string;
    data: {
        user: User;
    };
}

export class AuthService {
    constructor(private httpClient: HttpClient) { }

    /** * Register new user */
    async register(userData: RegisterRequest): Promise<AuthResponse> {
        const response = await this.httpClient.post<any>(
            API_ENDPOINTS.register,
            userData
        );

        if (response.success && response.data?.user) {
            setUserData(response.data.user);
        }

        return response as AuthResponse;
    }

    /** * Login user */
    async login(credentials: LoginRequest): Promise<AuthResponse> {
        // Add appEndpoint and role for the authentication service
        const loginCredentials = {
            email: credentials.email,
            password: credentials.password,
            appEndpoint:
                credentials.appEndpoint ||
                "https://food-delivery-business-app-sera.vercel.app",
            role: credentials.role,
        };

        const response = await this.httpClient.post<any>(
            API_ENDPOINTS.login,
            loginCredentials
        );

        if (response.success && response.data?.user) {
            setUserData(response.data.user);
        }

        return response as AuthResponse;
    }

    /** * Logout user */
    async logout(): Promise<{ success: boolean; message: string }> {
        try {
            // Simple auth doesn't require server-side logout,  Just clear local storage
            clearAuthData();
        } catch (error) {
            console.error("Logout failed:", error);
        }

        return { success: true, message: "Logged out successfully" };
    }

    /** * Refresh access token */
    async refreshAccessToken(): Promise<AuthTokens> {
        const response = await this.httpClient.post<any>(API_ENDPOINTS.refresh, {});

        if (response.success && response.data?.tokens) {
            return response.data.tokens;
        }

        throw new Error("Failed to refresh token");
    }

    /** * Get user profile */
    async getUserProfile(): Promise<User> {
        const response = await this.httpClient.get<any>(API_ENDPOINTS.profile);
        return response.data;
    }

    /** * Check if user is authenticated */
    isAuthenticated(): boolean {
        return isAuthenticated();
    }

    /** * Get current user */
    getCurrentUser(): User | null {
        return getUserData();
    }

    /** * Handle unauthorized access */
    async handleUnauthorized(): Promise<boolean> {
        try {
            await this.refreshAccessToken();
            return true;
        } catch (error) {
            clearAuthData();
            return false;
        }
    }
}