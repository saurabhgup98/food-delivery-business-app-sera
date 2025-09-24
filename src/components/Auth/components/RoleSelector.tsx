// RoleSelector.tsx - Role selection component for business app

import React from 'react';

export interface Role {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface RoleSelectorProps {
  selectedRole: string | null;
  onRoleSelect: (role: string) => void;
  className?: string;
}

const BUSINESS_ROLES: Role[] = [
  {
    id: 'business-user',
    name: 'Restaurant Owner',
    description: 'Manage your restaurant, orders, and menu',
    icon: '🏪',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'admin',
    name: 'Platform Admin',
    description: 'Manage restaurants, users, and platform settings',
    icon: '⚙️',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'superadmin',
    name: 'Super Admin',
    description: 'Full system access and management',
    icon: '👑',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  }
];

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  selectedRole,
  onRoleSelect,
  className = ''
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Select Your Role
        </h3>
        <p className="text-gray-600 text-sm">
          Choose your role to access the appropriate features
        </p>
      </div>

      {/* Role Cards */}
      <div className="grid gap-3">
        {BUSINESS_ROLES.map((role) => (
          <button
            key={role.id}
            onClick={() => onRoleSelect(role.id)}
            className={`
              relative p-4 rounded-xl border-2 transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-sera-blue/20
              ${selectedRole === role.id
                ? `${role.bgColor} ${role.borderColor} border-opacity-100 shadow-md`
                : 'bg-white border-gray-200 hover:border-gray-300'
              }
            `}
          >
            {/* Selection Indicator */}
            {selectedRole === role.id && (
              <div className="absolute top-3 right-3">
                <div className="w-6 h-6 bg-sera-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}

            {/* Role Content */}
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                ${selectedRole === role.id ? role.bgColor : 'bg-gray-100'}
                transition-colors duration-300
              `}>
                {role.icon}
              </div>

              {/* Role Info */}
              <div className="flex-1 text-left">
                <h4 className={`
                  font-semibold text-lg mb-1
                  ${selectedRole === role.id ? role.color : 'text-gray-800'}
                  transition-colors duration-300
                `}>
                  {role.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>

            {/* Hover Effect */}
            <div className={`
              absolute inset-0 rounded-xl transition-opacity duration-300
              ${selectedRole === role.id 
                ? 'opacity-0' 
                : 'opacity-0 hover:opacity-100 bg-gradient-to-r from-sera-blue/5 to-sera-blue/10'
              }
            `} />
          </button>
        ))}
      </div>

      {/* Continue Button */}
      {selectedRole && (
        <div className="pt-4">
          <div className="flex items-center justify-center space-x-2 text-sera-blue">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">
              Continue with {BUSINESS_ROLES.find(r => r.id === selectedRole)?.name}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleSelector;
