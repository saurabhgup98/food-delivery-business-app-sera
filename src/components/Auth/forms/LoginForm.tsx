import React, { useState } from 'react';
import { PrimaryInput } from '../../Input/PrimaryInput';
import PrimarySubmitBtn from '../../Buttons/PrimarySubmitBtn';
import { FormErrorDisplay } from '../components/FormErrorDisplay';
import { useAuth } from '../../../contexts/AuthContext';
import { VALIDATION_MESSAGES } from '../constants/authConstants';

interface LoginFormProps {
  onSuccess: () => void;
  selectedRole?: string;
  onBackToRoleSelection?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, selectedRole, onBackToRoleSelection }) => {
  const { login, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Input configuration array
  const inputConfigs = [
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
    }
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
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

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    if (!validateForm()) return;

    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
        appEndpoint: window.location.origin
      });

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
    
    const roleInfo = {
      'business-user': { title: 'Restaurant Owner', icon: '🏪', description: 'Manage your restaurant and orders' },
      'admin': { title: 'Platform Admin', icon: '⚙️', description: 'Manage restaurants, users, and platform settings' },
      'superadmin': { title: 'Super Admin', icon: '👑', description: 'Full system access and management' }
    };
    
    const role = roleInfo[selectedRole as keyof typeof roleInfo];
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
          <button
            onClick={onBackToRoleSelection}
            className="flex items-center space-x-2 text-gray-400 hover:text-sera-blue transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Back to Role Selection</span>
          </button>
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
          <PrimarySubmitBtn
            btnProps={{
              name: isLoading ? "Signing in..." : "Sign In",
              bgColor: "w-full bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80",
              textColor: "text-white",
              hoverBgColor: "hover:from-sera-blue/90 hover:via-sera-blue/80 hover:to-sera-blue/70",
              border: "py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-sera-blue/20 hover:scale-[1.02] text-sm tracking-wide font-bold"
            }}
            isLoading={isLoading}
            disabled={isLoading}
          />
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
        <button
          onClick={() => window.location.href = `${(import.meta as any).env?.VITE_API_BASE_URL || 'https://simple-authentication-service.vercel.app'}/api/oauth/google`}
          className="w-full flex items-center justify-center space-x-3 py-3 px-6 rounded-xl border-2 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sera-blue/20"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="font-medium">Continue with Google</span>
        </button>
        
        <button
          onClick={() => window.location.href = `${(import.meta as any).env?.VITE_API_BASE_URL || 'https://simple-authentication-service.vercel.app'}/api/oauth/facebook`}
          className="w-full flex items-center justify-center space-x-3 py-3 px-6 rounded-xl border-2 border-blue-600/20 bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 hover:border-blue-600/30 hover:text-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sera-blue/20"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span className="font-medium">Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
};