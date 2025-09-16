import { AuthResponse, LoginRequest, RegisterRequest, AuthTokens } from '../types';

// API Configuration
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'https://simple-authentication-service.vercel.app';
console.log('API_BASE_URL:', API_BASE_URL);
console.log('Environment variable:', (import.meta as any).env?.VITE_API_BASE_URL);
const API_ENDPOINTS = {
  register: '/api/auth/register',
  login: '/api/auth/login',
  logout: '/api/auth/logout',
  refresh: '/api/auth/refresh',
  profile: '/api/user/profile',
  googleAuth: '/api/oauth/google',
  facebookAuth: '/api/oauth/facebook',
  githubAuth: '/api/oauth/github',
};

// API Client Class
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    console.log('Making request to:', url);
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add authorization header if token exists
    const token = this.getAccessToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Token management
  private getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  private setTokens(tokens: AuthTokens): void {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
  }

  private clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }

  // Authentication methods
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>(API_ENDPOINTS.register, {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (response.success && response.data.user) {
      // Store user data without tokens for simple auth
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('isLoggedIn', 'true');
    }

    return response;
  }

  async login(credentials: LoginRequest): Promise<AuthResponse> {
    // Simple auth API doesn't use tokens, just email and password
    const simpleCredentials = {
      email: credentials.email,
      password: credentials.password
    };

    const response = await this.request<AuthResponse>(API_ENDPOINTS.login, {
      method: 'POST',
      body: JSON.stringify(simpleCredentials),
    });

    if (response.success && response.data.user) {
      // Store user data without tokens for simple auth
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('isLoggedIn', 'true');
    }

    return response;
  }

  async logout(): Promise<{ success: boolean; message: string }> {
    try {
      // Simple auth doesn't require server-side logout
      // Just clear local storage
      this.clearTokens();
    } catch (error) {
      console.error('Logout failed:', error);
    }

    return { success: true, message: 'Logged out successfully' };
  }

  async refreshAccessToken(): Promise<AuthTokens> {
    const refreshToken = this.getRefreshToken();
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await this.request<{ success: boolean; data: { tokens: AuthTokens } }>(
      API_ENDPOINTS.refresh,
      {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (response.success && response.data.tokens) {
      this.setTokens(response.data.tokens);
      return response.data.tokens;
    }

    throw new Error('Failed to refresh token');
  }

  async getUserProfile(): Promise<any> {
    return this.request(API_ENDPOINTS.profile, {
      method: 'GET',
    });
  }

  // OAuth methods
  getGoogleAuthUrl(): string {
    return `${this.baseURL}${API_ENDPOINTS.googleAuth}`;
  }

  getFacebookAuthUrl(): string {
    return `${this.baseURL}${API_ENDPOINTS.facebookAuth}`;
  }

  getGithubAuthUrl(): string {
    return `${this.baseURL}${API_ENDPOINTS.githubAuth}`;
  }

  // Utility methods
  isAuthenticated(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = localStorage.getItem('user');
    return !!(isLoggedIn === 'true' && user);
  }

  getCurrentUser(): any | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  // Auto-refresh token on 401 errors
  async handleUnauthorized(): Promise<boolean> {
    try {
      await this.refreshAccessToken();
      return true;
    } catch (error) {
      this.clearTokens();
      return false;
    }
  }
}

// Create and export API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export individual methods for convenience
export const authApi = {
  register: (userData: RegisterRequest) => apiClient.register(userData),
  login: (credentials: LoginRequest) => apiClient.login(credentials),
  logout: () => apiClient.logout(),
  refreshToken: () => apiClient.refreshAccessToken(),
  getUserProfile: () => apiClient.getUserProfile(),
  isAuthenticated: () => apiClient.isAuthenticated(),
  getCurrentUser: () => apiClient.getCurrentUser(),
  getGoogleAuthUrl: () => apiClient.getGoogleAuthUrl(),
  getFacebookAuthUrl: () => apiClient.getFacebookAuthUrl(),
  getGithubAuthUrl: () => apiClient.getGithubAuthUrl(),
};

export default apiClient;
