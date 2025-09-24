// OAuth Methods - OAuth-related API operations

import { HttpClient } from './httpClient';
import { API_ENDPOINTS } from './constants';
import { AuthResponse } from './types';

export class OAuthService {
  constructor(private httpClient: HttpClient, private baseURL: string) { }

  /** * Get Google OAuth URL */
  getGoogleAuthUrl(): string {
    return `${this.baseURL}${API_ENDPOINTS.googleAuth}`;
  }

  /** * Get Facebook OAuth URL */
  getFacebookAuthUrl(): string {
    return `${this.baseURL}${API_ENDPOINTS.facebookAuth}`;
  }

  /** * Get GitHub OAuth URL */
  getGithubAuthUrl(): string {
    return `${this.baseURL}${API_ENDPOINTS.githubAuth}`;
  }

  /** * Handle OAuth callback (if needed in future) */
  async handleOAuthCallback(provider: string, code: string): Promise<AuthResponse> {
    const endpoint = `/api/oauth/${provider}/callback`;
    const response = await this.httpClient.post<any>(endpoint, { code });
    return response as AuthResponse;
  }
}