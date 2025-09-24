// AuthFormTypes.ts - TypeScript interfaces and types for authentication forms

export interface AuthModalsProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onModeChange?: (mode: 'login' | 'register') => void;
  onSuccess?: () => void;
}

export interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormState {
  formData: FormData;
  showPassword: boolean;
  showConfirmPassword: boolean;
  isAnimating: boolean;
  localError: string | null;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface FormFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  label: string;
}

export interface OAuthProvider {
  name: 'google' | 'facebook';
  icon: React.ReactNode;
  className: string;
}

export interface AuthFormConstants {
  MIN_PASSWORD_LENGTH: number;
  OAUTH_PROVIDERS: OAuthProvider[];
  FORM_FIELD_NAMES: {
    FULL_NAME: string;
    EMAIL: string;
    PASSWORD: string;
    CONFIRM_PASSWORD: string;
  };
}
