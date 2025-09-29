import React, { useState } from 'react';
import { XIcon } from "../Icons";
import { AuthModalsProps } from "./types/AuthFormTypes";
import { useModalState, useFormMode } from "./hooks/AuthFormHooks";
import { LoginForm } from "./forms/LoginForm";
import { RegisterForm } from "./forms/RegisterForm";
import { RoleSelectionForm } from "./forms/RoleSelectionForm";
import { FormDivider } from "./components/FormDivider";
import { FormModeSwitch } from "./components/FormModeSwitch";
import { MODAL_TITLES, MODAL_SUBTITLES } from "./constants/authConstants";

export default function AuthModals({
  isOpen,
  onClose,
  mode,
  onModeChange,
  onSuccess,
}: AuthModalsProps) {
  // Custom hooks for modal and form management
  const { isAnimating, handleClose } = useModalState(isOpen, onClose);
  const { switchMode } = useFormMode(mode, onModeChange);
  
  // State for login flow
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // Handle successful authentication
  const handleAuthSuccess = () => {
    if (onSuccess) {
      onSuccess();
    }
    onClose();
  };

  // Handle role selection for login
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setShowRoleSelection(false);
  };

  // Handle back to role selection
  const handleBackToRoleSelection = () => {
    setShowRoleSelection(true);
    setSelectedRole(null);
  };


  // Reset state when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      if (mode === 'login') {
        setShowRoleSelection(true);
        setSelectedRole(null);
      } else {
        setShowRoleSelection(false);
        setSelectedRole(null);
      }
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ top: "80px" }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        style={{ top: "-80px" }}
      ></div>

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-md mx-4 transform transition-all duration-700 ease-out ${
          isAnimating
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-[-100vh] opacity-0 scale-95"
          }`}
      >
        {/* Modal Content */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl shadow-2xl border border-slate-600/30 overflow-hidden h-[80vh] flex flex-col">
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
                    {mode === "login" ? MODAL_TITLES.LOGIN : MODAL_TITLES.REGISTER}
                  </h2>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    {mode === "login" ? MODAL_SUBTITLES.LOGIN : MODAL_SUBTITLES.REGISTER}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-6">
              {/* Render appropriate form based on mode and flow */}
              {mode === "login" ? (
                showRoleSelection ? (
                  <RoleSelectionForm 
                    onRoleSelect={handleRoleSelect} 
                    onModeSwitch={switchMode}
                    mode={mode}
                  />
                ) : (
                  <LoginForm 
                    onSuccess={handleAuthSuccess} 
                    selectedRole={selectedRole || undefined}
                    onBackToRoleSelection={handleBackToRoleSelection}
                  />
                )
              ) : (
                <>
                  <RegisterForm onSuccess={handleAuthSuccess} />
                  
                  {/* Form Divider */}
                  <FormDivider />

                  {/* OAuth Buttons for Register */}
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
                </>
              )}

              {/* Mode Switch - Only show for register or when not in role selection */}
              {mode === "register" || (mode === "login" && !showRoleSelection) ? (
                <FormModeSwitch mode={mode} onModeSwitch={switchMode} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}