// Main API Module - Unified API client with modular structure

import { HttpClient } from './httpClient';
import { AuthService } from './auth';
import { OAuthService } from './oauth';
import { API_BASE_URL } from './constants';
import { 
  LoginRequest, 
  RegisterRequest
} from './types';

/** * Unified API Client */
class ApiClient {
  private httpClient: HttpClient;
  public auth: AuthService;
  public oauth: OAuthService;

  constructor(baseURL: string = API_BASE_URL) {
    this.httpClient = new HttpClient(baseURL);
    this.auth = new AuthService(this.httpClient);
    this.oauth = new OAuthService(this.httpClient, baseURL);
  }

  /**
   * Get the underlying HTTP client (for advanced usage)
   */
  getHttpClient(): HttpClient {
    return this.httpClient;
  }
}

// Create and export API client instance
export const apiClient = new ApiClient();

// Export individual services for convenience
export const authApi = {
  register: (userData: RegisterRequest) => apiClient.auth.register(userData),
  login: (credentials: LoginRequest) => apiClient.auth.login(credentials),
  logout: () => apiClient.auth.logout(),
  getUserProfile: () => apiClient.auth.getUserProfile(),
  isAuthenticated: () => apiClient.auth.isAuthenticated(),
  getCurrentUser: () => apiClient.auth.getCurrentUser(),
  handleUnauthorized: () => apiClient.auth.handleUnauthorized(),
};

export const oauthApi = {
  getGoogleAuthUrl: () => apiClient.oauth.getGoogleAuthUrl(),
  getFacebookAuthUrl: () => apiClient.oauth.getFacebookAuthUrl(),
  getGithubAuthUrl: () => apiClient.oauth.getGithubAuthUrl(),
  handleOAuthCallback: (provider: string, code: string) => 
    apiClient.oauth.handleOAuthCallback(provider, code),
};

// Export types and utilities
export * from './types';
export * from './utils';
export * from './constants';
export type { AuthResponse } from './types';

// Default export
export default apiClient;