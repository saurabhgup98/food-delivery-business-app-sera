// InputTypes.ts - TypeScript interfaces for generic input components

export interface PrimaryInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  required?: boolean;
  disabled?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onIconClick?: () => void;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  title?: string;
}

export interface InputConfig {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  required?: boolean;
  disabled?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  className?: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onIconClick?: () => void;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  title?: string;
}

export interface InputState {
  isFocused: boolean;
  hasValue: boolean;
  showPassword: boolean;
}

export interface InputValidation {
  isValid: boolean;
  error?: string;
  success?: boolean;
}
