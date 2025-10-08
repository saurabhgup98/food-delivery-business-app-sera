// Auth Methods - Authentication-related API operations

import { HttpClient } from "./httpClient";
import { API_ENDPOINTS } from "./constants";
import { LoginRequest, RegisterRequest, User, AuthResponse } from "./types";
import { setUserData, isAuthenticated, clearAuthData, getUserData } from "./utils";

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
        const response = await this.httpClient.post<any>(
            API_ENDPOINTS.login,
            credentials
        );

        if (response.success && response.data?.user) {
            // Store complete user object with role information
            const completeUser = {
                ...response.data.user,
                role: response.data.role,
                availableRoles: response.data.availableRoles,
                appIdentifier: response.data.appIdentifier,
                authMethod: response.data.authMethod
            };
            setUserData(completeUser);
        }

        return response as AuthResponse;
    }

    /** * Logout user */
    async logout(): Promise<{ success: boolean; message: string }> {
        try {
            clearAuthData();
        } catch (error) {
            console.error("Logout failed:", error);
        }

        return { success: true, message: "Logged out successfully" };
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
        clearAuthData();
        return false;
    }
}