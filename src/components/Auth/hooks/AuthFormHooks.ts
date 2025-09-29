// AuthFormHooks.ts - Custom hooks for authentication form state management

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { FormData } from '../types/AuthFormTypes';
import { API_ENDPOINTS } from '../constants/authConstants';
import { LoginRequest, RegisterRequest } from '../../../services/api/types';

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
    // Simple validation logic
    let error = '';
    
    if (!value.trim()) {
      error = 'This field is required';
    } else if (fieldName === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address';
    } else if (fieldName === 'password' && value.length < 8) {
      error = 'Password must be at least 8 characters';
    }
    
    if (error) {
      setValidationErrors(prev => ({ ...prev, [fieldName]: error }));
    } else {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  }, [formData, mode]);

  const validateAllFields = useCallback(() => {
    const errors: Record<string, string> = {};
    
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password?.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    
    if (mode === 'register') {
      if (!formData.fullName?.trim()) {
        errors.fullName = 'Name is required';
      }
      if (!formData.confirmPassword?.trim()) {
        errors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setValidationErrors(errors);
    return { isValid: Object.keys(errors).length === 0, errors };
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
      if (mode === 'login') {
        const loginData: LoginRequest = {
          email: formData.email,
          password: formData.password,
          appEndpoint: window.location.origin,
        };
        await login(loginData);
      } else {
        const registerData: RegisterRequest = {
          email: formData.email,
          password: formData.password,
          appEndpoint: window.location.origin,
          role: 'business-user',
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
    const baseUrl = API_ENDPOINTS.BASE_URL;
    const appEndpoint = window.location.origin;
    
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
