// UserFilterModal Utils
// Utility functions for user filter modal component

// import { UserFilterModalProps } from './types';

/**
 * Validate filter form data
 */
export const validateFilterData = (_data: any): boolean => {
  // Add validation logic here
  return true;
};

/**
 * Reset filter form to default values
 */
export const resetFilterForm = (): any => {
  return {
    searchTerm: '',
    role: '',
    status: '',
    dateRange: '',
    sortBy: 'name',
    sortOrder: 'asc'
  };
};

/**
 * Apply filters to user data
 */
export const applyFilters = (users: any[], _filters: any): any[] => {
  return users.filter(_user => {
    // Add filtering logic here
    return true;
  });
};

/**
 * Get filter summary text
 */
export const getFilterSummary = (filters: any): string => {
  const activeFilters = Object.entries(filters)
    .filter(([_key, value]) => value && value !== '')
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
  
  return activeFilters || 'No filters applied';
};

/**
 * Check if any filters are active
 */
export const hasActiveFilters = (filters: any): boolean => {
  return Object.values(filters).some(value => value && value !== '');
};

/**
 * Generate filter query string
 */
export const generateFilterQuery = (filters: any): string => {
  const params = new URLSearchParams();
  
  Object.entries(filters).forEach(([key, value]) => {
    if (value && value !== '') {
      params.append(key, String(value));
    }
  });
  
  return params.toString();
};

/**
 * Parse filter query string
 */
export const parseFilterQuery = (queryString: string): any => {
  const params = new URLSearchParams(queryString);
  const filters: any = {};
  
  for (const [key, value] of params.entries()) {
    filters[key] = value;
  }
  
  return filters;
};
