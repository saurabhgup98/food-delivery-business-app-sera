import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { PrimarySelectDropdownProps, DropdownState, DropdownRef } from './types';
import { PRIMARY_SELECT_DROPDOWN_STYLES, getSizeClasses, getVariantClasses } from './styles';

const PrimarySelectDropdown = forwardRef<DropdownRef, PrimarySelectDropdownProps>(({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  size = 'md',
  variant = 'default',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  containerClassName = '',
  searchable = false,
  clearable = false,
  id,
  name,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy
}, ref) => {
  const [state, setState] = useState<DropdownState>({
    isOpen: false,
    searchTerm: '',
    focusedIndex: -1
  });

  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focus: () => triggerRef.current?.focus(),
    blur: () => triggerRef.current?.blur(),
    open: () => setState(prev => ({ ...prev, isOpen: true })),
    close: () => setState(prev => ({ ...prev, isOpen: false, searchTerm: '', focusedIndex: -1 }))
  }));

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  // Get selected option
  const selectedOption = options.find(option => option.value === value);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        containerRef.current && 
        !containerRef.current.contains(target) &&
        panelRef.current &&
        !panelRef.current.contains(target)
      ) {
        setState(prev => ({ ...prev, isOpen: false, searchTerm: '', focusedIndex: -1 }));
      }
    };

    if (state.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [state.isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (state.isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [state.isOpen, searchable]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!state.isOpen) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
        event.preventDefault();
        setState(prev => ({ ...prev, isOpen: true }));
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        setState(prev => ({ ...prev, isOpen: false, searchTerm: '', focusedIndex: -1 }));
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setState(prev => ({
          ...prev,
          focusedIndex: Math.min(prev.focusedIndex + 1, filteredOptions.length - 1)
        }));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setState(prev => ({
          ...prev,
          focusedIndex: Math.max(prev.focusedIndex - 1, -1)
        }));
        break;
      case 'Enter':
        event.preventDefault();
        if (state.focusedIndex >= 0 && filteredOptions[state.focusedIndex]) {
          handleOptionSelect(filteredOptions[state.focusedIndex].value);
        }
        break;
    }
  }, [state.isOpen, state.focusedIndex, filteredOptions]);

  // Handle option selection
  const handleOptionSelect = useCallback((optionValue: string) => {
    onChange(optionValue);
    setState(prev => ({ ...prev, isOpen: false, searchTerm: '', focusedIndex: -1 }));
    triggerRef.current?.focus();
  }, [onChange]);

  // Handle clear selection
  const handleClear = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    onChange('');
    setState(prev => ({ ...prev, searchTerm: '' }));
  }, [onChange]);

  // Handle search input change
  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, searchTerm: event.target.value, focusedIndex: -1 }));
  }, []);

  // Get size and variant classes
  const sizeClasses = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant);

  // Build trigger classes
  const triggerClasses = [
    PRIMARY_SELECT_DROPDOWN_STYLES.trigger.base,
    PRIMARY_SELECT_DROPDOWN_STYLES.trigger.hover,
    PRIMARY_SELECT_DROPDOWN_STYLES.trigger.focus,
    sizeClasses.trigger,
    variantClasses,
    disabled ? PRIMARY_SELECT_DROPDOWN_STYLES.trigger.disabled : '',
    className
  ].filter(Boolean).join(' ');

  // Build container classes
  const containerClasses = [
    PRIMARY_SELECT_DROPDOWN_STYLES.container.base,
    disabled ? PRIMARY_SELECT_DROPDOWN_STYLES.container.disabled : '',
    containerClassName
  ].filter(Boolean).join(' ');

  return (
    <div ref={containerRef} className={containerClasses}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        className={triggerClasses}
        onClick={() => {
          if (!disabled) {
            const rect = triggerRef.current?.getBoundingClientRect();
            setTriggerRect(rect || null);
            setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
          }
        }}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        id={id}
        name={name}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-expanded={state.isOpen}
        aria-haspopup="listbox"
      >
        {/* Left Icon */}
        {LeftIcon && (
          <div className={`${PRIMARY_SELECT_DROPDOWN_STYLES.icon.left} ${sizeClasses.icon}`}>
            <LeftIcon />
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 text-left ${LeftIcon ? 'pl-8' : ''} ${clearable && value ? 'pr-8' : ''}`}>
          {selectedOption ? (
            <span className={PRIMARY_SELECT_DROPDOWN_STYLES.content.selected}>
              {selectedOption.label}
            </span>
          ) : (
            <span className={PRIMARY_SELECT_DROPDOWN_STYLES.content.placeholder}>
              {placeholder}
            </span>
          )}
        </div>

        {/* Clear Button */}
        {clearable && value && !disabled && (
          <button
            type="button"
            className={PRIMARY_SELECT_DROPDOWN_STYLES.clear.button}
            onClick={handleClear}
            aria-label="Clear selection"
          >
            <svg className={PRIMARY_SELECT_DROPDOWN_STYLES.clear.base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Right Icon or Arrow */}
        {RightIcon ? (
          <div className={`${PRIMARY_SELECT_DROPDOWN_STYLES.icon.right} ${sizeClasses.icon}`}>
            <RightIcon />
          </div>
        ) : (
          <svg
            className={`${PRIMARY_SELECT_DROPDOWN_STYLES.icon.arrow} ${sizeClasses.icon} ${
              state.isOpen ? PRIMARY_SELECT_DROPDOWN_STYLES.icon.arrowOpen : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {/* Dropdown Panel */}
      {state.isOpen && triggerRect && createPortal(
        <div
          ref={panelRef}
          className={`${PRIMARY_SELECT_DROPDOWN_STYLES.panel.base} ${PRIMARY_SELECT_DROPDOWN_STYLES.panel.animate} ${PRIMARY_SELECT_DROPDOWN_STYLES.panel.maxHeight} ${PRIMARY_SELECT_DROPDOWN_STYLES.panel.scrollbar}`}
          style={{
            position: 'fixed',
            top: triggerRect.bottom + 4,
            left: triggerRect.left,
            width: triggerRect.width,
            zIndex: 9999
          }}
          role="listbox"
          aria-label="Options"
        >
          {/* Search Input */}
          {searchable && (
            <div className={PRIMARY_SELECT_DROPDOWN_STYLES.search.container}>
              <input
                ref={searchRef}
                type="text"
                value={state.searchTerm}
                onChange={handleSearchChange}
                placeholder="Search options..."
                className={PRIMARY_SELECT_DROPDOWN_STYLES.search.base}
                onKeyDown={handleKeyDown}
              />
            </div>
          )}

          {/* Options */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => {
              const isSelected = option.value === value;
              const isFocused = index === state.focusedIndex;
              const OptionIcon = option.icon;

              return (
                <div
                  key={option.value}
                  className={[
                    PRIMARY_SELECT_DROPDOWN_STYLES.option.base,
                    PRIMARY_SELECT_DROPDOWN_STYLES.option.hover,
                    sizeClasses.option,
                    isSelected ? PRIMARY_SELECT_DROPDOWN_STYLES.option.selected : '',
                    isFocused ? PRIMARY_SELECT_DROPDOWN_STYLES.option.focused : '',
                    option.disabled ? PRIMARY_SELECT_DROPDOWN_STYLES.option.disabled : '',
                    PRIMARY_SELECT_DROPDOWN_STYLES.animation.option
                  ].filter(Boolean).join(' ')}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!option.disabled) {
                      handleOptionSelect(option.value);
                    }
                  }}
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={-1}
                >
                  {OptionIcon && (
                    <div className={sizeClasses.icon}>
                      <OptionIcon />
                    </div>
                  )}
                  <span>{option.label}</span>
                </div>
              );
            })
          ) : (
            <div className={PRIMARY_SELECT_DROPDOWN_STYLES.empty.base}>
              <div className={PRIMARY_SELECT_DROPDOWN_STYLES.empty.icon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709" />
                </svg>
              </div>
              No options found
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
});

PrimarySelectDropdown.displayName = 'PrimarySelectDropdown';

export default PrimarySelectDropdown;
