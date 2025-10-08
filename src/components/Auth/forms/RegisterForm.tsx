import React, { useState } from 'react';
import { PrimaryInput } from '../../Input/PrimaryInput';
import PrimarySubmitBtn from '../../Buttons/PrimarySubmitBtn';
import { FormErrorDisplay } from '../components/FormErrorDisplay';
import { useAuth } from '../../../contexts/AuthContext';
import { REGISTER_FORM_CONFIG } from './config/RegisterFormConfig';
import { validateRegisterForm, ValidationErrors } from './validation/RegisterValidation';

interface RegisterFormProps {
  onSuccess: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const { register, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState(REGISTER_FORM_CONFIG.initialFormData);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  // PrimarySubmitBtn props
  const submitBtnProps = {
    btnProps: {
      ...REGISTER_FORM_CONFIG.submitButtonProps,
      name: isLoading ? "Creating account..." : REGISTER_FORM_CONFIG.submitButtonProps.name
    },
    isLoading,
    disabled: isLoading
  };

  // Input configuration array with dynamic values
  const inputConfigs = REGISTER_FORM_CONFIG.inputConfigs.map(config => ({
    ...config,
    value: formData[config.name as keyof typeof formData],
    error: validationErrors[config.name]
  }));

  const validateForm = () => {
    const errors = validateRegisterForm(formData);
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!validateForm()) return;

    try {
      const response = await register({
        username: formData.name,
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
        <PrimarySubmitBtn {...submitBtnProps} />
      </div>
    </form>
  );
};