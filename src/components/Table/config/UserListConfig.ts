
// Table column headers configuration
export const TABLE_HEADERS = [
  { key: 'user', label: 'User', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'orders', label: 'Orders', sortable: true },
  { key: 'spent', label: 'Spent', sortable: true },
  { key: 'lastActive', label: 'Last Active', sortable: true },
  { key: 'actions', label: 'Actions', sortable: false }
] as const;

// Status color configuration
export const STATUS_COLORS = {
  active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/20',
  inactive: 'bg-gray-500/20 text-gray-300 border-gray-500/40 shadow-lg shadow-gray-500/20',
  pending: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-lg shadow-amber-500/20',
  suspended: 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-lg shadow-rose-500/20',
  default: 'bg-slate-500/20 text-slate-300 border-slate-500/40 shadow-lg shadow-slate-500/20'
} as const;

// Role color configuration
export const ROLE_COLORS = {
  customer: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  restaurant_owner: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  admin: 'bg-red-500/20 text-red-300 border-red-500/40',
  default: 'bg-slate-500/20 text-slate-300 border-slate-500/40'
} as const;

// Action buttons array for mapping
export const ACTION_BUTTONS = [
  {
    type: 'view',
    className: 'w-8 h-8 bg-sera-blue/20 border border-sera-blue/40 rounded-lg flex items-center justify-center text-sera-blue hover:bg-sera-blue/30 hover:border-sera-blue/60 transition-all duration-200',
    tooltip: 'View User'
  },
  {
    type: 'edit',
    className: 'w-8 h-8 bg-sera-yellow/20 border border-sera-yellow/40 rounded-lg flex items-center justify-center text-sera-yellow hover:bg-sera-yellow/30 hover:border-sera-yellow/60 transition-all duration-200',
    tooltip: 'Edit User'
  },
  {
    type: 'delete',
    className: 'w-8 h-8 bg-rose-500/20 border border-rose-500/40 rounded-lg flex items-center justify-center text-rose-400 hover:bg-rose-500/30 hover:border-rose-500/60 transition-all duration-200',
    tooltip: 'Delete User'
  }
] as const;

// Table styling configuration
export const TABLE_STYLES = {
  container: 'bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border border-sera-pink/30 rounded-2xl shadow-2xl overflow-hidden',
  header: 'bg-gradient-to-r from-dark-700/80 to-dark-600/80 border-b border-white/10 backdrop-blur-sm sticky top-0 z-10',
  headerCell: 'px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider whitespace-nowrap',
  body: 'divide-y divide-white/5',
  row: 'hover:bg-dark-700/30 transition-colors duration-200',
  cell: 'px-6 py-4 whitespace-nowrap',
  footer: 'bg-dark-700/30 border-t border-dark-600 px-6 py-4'
} as const;

// Pagination configuration
export const PAGINATION_CONFIG = {
  itemsPerPage: 10,
  maxVisiblePages: 5,
  showFirstLast: true,
  showPrevNext: true
} as const;
