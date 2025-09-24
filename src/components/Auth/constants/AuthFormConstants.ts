// AuthFormConstants.ts - Constants and configuration for authentication forms

export const AUTH_FORM_CONSTANTS = {
  MIN_PASSWORD_LENGTH: 8,
  APP_ENDPOINT: 'https://food-delivery-business-app-sera.vercel.app',
  DEFAULT_ROLE: 'business-user',
} as const;

export const FORM_FIELD_NAMES = {
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
} as const;

export const FORM_LABELS = {
  FULL_NAME: 'Full Name',
  EMAIL: 'Email Address',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm Password',
} as const;

export const FORM_PLACEHOLDERS = {
  FULL_NAME: 'Enter your full name',
  EMAIL: 'Enter your email',
  PASSWORD_LOGIN: 'Enter your password',
  PASSWORD_REGISTER: 'Create a password',
  CONFIRM_PASSWORD: 'Confirm your password',
} as const;

export const BUTTON_TEXT = {
  SHOW_PASSWORD: 'Show',
  HIDE_PASSWORD: 'Hide',
  SIGN_IN: 'Sign In',
  CREATE_ACCOUNT: 'Create Account',
  SIGNING_IN: 'Signing In...',
  CREATING_ACCOUNT: 'Creating Account...',
  SIGN_UP_HERE: 'Sign up here',
  SIGN_IN_HERE: 'Sign in here',
} as const;

export const MODAL_TITLES = {
  LOGIN: 'Welcome Back',
  REGISTER: 'Join SERA',
} as const;

export const MODAL_SUBTITLES = {
  LOGIN: 'Sign in to your account',
  REGISTER: 'Create your account',
} as const;

export const OAUTH_PROVIDERS = {
  GOOGLE: {
    name: 'google' as const,
    label: 'Continue with Google',
    className: 'w-full group relative flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-semibold tracking-wide overflow-hidden',
  },
  FACEBOOK: {
    name: 'facebook' as const,
    label: 'Continue with Facebook',
    className: 'w-full group relative flex items-center justify-center space-x-3 bg-blue-600/10 border border-blue-600/20 text-blue-400 py-3 px-4 rounded-xl hover:bg-blue-600/20 hover:border-blue-600/30 hover:text-blue-300 transition-all duration-300 text-sm font-semibold tracking-wide overflow-hidden',
  },
} as const;

export const ERROR_MESSAGES = {
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match!',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters long',
  AUTHENTICATION_FAILED: 'Authentication failed',
} as const;

export const SUCCESS_MESSAGES = {
  ACCOUNT_CREATED: 'Account created successfully!',
  LOGIN_SUCCESS: 'Welcome back!',
} as const;

export const CSS_CLASSES = {
  INPUT_FIELD: 'w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80',
  INPUT_FIELD_WITH_ICON: 'w-full px-4 py-3 pr-12 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80',
  LABEL: 'block text-gray-200 text-sm font-semibold mb-2 tracking-wide',
  SUBMIT_BUTTON: 'w-full bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80 text-white font-bold py-3 px-6 rounded-xl hover:from-sera-blue/90 hover:via-sera-blue/80 hover:to-sera-blue/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sera-blue/20 hover:scale-[1.02] text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
  PASSWORD_TOGGLE: 'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-110',
  MODE_SWITCH: 'text-sera-blue hover:text-sera-blue/80 font-bold text-sm transition-all duration-300 hover:scale-105 tracking-wide',
} as const;
