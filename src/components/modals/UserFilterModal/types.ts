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

export interface UserFilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApplyFilters: (filters: any) => void;
}

