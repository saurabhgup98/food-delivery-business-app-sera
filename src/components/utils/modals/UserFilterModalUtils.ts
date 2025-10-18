import { USER_FILTER_MODAL_STYLES, getSelectBtnFilterStyles, getUserFilterSectionClasses } from '../../modals/UserFilterModal/styles';
import { FilterModalConfig } from '../../modals/UserFilterModal/types';
import { 
  getCloseButtonProps, 
  getSearchButtonProps, 
  getResetButtonProps, 
  getApplyButtonProps 
} from '../buttonUtils';

export { getUserFilterSectionClasses };

// Re-export centralized button utils with consistent naming
export const getSectionHeaderBtnProps = getCloseButtonProps;
export const getSearchBtnProps = getSearchButtonProps;
export const getResetBtnProps = getResetButtonProps;
export const getApplyBtnProps = getApplyButtonProps;

// User Filter Modal Configuration
export const USER_FILTER_MODAL_CONFIG: FilterModalConfig = {
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

// Modal configuration and utility functions
export const getUserFilterModalConfig = () => USER_FILTER_MODAL_CONFIG;

// Section header props for modals
export const getUserFilterModalSectionHeaderProps = (onClick: () => void) => ({
    icon: USER_FILTER_MODAL_CONFIG.header.icon,
    heading: USER_FILTER_MODAL_CONFIG.header.title,
    subHeading: USER_FILTER_MODAL_CONFIG.header.subtitle,
    rightSideAction: {
        onClick
    },
    className: USER_FILTER_MODAL_STYLES.header.container
});

// PrimarySelectBtn props generator for filter buttons (logic only)
export const getSelectBtnFilterProps = (key: string, label: string, onClick: () => void, isSelected: boolean) => {
  const styleConfig = getSelectBtnFilterStyles(key, isSelected);
  
  return {
    text: label,
    onClick,
    isSelected,
    ...styleConfig
  };
};

// Select dropdown classes
export const getUserFilterSelectClasses = () => ({
    container: USER_FILTER_MODAL_STYLES.select.container,
    input: USER_FILTER_MODAL_STYLES.select.input,
    option: USER_FILTER_MODAL_STYLES.select.option,
    arrow: USER_FILTER_MODAL_STYLES.select.arrow,
    arrowIcon: USER_FILTER_MODAL_STYLES.select.arrowIcon
});

// Search input classes
export const getUserFilterSearchInputClasses = () => ({
    container: USER_FILTER_MODAL_STYLES.search.container
});

// Content section classes
export const getUserFilterContentSectionClasses = (index: number) => ({
    section: `${USER_FILTER_MODAL_STYLES.content.section}`,
    style: { animationDelay: USER_FILTER_MODAL_STYLES.animation.delay(index) },
    label: USER_FILTER_MODAL_STYLES.content.label,
    labelAccent: USER_FILTER_MODAL_STYLES.content.labelAccent
});

// Footer classes
export const getUserFilterFooterClasses = () => ({
    container: USER_FILTER_MODAL_STYLES.footer.container,
    buttonContainer: USER_FILTER_MODAL_STYLES.footer.buttonContainer
});

// Modal container classes
export const getUserFilterModalClasses = () => ({
    overlay: USER_FILTER_MODAL_STYLES.base.overlay,
    container: USER_FILTER_MODAL_STYLES.base.container,
    content: USER_FILTER_MODAL_STYLES.base.content,
    footer: USER_FILTER_MODAL_STYLES.base.footer
});