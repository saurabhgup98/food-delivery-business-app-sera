// PrimarySelectDropdown Interfaces
// Industry-standard dropdown component interfaces

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface PrimarySelectDropdownProps {
  // Required props
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  
  // Optional props with sensible defaults
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  
  // Icon props
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  
  // Styling props
  className?: string;
  containerClassName?: string;
  
  // Behavior props
  searchable?: boolean;
  clearable?: boolean;
  
  // Accessibility props
  id?: string;
  name?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export interface DropdownState {
  isOpen: boolean;
  searchTerm: string;
  focusedIndex: number;
}

export interface DropdownRef {
  focus: () => void;
  blur: () => void;
  open: () => void;
  close: () => void;
}
