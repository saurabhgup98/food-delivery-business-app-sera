// AuthFormHooks.ts - Custom hooks for authentication form state management

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { FormData } from '../types/AuthFormTypes';
import { validateForm, sanitizeFormData } from '../utils/AuthFormValidation';
import { AUTH_FORM_CONSTANTS } from '../constants/AuthFormConstants';
import { LoginRequest, RegisterRequest } from '../../../types';

/**
 * Custom hook for managing form state
 */
export const useFormState = (initialData: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setShowPassword(false);
    setShowConfirmPassword(false);
    setLocalError(null);
  }, [initialData]);

  const clearError = useCallback(() => {
    setLocalError(null);
  }, []);

  return {
    formData,
    setFormData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isAnimating,
    setIsAnimating,
    localError,
    setLocalError,
    handleInputChange,
    resetForm,
    clearError,
  };
};

/**
 * Custom hook for form validation
 */
export const useFormValidation = (formData: FormData, mode: 'login' | 'register') => {
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateField = useCallback((fieldName: string, value: string) => {
    const sanitizedData = sanitizeFormData({ ...formData, [fieldName]: value });
    const validation = validateForm(sanitizedData, mode);
    
    if (!validation.isValid && validation.error) {
      setValidationErrors(prev => ({ ...prev, [fieldName]: validation.error! }));
    } else {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  }, [formData, mode]);

  const validateAllFields = useCallback(() => {
    const sanitizedData = sanitizeFormData(formData);
    const validation = validateForm(sanitizedData, mode);
    return validation;
  }, [formData, mode]);

  const clearValidationErrors = useCallback(() => {
    setValidationErrors({});
  }, []);

  return {
    validationErrors,
    validateField,
    validateAllFields,
    clearValidationErrors,
  };
};

/**
 * Custom hook for authentication form submission
 */
export const useAuthFormSubmission = (mode: 'login' | 'register') => {
  const { login, register, isLoading, error, clearError } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = useCallback(async (formData: FormData, onSuccess?: () => void) => {
    setIsSubmitting(true);
    clearError();

    try {
      const sanitizedData = sanitizeFormData(formData);

      if (mode === 'login') {
        const loginData: LoginRequest = {
          email: sanitizedData.email,
          password: sanitizedData.password,
          appEndpoint: AUTH_FORM_CONSTANTS.APP_ENDPOINT,
        };
        await login(loginData);
      } else {
        const registerData: RegisterRequest = {
          name: sanitizedData.fullName,
          email: sanitizedData.email,
          password: sanitizedData.password,
          appEndpoint: AUTH_FORM_CONSTANTS.APP_ENDPOINT,
          authMethod: 'email-password',
          role: AUTH_FORM_CONSTANTS.DEFAULT_ROLE,
        };
        await register(registerData);
      }

      // Success callback
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [mode, login, register, clearError]);

  return {
    submitForm,
    isSubmitting: isSubmitting || isLoading,
    error,
    clearError,
  };
};

/**
 * Custom hook for modal animation and state management
 */
export const useModalState = (isOpen: boolean, onClose: () => void) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  return {
    isAnimating,
    handleClose,
  };
};

/**
 * Custom hook for OAuth authentication
 */
export const useOAuthAuth = () => {
  const handleOAuthLogin = useCallback((provider: 'google' | 'facebook' | 'github', role?: string) => {
    const baseUrl = (import.meta as any).env?.VITE_API_BASE_URL || 'https://simple-authentication-service.vercel.app';
    const appEndpoint = AUTH_FORM_CONSTANTS.APP_ENDPOINT;
    
    // Add appEndpoint and role as query parameters
    const params = new URLSearchParams({
      appEndpoint: appEndpoint
    });
    
    if (role) {
      params.append('role', role);
    }
    
    const authUrl = provider === 'google' 
      ? `${baseUrl}/api/oauth/google?${params.toString()}`
      : provider === 'facebook'
      ? `${baseUrl}/api/oauth/facebook?${params.toString()}`
      : `${baseUrl}/api/oauth/github?${params.toString()}`;
    
    window.location.href = authUrl;
  }, []);

  return {
    handleOAuthLogin,
  };
};

/**
 * Custom hook for form mode switching
 */
export const useFormMode = (initialMode: 'login' | 'register', onModeChange?: (mode: 'login' | 'register') => void) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  // Sync with prop changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const switchMode = useCallback(() => {
    const newMode = mode === 'login' ? 'register' : 'login';
    setMode(newMode);
    if (onModeChange) {
      onModeChange(newMode);
    }
  }, [mode, onModeChange]);

  return {
    mode,
    setMode,
    switchMode,
  };
};
