// Authentication constants and configurations

// OAuth Provider Configuration
export interface OAuthProviderConfig {
  id: string;
  name: string;
  label: string;
  icon: string; // SVG path or icon identifier
  className: string;
  hoverClassName: string;
  redirectUrl: string;
}

// OAuth Providers
export const OAUTH_PROVIDERS: OAuthProviderConfig[] = [
  {
    id: 'google',
    name: 'google',
    label: 'Continue with Google',
    icon: 'google',
    className: 'bg-white/5 border border-white/10 text-white',
    hoverClassName: 'hover:bg-white/10 hover:border-white/20',
    redirectUrl: '/api/oauth/google'
  },
  {
    id: 'facebook',
    name: 'facebook',
    label: 'Continue with Facebook',
    icon: 'facebook',
    className: 'bg-blue-600/10 border border-blue-600/20 text-blue-400',
    hoverClassName: 'hover:bg-blue-600/20 hover:border-blue-600/30 hover:text-blue-300',
    redirectUrl: '/api/oauth/facebook'
  }
];

// Form Constants
export const FORM_CONSTANTS = {
  MODAL_TITLES: {
    LOGIN: 'Welcome Back',
    REGISTER: 'Create Account',
    ROLE_SELECTION: 'Choose Your Role'
  },
  MODAL_SUBTITLES: {
    LOGIN: 'Sign in to your account',
    REGISTER: 'Join the SERA platform',
    ROLE_SELECTION: 'Select your account type'
  },
  DIVIDER_TEXT: 'Or continue with',
  MODE_SWITCH: {
    LOGIN: {
      prompt: "Don't have an account?",
      action: "Sign up"
    },
    REGISTER: {
      prompt: "Already have an account?",
      action: "Sign in"
    }
  }
} as const;

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_MISMATCH: 'Passwords do not match',
  NAME_MIN_LENGTH: 'Name must be at least 2 characters'
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  BASE_URL: (import.meta as any).env?.VITE_API_BASE_URL || 'https://simple-authentication-service.vercel.app',
  OAUTH: {
    GOOGLE: '/api/oauth/google',
    FACEBOOK: '/api/oauth/facebook'
  }
} as const;
