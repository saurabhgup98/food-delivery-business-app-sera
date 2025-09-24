// RegisterForm.tsx - Dedicated registration form component

import React from 'react';
import { AuthInput, SubmitButton, ErrorDisplay } from '../components/AuthFormFields';
import { useFormState, useFormValidation, useAuthFormSubmission } from '../hooks/AuthFormHooks';
import { FORM_LABELS, FORM_PLACEHOLDERS } from '../constants/AuthFormConstants';
import { FormData } from '../types/AuthFormTypes';

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError }) => {
  const initialFormData: FormData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // Custom hooks for form management
  const {
    formData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    localError,
    setLocalError,
    handleInputChange,
    clearError,
  } = useFormState(initialFormData);

  const { validateAllFields } = useFormValidation(formData, 'register');
  const { submitForm, isSubmitting, error } = useAuthFormSubmission('register');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    clearError();

    // Validate form
    const validation = validateAllFields();
    if (!validation.isValid) {
      setLocalError(validation.error || 'Please check your input');
      return;
    }

    try {
      await submitForm(formData, onSuccess);
    } catch (error: any) {
      const errorMessage = error.message || 'Registration failed';
      setLocalError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Create input configurations
  const fullNameInputConfig = {
    name: 'fullName',
    value: formData.fullName,
    onChange: handleInputChange,
    placeholder: FORM_PLACEHOLDERS.FULL_NAME,
    label: FORM_LABELS.FULL_NAME,
    type: 'text' as const,
    required: true,
  };

  const emailInputConfig = {
    name: 'email',
    value: formData.email,
    onChange: handleInputChange,
    placeholder: FORM_PLACEHOLDERS.EMAIL,
    label: FORM_LABELS.EMAIL,
    type: 'email' as const,
    required: true,
  };

  const passwordInputConfig = {
    name: 'password',
    value: formData.password,
    onChange: handleInputChange,
    placeholder: FORM_PLACEHOLDERS.PASSWORD_REGISTER,
    label: FORM_LABELS.PASSWORD,
    type: 'password' as const,
    required: true,
    showPassword,
    onTogglePassword: togglePasswordVisibility,
  };

  const confirmPasswordInputConfig = {
    name: 'confirmPassword',
    value: formData.confirmPassword,
    onChange: handleInputChange,
    placeholder: FORM_PLACEHOLDERS.CONFIRM_PASSWORD,
    label: FORM_LABELS.CONFIRM_PASSWORD,
    type: 'password' as const,
    required: true,
    showPassword: showConfirmPassword,
    onTogglePassword: toggleConfirmPasswordVisibility,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error Display */}
      <ErrorDisplay error={error || localError} />

      {/* Full Name Input */}
      <AuthInput {...fullNameInputConfig} />

      {/* Email Input */}
      <AuthInput {...emailInputConfig} />

      {/* Password Input */}
      <AuthInput {...passwordInputConfig} />

      {/* Confirm Password Input */}
      <AuthInput {...confirmPasswordInputConfig} />

      {/* Submit Button */}
      <SubmitButton 
        isLoading={isSubmitting} 
        mode="register" 
        disabled={isSubmitting}
      />
    </form>
  );
};
