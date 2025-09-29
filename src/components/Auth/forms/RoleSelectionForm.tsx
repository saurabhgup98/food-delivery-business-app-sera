import React, { useState } from 'react';
import { FormErrorDisplay } from '../components/FormErrorDisplay';

interface RoleSelectionFormProps {
  onRoleSelect: (role: string) => void;
}

const ROLE_OPTIONS = [
  {
    id: 'business-user',
    title: 'Business Owner',
    description: 'Manage your restaurant and orders',
    icon: '🏪',
    color: 'bg-sera-blue/10 border-sera-blue/30 text-sera-blue'
  },
  {
    id: 'admin',
    title: 'Platform Admin',
    description: 'Manage the entire platform',
    icon: '👑',
    color: 'bg-sera-yellow/10 border-sera-yellow/30 text-sera-yellow'
  },
  {
    id: 'superadmin',
    title: 'Super Admin',
    description: 'Full system access and control',
    icon: '⚡',
    color: 'bg-red-500/10 border-red-500/30 text-red-400'
  }
];

export const RoleSelectionForm: React.FC<RoleSelectionFormProps> = ({ onRoleSelect }) => {
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
      {/* Role Selection */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Choose Your Role</h3>
        <div className="space-y-3">
          {ROLE_OPTIONS.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => handleRoleSelect(role.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedRole === role.id
                  ? `${role.color} border-opacity-100`
                  : 'border-gray-600/30 bg-gray-800/50 text-gray-300 hover:border-gray-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{role.icon}</span>
                <div>
                  <h4 className="font-semibold">{role.title}</h4>
                  <p className="text-sm opacity-80">{role.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <FormErrorDisplay error={error} />
      </div>

      {/* Continue Button */}
      <div className="w-full">
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selectedRole}
          className="w-full py-3 px-6 bg-sera-blue text-white rounded-xl font-medium transition-all duration-200 hover:bg-sera-blue/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
};