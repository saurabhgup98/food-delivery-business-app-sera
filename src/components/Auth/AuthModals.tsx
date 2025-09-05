import React, { useState, useEffect } from 'react';
import { XIcon } from '../Icons';
import { useAuth } from '../../contexts/AuthContext';
import { LoginRequest, RegisterRequest } from '../../types';

interface AuthModalsProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onModeChange?: (mode: 'login' | 'register') => void;
  onSuccess?: () => void;
}

export default function AuthModals({ isOpen, onClose, mode, onModeChange, onSuccess }: AuthModalsProps) {
  const { login, register, isLoading, error, clearError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      clearError();
      setLocalError(null);
    }
  }, [isOpen, clearError]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    clearError();

    // Validation
    if (mode === 'register' && formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match!');
      return;
    }

    if (mode === 'register' && formData.password.length < 8) {
      setLocalError('Password must be at least 8 characters long');
      return;
    }

    try {
      if (mode === 'login') {
        const loginData: LoginRequest = {
          email: formData.email,
          password: formData.password,
        };
        await login(loginData);
      } else {
        const registerData: RegisterRequest = {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        };
        await register(registerData);
      }

      // Success - close modal and call success callback
      if (onSuccess) {
        onSuccess();
      }
      onClose();
    } catch (error: any) {
      setLocalError(error.message || 'Authentication failed');
    }
  };

  const handleOAuthLogin = (provider: 'google' | 'facebook') => {
    // Redirect to OAuth provider
    const baseUrl = (import.meta as any).env?.VITE_API_BASE_URL || 'https://your-auth-backend.vercel.app';
    const authUrl = provider === 'google' 
      ? `${baseUrl}/api/oauth/google`
      : `${baseUrl}/api/oauth/facebook`;
    
    window.location.href = authUrl;
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleModeSwitch = () => {
    const newMode = mode === 'login' ? 'register' : 'login';
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ top: '80px' }}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        style={{ top: '-80px' }}
      ></div>
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-md mx-4 transform transition-all duration-700 ease-out ${
        isAnimating 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-[-100vh] opacity-0 scale-95'
      }`}>
        {/* Modal Content */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl shadow-2xl border border-slate-600/30 overflow-hidden max-h-[90vh] flex flex-col">
          {/* Fixed Enhanced Header */}
          <div className="relative bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80 px-6 py-4 flex-shrink-0 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 z-10"
            >
              <XIcon className="w-5 h-5" />
            </button>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                  <span className="text-white text-lg font-bold">🔐</span>
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold tracking-wide drop-shadow-sm">
                    {mode === 'login' ? 'Welcome Back' : 'Join SERA'}
                  </h2>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Error Display */}
              {(error || localError) && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm font-medium">
                    {error || localError}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                  <div>
                    <label className="block text-gray-200 text-sm font-semibold mb-2 tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-gray-200 text-sm font-semibold mb-2 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-200 text-sm font-semibold mb-2 tracking-wide">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder={mode === 'login' ? 'Enter your password' : 'Create a password'}
                      className="w-full px-4 py-3 pr-12 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-110"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {mode === 'register' && (
                  <div>
                    <label className="block text-gray-200 text-sm font-semibold mb-2 tracking-wide">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className="w-full px-4 py-3 pr-12 bg-slate-800/60 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sera-blue/50 focus:ring-2 focus:ring-sera-blue/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm hover:bg-slate-800/80"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-110"
                      >
                        {showConfirmPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80 text-white font-bold py-3 px-6 rounded-xl hover:from-sera-blue/90 hover:via-sera-blue/80 hover:to-sera-blue/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sera-blue/20 hover:scale-[1.02] text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{mode === 'login' ? 'Signing In...' : 'Creating Account...'}</span>
                    </div>
                  ) : (
                    mode === 'login' ? 'Sign In' : 'Create Account'
                  )}
                </button>
              </form>

              {/* Enhanced Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-slate-600/50"></div>
                <span className="px-4 text-gray-400 text-sm font-medium tracking-wide">or continue with</span>
                <div className="flex-1 border-t border-slate-600/50"></div>
              </div>

              {/* Enhanced OAuth Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleOAuthLogin('google')}
                  className="w-full group relative flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-semibold tracking-wide overflow-hidden"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="relative z-10">Continue with Google</span>
                </button>

                <button
                  onClick={() => handleOAuthLogin('facebook')}
                  className="w-full group relative flex items-center justify-center space-x-3 bg-blue-600/10 border border-blue-600/20 text-blue-400 py-3 px-4 rounded-xl hover:bg-blue-600/20 hover:border-blue-600/30 hover:text-blue-300 transition-all duration-300 text-sm font-semibold tracking-wide overflow-hidden"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="relative z-10">Continue with Facebook</span>
                </button>
              </div>

              {/* Enhanced Switch Mode */}
              <div className="mt-6 text-center">
                <span className="text-gray-400 text-sm font-medium tracking-wide">
                  {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  onClick={handleModeSwitch}
                  className="text-sera-blue hover:text-sera-blue/80 font-bold text-sm transition-all duration-300 hover:scale-105 tracking-wide"
                >
                  {mode === 'login' ? 'Sign up here' : 'Sign in here'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
