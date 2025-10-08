import React, { useState } from 'react';
import { FormErrorDisplay } from '../components/FormErrorDisplay';
import { FormModeSwitch } from '../components/FormModeSwitch';
import { ROLE_SELECTION_FORM_CONFIG } from './config/RoleSelectionFormConfig';

interface RoleSelectionFormProps {
  onRoleSelect: (role: string) => void;
  onModeSwitch?: () => void;
  mode?: 'login' | 'register';
}


export const RoleSelectionForm: React.FC<RoleSelectionFormProps> = ({ onRoleSelect, onModeSwitch, mode = 'login' }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setError(null);
  };

  const handleContinue = () => {
    if (!selectedRole) {
      setError(ROLE_SELECTION_FORM_CONFIG.errorMessages.noRoleSelected);
      return;
    }
    onRoleSelect(selectedRole);
  };

  return (
    <div className="space-y-6">
      {/* Role Selection Header */}
      <div className="text-center">
        <h3 className="text-white text-3xl font-bold mb-2">{ROLE_SELECTION_FORM_CONFIG.header.title}</h3>
        <p className="text-white/80 text-sm">{ROLE_SELECTION_FORM_CONFIG.header.description}</p>
      </div>

      {/* Role Options */}
      <div className="space-y-4">
        {ROLE_SELECTION_FORM_CONFIG.roleOptions.map((role) => (
          <button
            key={role.id}
            type="button"
            onClick={() => handleRoleSelect(role.id)}
            className={`${ROLE_SELECTION_FORM_CONFIG.roleCard.base} ${
              selectedRole === role.id
                ? ROLE_SELECTION_FORM_CONFIG.roleCard.selected
                : ROLE_SELECTION_FORM_CONFIG.roleCard.unselected
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`${ROLE_SELECTION_FORM_CONFIG.roleCard.icon.base} ${
                  selectedRole === role.id 
                    ? ROLE_SELECTION_FORM_CONFIG.roleCard.icon.selected
                    : ROLE_SELECTION_FORM_CONFIG.roleCard.icon.unselected
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
                  <div className={ROLE_SELECTION_FORM_CONFIG.checkmark.className}>
                    <span className={ROLE_SELECTION_FORM_CONFIG.checkmark.icon}>✓</span>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Error Display */}
      <FormErrorDisplay error={error} />

      {/* Continue Button - Always visible but disabled until role selected */}
      <div className="w-full">
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selectedRole}
          className={selectedRole 
            ? ROLE_SELECTION_FORM_CONFIG.button.continue.enabled.className
            : ROLE_SELECTION_FORM_CONFIG.button.continue.disabled.className
          }
        >
          {selectedRole 
            ? `Continue as ${ROLE_SELECTION_FORM_CONFIG.roleOptions.find(r => r.id === selectedRole)?.title}` 
            : 'Select a role to continue'
          }
        </button>
      </div>

      {/* Mode Switch */}
      {onModeSwitch && (
        <FormModeSwitch mode={mode} onModeSwitch={onModeSwitch} />
      )}
    </div>
  );
};