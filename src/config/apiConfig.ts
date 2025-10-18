// Simple API Configuration
export const API_CONFIG = {
  AUTH_API_URL: (import.meta as any).env?.VITE_AUTH_API_URL || 'https://simple-authentication-service.vercel.app',
  BACKEND_API_URL: (import.meta as any).env?.VITE_BACKEND_API_URL || 'http://localhost:5001',
};

// Get API URL for different services
export const getApiUrl = (service: 'auth' | 'backend') => {
  return service === 'auth' ? API_CONFIG.AUTH_API_URL : API_CONFIG.BACKEND_API_URL;
};

// Check if we're in development mode
export const isDevelopment = () => {
  return (import.meta as any).env?.DEV || API_CONFIG.BACKEND_API_URL.includes('localhost');
};