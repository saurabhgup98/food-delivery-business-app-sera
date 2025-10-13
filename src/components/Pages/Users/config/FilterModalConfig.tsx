export interface FilterOption {
    value: string;
    label: string;
}

export interface FilterSection {
    key: string;
    label: string;
    type: 'buttons' | 'select' | 'input';
    options?: FilterOption[];
    placeholder?: string;
    gridCols?: number;
}

export interface FilterModalConfig {
    header: {
        title: string;
        subtitle: string;
        icon: string;
    };
    initialFilters: {
        status: string;
        role: string;
        dateRange: string;
        searchTerm: string;
    };
    filters: FilterSection[];
}

export const FILTER_MODAL_CONFIG: FilterModalConfig = {
    header: {
        title: "Filter Users",
        subtitle: "Refine your search results",
        icon: "🔍"
    },
    initialFilters: {
        status: '',
        role: '',
        dateRange: '',
        searchTerm: ''
    },
    filters: [
        {
            key: 'status',
            label: 'Status',
            type: 'buttons',
            gridCols: 2,
            options: [
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'pending', label: 'Pending' },
                { value: 'suspended', label: 'Suspended' }
            ]
        },
        {
            key: 'role',
            label: 'Role',
            type: 'buttons',
            gridCols: 2,
            options: [
                { value: 'customer', label: 'Customer' },
                { value: 'restaurant_owner', label: 'Restaurant Owner' },
                { value: 'admin', label: 'Admin' }
            ]
        },
        {
            key: 'dateRange',
            label: 'Date Range',
            type: 'select',
            options: [
                { value: '', label: 'All Time' },
                { value: 'today', label: 'Today' },
                { value: 'week', label: 'This Week' },
                { value: 'month', label: 'This Month' },
                { value: 'quarter', label: 'This Quarter' },
                { value: 'year', label: 'This Year' }
            ]
        },
        {
            key: 'searchTerm',
            label: 'Search Term',
            type: 'input',
            placeholder: 'Search by name, email...'
        }
    ]
};