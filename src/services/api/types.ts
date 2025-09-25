// API Types - Centralized type definitions for API layer

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  error: string;
  status: number;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  oauthProvider: string;
  role: string;
  appEndpoint: string;
  appIdentifier: string;
  authMethod: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    tokens: AuthTokens;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
  appEndpoint: string;
  role?: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  appEndpoint: string;
  authMethod?: 'email-password' | 'google-oauth' | 'facebook-oauth' | 'github-oauth';
  role?: 'user' | 'business-user' | 'admin' | 'superadmin';
}

export interface HttpConfig {
  baseURL: string;
  timeout?: number;
  retryAttempts?: number;
}