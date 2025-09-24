// Legacy API file - Now uses modular structure
// This file maintains backward compatibility while using the new modular API

export { 
  apiClient, 
  authApi, 
  oauthApi,
  default 
} from './api/index';

// Re-export types for backward compatibility
export type { 
  AuthResponse, 
  LoginRequest, 
  RegisterRequest, 
  AuthTokens,
  User 
} from './api/index';
