// PrimaryInput.tsx - Generic input component for the entire application

import React, { useState } from 'react';
import { PrimaryInputProps } from './types/InputTypes';
import { INPUT_STYLES, INPUT_STATES } from './constants/InputConstants';

export const PrimaryInput: React.FC<PrimaryInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  type = 'text',
  required = false,
  disabled = false,
  showPassword = false,
  onTogglePassword,
  className = '',
  labelClassName = '',
  inputClassName = '',
  error,
  success = false,
  icon,
  iconPosition = 'left',
  onIconClick,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  title,
}) => {
  const [, setIsFocused] = useState(false);

  // Determine if this is a password field that needs toggle functionality
  const isPasswordField = type === 'password' && onTogglePassword;
  const hasLeftIcon = icon && iconPosition === 'left';
  const hasRightIcon = icon && iconPosition === 'right';
  const hasClickableIcon = onIconClick;

  // Choose appropriate CSS class based on icon configuration
  const getInputClassName = () => {
    let baseClass: string = INPUT_STYLES.BASE_INPUT;
    
    if (hasLeftIcon && hasRightIcon) {
      baseClass = INPUT_STYLES.INPUT_WITH_BOTH_ICONS;
    } else if (hasLeftIcon) {
      baseClass = INPUT_STYLES.INPUT_WITH_LEFT_ICON;
    } else if (hasRightIcon || isPasswordField) {
      baseClass = INPUT_STYLES.INPUT_WITH_RIGHT_ICON;
    }

    // Add state-based styling
    if (error) {
      baseClass += ` ${INPUT_STATES.ERROR_BORDER}`;
    } else if (success) {
      baseClass += ` ${INPUT_STATES.SUCCESS_BORDER}`;
    }

    if (disabled) {
      baseClass += ` ${INPUT_STATES.DISABLED}`;
    }

    return `${baseClass} ${inputClassName}`.trim();
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={className}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={name}
          className={`${INPUT_STYLES.LABEL} ${labelClassName}`.trim()}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {hasLeftIcon && (
          <div className={INPUT_STYLES.ICON_LEFT}>
            {icon}
          </div>
        )}

        {/* Input Field */}
        <input
          id={name}
          name={name}
          type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={getInputClassName()}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          title={title}
        />

        {/* Right Icon or Password Toggle */}
        {(hasRightIcon || isPasswordField) && (
          <div className={INPUT_STYLES.ICON_RIGHT}>
            {isPasswordField ? (
              <button
                type="button"
                onClick={onTogglePassword}
                className={INPUT_STYLES.PASSWORD_TOGGLE}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            ) : hasClickableIcon ? (
              <button
                type="button"
                onClick={onIconClick}
                className={INPUT_STYLES.CLICKABLE_ICON}
                tabIndex={-1}
              >
                {icon}
              </button>
            ) : (
              <div className={INPUT_STYLES.ICON_CONTAINER}>
                {icon}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className={INPUT_STYLES.ERROR}>
          {error}
        </p>
      )}

      {/* Success Message */}
      {success && !error && (
        <p className={INPUT_STYLES.SUCCESS}>
          ✓ Valid
        </p>
      )}
    </div>
  );
};

// Helper function to create input configuration
export const createInputConfig = (
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  options: Partial<PrimaryInputProps> = {}
): PrimaryInputProps => {
  return {
    name,
    value,
    onChange,
    placeholder,
    type: 'text',
    required: false,
    disabled: false,
    showPassword: false,
    className: '',
    labelClassName: '',
    inputClassName: '',
    success: false,
    iconPosition: 'left',
    ...options,
  };
};
