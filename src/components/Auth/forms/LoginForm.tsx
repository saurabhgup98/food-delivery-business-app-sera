import React from 'react';
import { AuthInput, SubmitButton, ErrorDisplay } from '../components/AuthFormFields';
import { useFormState, useFormValidation, useAuthFormSubmission } from '../hooks/AuthFormHooks';
import { FORM_LABELS, FORM_PLACEHOLDERS } from '../constants/AuthFormConstants';
import { FormData } from '../types/AuthFormTypes';

interface LoginFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onError }) => {
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
    localError,
    setLocalError,
    handleInputChange,
    clearError,
  } = useFormState(initialFormData);

  const { validateAllFields } = useFormValidation(formData, 'login');
  const { submitForm, isSubmitting, error } = useAuthFormSubmission('login');

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
      const errorMessage = error.message || 'Login failed';
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

  // Create input configurations
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
    placeholder: FORM_PLACEHOLDERS.PASSWORD_LOGIN,
    label: FORM_LABELS.PASSWORD,
    type: 'password' as const,
    required: true,
    showPassword,
    onTogglePassword: togglePasswordVisibility,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error Display */}
      <ErrorDisplay error={error || localError} />

      {/* Email Input */}
      <AuthInput {...emailInputConfig} />

      {/* Password Input */}
      <AuthInput {...passwordInputConfig} />

      {/* Submit Button */}
      <SubmitButton 
        isLoading={isSubmitting} 
        mode="login" 
        disabled={isSubmitting}
      />
    </form>
  );
};
