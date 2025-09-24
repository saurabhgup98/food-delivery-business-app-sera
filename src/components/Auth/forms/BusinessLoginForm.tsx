// BusinessLoginForm.tsx - Enhanced login form with role selection for business app

import React, { useState } from 'react';
import { AuthInput, SubmitButton, ErrorDisplay, FormDivider } from '../components/AuthFormFields';
import { RoleSelector } from '../components/RoleSelector';
import { OAuthButtons } from '../components/OAuthButtons';
import { useFormState, useFormValidation } from '../hooks/AuthFormHooks';
import { useAuth } from '../../../contexts/AuthContext';
import { FORM_LABELS, FORM_PLACEHOLDERS } from '../constants/AuthFormConstants';
import { FormData } from '../types/AuthFormTypes';

interface BusinessLoginFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const BusinessLoginForm: React.FC<BusinessLoginFormProps> = ({ 
  onSuccess, 
  onError 
}) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showAuthForm, setShowAuthForm] = useState(false);

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
    clearError: clearFormError,
  } = useFormState(initialFormData);

  const { validateAllFields } = useFormValidation(formData, 'login');
  const { login, error, clearError } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle role selection
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setLocalError(null);
    clearFormError();
  };

  // Handle continue after role selection
  const handleContinue = () => {
    if (selectedRole) {
      setShowAuthForm(true);
    }
  };

  // Handle back to role selection
  const handleBackToRoles = () => {
    setShowAuthForm(false);
    setSelectedRole(null);
    setLocalError(null);
    clearFormError();
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    clearError();

    if (!selectedRole) {
      setLocalError('Please select a role');
      return;
    }

    // Validate form
    const validation = validateAllFields();
    if (!validation.isValid) {
      setLocalError(validation.error || 'Please check your input');
      return;
    }

    try {
      setIsSubmitting(true);
      clearError();
      
      // Create login data with role
      const loginData = {
        email: formData.email,
        password: formData.password,
        appEndpoint: 'https://food-delivery-business-app-sera.vercel.app',
        role: selectedRole
      };
      
      await login(loginData);
      
      // Success callback
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      const errorMessage = error.message || 'Login failed';
      setLocalError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
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
    <div className="space-y-6">
      {/* Role Selection Step */}
      {!showAuthForm && (
        <div className="animate-fadeIn">
          <RoleSelector
            selectedRole={selectedRole}
            onRoleSelect={handleRoleSelect}
          />
          
          {/* Continue Button */}
          {selectedRole && (
            <div className="pt-4">
              <button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80 text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-sera-blue/20 hover:scale-[1.02] text-sm tracking-wide font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sera-blue/20"
              >
                Continue to Login
              </button>
            </div>
          )}
        </div>
      )}

      {/* Authentication Form Step */}
      {showAuthForm && (
        <div className="animate-fadeIn">
          {/* Back Button */}
          <div className="mb-4">
            <button
              onClick={handleBackToRoles}
              className="flex items-center space-x-2 text-gray-600 hover:text-sera-blue transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Back to Role Selection</span>
            </button>
          </div>

          {/* Selected Role Display */}
          <div className="mb-6 p-4 bg-gradient-to-r from-sera-blue/10 to-sera-blue/5 rounded-xl border border-sera-blue/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sera-blue/20 rounded-lg flex items-center justify-center">
                <span className="text-sera-blue text-lg">
                  {selectedRole === 'business-user' && '🏪'}
                  {selectedRole === 'admin' && '⚙️'}
                  {selectedRole === 'superadmin' && '👑'}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-sera-blue">
                  {selectedRole === 'business-user' && 'Restaurant Owner'}
                  {selectedRole === 'admin' && 'Platform Admin'}
                  {selectedRole === 'superadmin' && 'Super Admin'}
                </h4>
                <p className="text-sera-blue/70 text-sm">
                  {selectedRole === 'business-user' && 'Manage your restaurant and orders'}
                  {selectedRole === 'admin' && 'Manage platform settings and users'}
                  {selectedRole === 'superadmin' && 'Full system access and management'}
                </p>
              </div>
            </div>
          </div>

          {/* Login Form */}
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

          {/* Form Divider */}
          <FormDivider />

          {/* OAuth Buttons - Only show when role is selected */}
          <OAuthButtons selectedRole={selectedRole} />
        </div>
      )}
    </div>
  );
};

export default BusinessLoginForm;
