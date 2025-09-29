import React, { useState } from 'react';
import { FormErrorDisplay } from '../components/FormErrorDisplay';
import { FormModeSwitch } from '../components/FormModeSwitch';

interface RoleSelectionFormProps {
  onRoleSelect: (role: string) => void;
  onModeSwitch?: () => void;
  mode?: 'login' | 'register';
}

const ROLE_OPTIONS = [
  {
    id: 'business-user',
    title: 'Restaurant Owner',
    description: 'Manage your restaurant, orders, and menu',
    icon: '🏪',
    color: 'bg-sera-blue/10 border-sera-blue/30 text-sera-blue'
  },
  {
    id: 'admin',
    title: 'Platform Admin',
    description: 'Manage restaurants, users, and platform settings',
    icon: '⚙️',
    color: 'bg-sera-yellow/10 border-sera-yellow/30 text-sera-yellow'
  },
  {
    id: 'superadmin',
    title: 'Super Admin',
    description: 'Full system access and management',
    icon: '👑',
    color: 'bg-red-500/10 border-red-500/30 text-red-400'
  }
];

export const RoleSelectionForm: React.FC<RoleSelectionFormProps> = ({ onRoleSelect, onModeSwitch, mode = 'login' }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setError(null);
  };

  const handleContinue = () => {
    if (!selectedRole) {
      setError('Please select a role to continue');
      return;
    }
    onRoleSelect(selectedRole);
  };

  return (
    <div className="space-y-6">
      {/* Role Selection Header */}
      <div className="text-center">
        <h3 className="text-white text-3xl font-bold mb-2">Select Your Role</h3>
        <p className="text-white/80 text-sm">Choose your role to access the appropriate features</p>
      </div>

      {/* Role Options */}
      <div className="space-y-4">
        {ROLE_OPTIONS.map((role) => (
          <button
            key={role.id}
            type="button"
            onClick={() => handleRoleSelect(role.id)}
            className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left bg-white/5 backdrop-blur-sm hover:scale-[1.02] ${
              selectedRole === role.id
                ? 'border-sera-blue/60 bg-sera-blue/15 shadow-lg shadow-sera-blue/20'
                : 'border-white/20 hover:border-white/30 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  selectedRole === role.id 
                    ? 'bg-sera-blue/20 border border-sera-blue/40' 
                    : 'bg-white/10 border border-white/20'
                }`}>
                  {role.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-lg">{role.title}</h4>
                  <p className="text-sm text-white/80 mt-1">{role.description}</p>
                </div>
              </div>
              {selectedRole === role.id && (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Error Display */}
      <FormErrorDisplay error={error} />

      {/* Login Button - Always visible but disabled until role selected */}
      <div className="w-full">
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selectedRole}
          className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
            selectedRole
              ? 'bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80 text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-sera-blue/20 cursor-pointer'
              : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedRole ? `Continue as ${ROLE_OPTIONS.find(r => r.id === selectedRole)?.title}` : 'Select a role to continue'}
        </button>
      </div>

      {/* Mode Switch */}
      {onModeSwitch && (
        <FormModeSwitch mode={mode} onModeSwitch={onModeSwitch} />
      )}
    </div>
  );
};