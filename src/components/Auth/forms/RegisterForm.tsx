import React, { useState } from 'react';
import { PrimaryInput } from '../../Input/PrimaryInput';
import PrimarySubmitBtn from '../../Buttons/PrimarySubmitBtn';
import { FormErrorDisplay } from '../components/FormErrorDisplay';
import { useAuth } from '../../../contexts/AuthContext';
import { VALIDATION_MESSAGES } from '../constants/authConstants';

interface RegisterFormProps {
  onSuccess: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const { register, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Input configuration array
  const inputConfigs = [
    {
      name: 'name',
      type: 'text' as const,
      placeholder: 'Full name',
      value: formData.name,
      error: validationErrors.name
    },
    {
      name: 'email',
      type: 'email' as const,
      placeholder: 'Email address',
      value: formData.email,
      error: validationErrors.email
    },
    {
      name: 'password',
      type: 'password' as const,
      placeholder: 'Password',
      value: formData.password,
      error: validationErrors.password
    },
    {
      name: 'confirmPassword',
      type: 'password' as const,
      placeholder: 'Confirm password',
      value: formData.confirmPassword,
      error: validationErrors.confirmPassword
    }
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = VALIDATION_MESSAGES.REQUIRED;
    } else if (formData.name.trim().length < 2) {
      errors.name = VALIDATION_MESSAGES.NAME_MIN_LENGTH;
    }

    if (!formData.email.trim()) {
      errors.email = VALIDATION_MESSAGES.REQUIRED;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = VALIDATION_MESSAGES.EMAIL_INVALID;
    }

    if (!formData.password.trim()) {
      errors.password = VALIDATION_MESSAGES.REQUIRED;
    } else if (formData.password.length < 8) {
      errors.password = VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH;
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = VALIDATION_MESSAGES.REQUIRED;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = VALIDATION_MESSAGES.PASSWORD_MISMATCH;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!validateForm()) return;

    try {
      const response = await register({
        email: formData.email,
        password: formData.password,
        appEndpoint: window.location.origin,
        role: 'business-user'
      });

      if (response.success) {
        onSuccess();
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
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
        <PrimarySubmitBtn
          btnProps={{
            name: isLoading ? "Creating account..." : "Create Account",
            bgColor: "bg-sera-blue",
            textColor: "text-white",
            hoverBgColor: "hover:bg-sera-blue/90"
          }}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </div>
    </form>
  );
};