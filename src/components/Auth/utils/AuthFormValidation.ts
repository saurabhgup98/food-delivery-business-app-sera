// AuthFormValidation.ts - Validation logic for authentication forms

import { FormData, ValidationResult } from '../types/AuthFormTypes';
import { AUTH_FORM_CONSTANTS, ERROR_MESSAGES } from '../constants/AuthFormConstants';

/**
 * Validates email format
 */
export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

/**
 * Validates password strength
 */
export const validatePassword = (password: string): ValidationResult => {
  if (!password.trim()) {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < AUTH_FORM_CONSTANTS.MIN_PASSWORD_LENGTH) {
    return { 
      isValid: false, 
      error: `Password must be at least ${AUTH_FORM_CONSTANTS.MIN_PASSWORD_LENGTH} characters long` 
    };
  }
  
  return { isValid: true };
};

/**
 * Validates full name for registration
 */
export const validateFullName = (fullName: string): ValidationResult => {
  if (!fullName.trim()) {
    return { isValid: false, error: 'Full name is required' };
  }
  
  if (fullName.trim().length < 2) {
    return { isValid: false, error: 'Full name must be at least 2 characters long' };
  }
  
  return { isValid: true };
};

/**
 * Validates password confirmation
 */
export const validatePasswordConfirmation = (password: string, confirmPassword: string): ValidationResult => {
  if (!confirmPassword.trim()) {
    return { isValid: false, error: 'Please confirm your password' };
  }
  
  if (password !== confirmPassword) {
    return { isValid: false, error: ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH };
  }
  
  return { isValid: true };
};

/**
 * Validates login form data
 */
export const validateLoginForm = (formData: FormData): ValidationResult => {
  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }
  
  // Validate password
  const passwordValidation = validatePassword(formData.password);
  if (!passwordValidation.isValid) {
    return passwordValidation;
  }
  
  return { isValid: true };
};

/**
 * Validates registration form data
 */
export const validateRegisterForm = (formData: FormData): ValidationResult => {
  // Validate full name
  const nameValidation = validateFullName(formData.fullName);
  if (!nameValidation.isValid) {
    return nameValidation;
  }
  
  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }
  
  // Validate password
  const passwordValidation = validatePassword(formData.password);
  if (!passwordValidation.isValid) {
    return passwordValidation;
  }
  
  // Validate password confirmation
  const confirmPasswordValidation = validatePasswordConfirmation(
    formData.password, 
    formData.confirmPassword
  );
  if (!confirmPasswordValidation.isValid) {
    return confirmPasswordValidation;
  }
  
  return { isValid: true };
};

/**
 * Validates form data based on mode (login or register)
 */
export const validateForm = (formData: FormData, mode: 'login' | 'register'): ValidationResult => {
  if (mode === 'login') {
    return validateLoginForm(formData);
  } else {
    return validateRegisterForm(formData);
  }
};

/**
 * Sanitizes form input data
 */
export const sanitizeFormData = (formData: FormData): FormData => {
  return {
    fullName: formData.fullName.trim(),
    email: formData.email.trim().toLowerCase(),
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  };
};

/**
 * Checks if form data is empty
 */
export const isFormEmpty = (formData: FormData, mode: 'login' | 'register'): boolean => {
  if (mode === 'login') {
    return !formData.email.trim() || !formData.password.trim();
  } else {
    return !formData.fullName.trim() || 
           !formData.email.trim() || 
           !formData.password.trim() || 
           !formData.confirmPassword.trim();
  }
};
