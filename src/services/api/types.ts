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
  username: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
  appEndpoint: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  appName: string;
  role: 'user' | 'business-user' | 'admin' | 'superadmin';
}

export interface HttpConfig {
  baseURL: string;
  timeout?: number;
  retryAttempts?: number;
}