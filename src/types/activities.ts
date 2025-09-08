export interface Activity {
  _id: string;
  type: string;
  title: string;
  description: string;
  userId?: {
    _id: string;
    name: string;
    email: string;
  };
  restaurantId?: {
    _id: string;
    name: string;
    location: string;
  };
  targetRole: 'admin' | 'restaurant_owner';
  metadata: Record<string, any>;
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityStats {
  _id: string;
  count: number;
  latest: string;
}

export interface ActivityPagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface ActivitiesResponse {
  activities: Activity[];
  pagination: ActivityPagination;
}

export interface ActivityType {
  type: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

export const ACTIVITY_TYPES: Record<string, ActivityType> = {
  customer_registered: {
    type: 'customer_registered',
    label: 'Customer Registered',
    description: 'New customer joined the platform',
    icon: '👤',
    color: 'text-green-600'
  },
  customer_suspended: {
    type: 'customer_suspended',
    label: 'Customer Suspended',
    description: 'Customer account was suspended',
    icon: '⚠️',
    color: 'text-red-600'
  },
  customer_reactivated: {
    type: 'customer_reactivated',
    label: 'Customer Reactivated',
    description: 'Customer account was reactivated',
    icon: '✅',
    color: 'text-green-600'
  },
  restaurant_registered: {
    type: 'restaurant_registered',
    label: 'Restaurant Registered',
    description: 'New restaurant joined the platform',
    icon: '🏪',
    color: 'text-blue-600'
  },
  restaurant_activated: {
    type: 'restaurant_activated',
    label: 'Restaurant Activated',
    description: 'Restaurant was activated',
    icon: '✅',
    color: 'text-green-600'
  },
  restaurant_deactivated: {
    type: 'restaurant_deactivated',
    label: 'Restaurant Deactivated',
    description: 'Restaurant was deactivated',
    icon: '❌',
    color: 'text-red-600'
  },
  order_placed: {
    type: 'order_placed',
    label: 'Order Placed',
    description: 'New order was placed',
    icon: '🛒',
    color: 'text-blue-600'
  },
  payment_received: {
    type: 'payment_received',
    label: 'Payment Received',
    description: 'Payment was received',
    icon: '💰',
    color: 'text-green-600'
  },
  dish_added: {
    type: 'dish_added',
    label: 'Dish Added',
    description: 'New dish was added to menu',
    icon: '🍽️',
    color: 'text-purple-600'
  },
  system_maintenance: {
    type: 'system_maintenance',
    label: 'System Maintenance',
    description: 'System maintenance performed',
    icon: '🔧',
    color: 'text-yellow-600'
  },
  payment_gateway_down: {
    type: 'payment_gateway_down',
    label: 'Payment Gateway Down',
    description: 'Payment gateway is experiencing issues',
    icon: '🚨',
    color: 'text-red-600'
  }
};
