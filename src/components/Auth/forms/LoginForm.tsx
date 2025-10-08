import React, { useState } from 'react';
import { PrimaryInput } from '../../Input/PrimaryInput';
import PrimarySubmitBtn from '../../Buttons/PrimarySubmitBtn';
import { FormErrorDisplay } from '../components/FormErrorDisplay';
import { useAuth } from '../../../contexts/AuthContext';
import { LOGIN_FORM_CONFIG } from './config/LoginFormConfig';
import { validateLoginForm, ValidationErrors } from './validation/LoginValidation';
import BackToRoleSelectionBtn from './components/BackToRoleSelectionBtn';
import OAuthButton from './components/OAuthButton';

interface LoginFormProps {
  onSuccess: () => void;
  selectedRole?: string;
  onBackToRoleSelection?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, selectedRole, onBackToRoleSelection }) => {
  const { login, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState(LOGIN_FORM_CONFIG.initialFormData);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  // PrimarySubmitBtn props
  const submitBtnProps = {
    btnProps: {
      ...LOGIN_FORM_CONFIG.submitButtonProps,
      name: isLoading ? "Signing in..." : LOGIN_FORM_CONFIG.submitButtonProps.name
    },
    isLoading,
    disabled: isLoading
  };

  // OAuth buttons array
  const oauthButtons = [
    {
      provider: LOGIN_FORM_CONFIG.oauthButtons.google.provider,
      onClick: LOGIN_FORM_CONFIG.oauthButtons.google.onClick,
      className: LOGIN_FORM_CONFIG.oauthButtons.google.className
    },
    {
      provider: LOGIN_FORM_CONFIG.oauthButtons.facebook.provider,
      onClick: LOGIN_FORM_CONFIG.oauthButtons.facebook.onClick,
      className: LOGIN_FORM_CONFIG.oauthButtons.facebook.className
    }
  ];

  // Input configuration array with dynamic values
  const inputConfigs = LOGIN_FORM_CONFIG.inputConfigs.map(config => ({
    ...config,
    value: formData[config.name as keyof typeof formData],
    error: validationErrors[config.name]
  }));

  const validateForm = () => {
    const errors = validateLoginForm(formData);
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!validateForm()) return;

    try {
      const loginPayload = {
        email: formData.email,
        password: formData.password,
        appEndpoint: window.location.origin,
        selectedRole: selectedRole
      };
      
      const response = await login(loginPayload);

      if (response.success) {
        onSuccess();
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getRoleDisplay = () => {
    if (!selectedRole) return null;

    const role = LOGIN_FORM_CONFIG.roleInfo[selectedRole as keyof typeof LOGIN_FORM_CONFIG.roleInfo];
    if (!role) return null;

    return (
      <div className="mb-6 p-4 bg-gradient-to-r from-sera-blue/10 to-sera-blue/5 rounded-xl border border-sera-blue/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-sera-blue/20 rounded-lg flex items-center justify-center">
            <span className="text-sera-blue text-lg">{role.icon}</span>
          </div>
          <div>
            <h4 className="font-semibold text-sera-blue">{role.title}</h4>
            <p className="text-sera-blue/70 text-sm">{role.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Back Button */}
      {onBackToRoleSelection && (
        <div className="mb-4">
          <BackToRoleSelectionBtn onClick={onBackToRoleSelection} />
        </div>
      )}

      {/* Selected Role Display */}
      {getRoleDisplay()}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dynamic Input Fields */}
        {inputConfigs.map((config) => (
          <div key={config.name}>
            <PrimaryInput
              name={config.name}
              type={config.type}
              placeholder={config.placeholder}
              value={config.value}
              onChange={(e) => handleInputChange(config.name, e.target.value)}
              disabled={isLoading}
              className={config.error ? 'border-red-500' : ''}
            />
            <FormErrorDisplay error={config.error} />
          </div>
        ))}

        {/* API Error Display */}
        <FormErrorDisplay error={error} />

        {/* Submit Button */}
        <div className="w-full">
          <PrimarySubmitBtn {...submitBtnProps} />
        </div>
      </form>

      {/* Form Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600/30"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-slate-800 text-gray-400">Or continue with</span>
        </div>
      </div>

      {/* OAuth Buttons */}
      <div className="space-y-3">
        {oauthButtons.map((button) => (
          <OAuthButton
            key={button.provider}
            provider={button.provider}
            onClick={button.onClick}
            className={button.className}
          />
        ))}
      </div>
    </div>
  );
};