// PrimarySelectDropdown Utils
// Utility functions for dropdown component

import { DropdownOption } from './types';

/**
 * Filter options based on search term
 */
export const filterOptions = (options: DropdownOption[], searchTerm: string): DropdownOption[] => {
  if (!searchTerm.trim()) {
    return options;
  }
  
  return options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

/**
 * Find selected option by value
 */
export const findSelectedOption = (options: DropdownOption[], value: string): DropdownOption | undefined => {
  return options.find(option => option.value === value);
};

/**
 * Get next focusable index
 */
export const getNextFocusableIndex = (currentIndex: number, optionsLength: number): number => {
  return Math.min(currentIndex + 1, optionsLength - 1);
};

/**
 * Get previous focusable index
 */
export const getPreviousFocusableIndex = (currentIndex: number): number => {
  return Math.max(currentIndex - 1, -1);
};

/**
 * Check if option is disabled
 */
export const isOptionDisabled = (option: DropdownOption): boolean => {
  return Boolean(option.disabled);
};

/**
 * Validate dropdown props
 */
export const validateDropdownProps = (props: {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
}): boolean => {
  return (
    Array.isArray(props.options) &&
    typeof props.value === 'string' &&
    typeof props.onChange === 'function'
  );
};

/**
 * Generate unique ID for dropdown
 */
export const generateDropdownId = (prefix: string = 'dropdown'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Calculate dropdown position
 */
export const calculateDropdownPosition = (
  triggerRect: DOMRect,
  panelHeight: number = 240
): { top: number; left: number; width: number } => {
  const viewportHeight = window.innerHeight;
  const spaceBelow = viewportHeight - triggerRect.bottom;
  const spaceAbove = triggerRect.top;
  
  // If there's not enough space below, position above
  const shouldPositionAbove = spaceBelow < panelHeight && spaceAbove > spaceBelow;
  
  return {
    top: shouldPositionAbove 
      ? triggerRect.top - panelHeight - 4 
      : triggerRect.bottom + 4,
    left: triggerRect.left,
    width: triggerRect.width
  };
};
