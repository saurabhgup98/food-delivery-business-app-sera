import { VALIDATION_MESSAGES } from '../../constants/authConstants';

export interface ValidationErrors {
  [key: string]: string;
}

export const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  if (name.trim().length < 2) {
    return VALIDATION_MESSAGES.NAME_MIN_LENGTH;
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return VALIDATION_MESSAGES.EMAIL_INVALID;
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password.trim()) {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  if (password.length < 8) {
    return VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH;
  }
  return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  if (!confirmPassword.trim()) {
    return VALIDATION_MESSAGES.REQUIRED;
  }
  if (password !== confirmPassword) {
    return VALIDATION_MESSAGES.PASSWORD_MISMATCH;
  }
  return null;
};

export const validateRegisterForm = (formData: { 
  name: string; 
  email: string; 
  password: string; 
  confirmPassword: string; 
}): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  const nameError = validateName(formData.name);
  if (nameError) {
    errors.name = nameError;
  }
  
  const emailError = validateEmail(formData.email);
  if (emailError) {
    errors.email = emailError;
  }
  
  const passwordError = validatePassword(formData.password);
  if (passwordError) {
    errors.password = passwordError;
  }
  
  const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
  if (confirmPasswordError) {
    errors.confirmPassword = confirmPasswordError;
  }
  
  return errors;
};
