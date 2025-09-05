// Users page data structure following business-app design pattern

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  role: 'customer' | 'restaurant_owner' | 'admin';
  joinDate: string;
  lastActive: string;
  totalOrders: number;
  totalSpent: number;
  avatar?: string;
  location?: string;
}

export interface UserActivity {
  id: string;
  type: 'registration' | 'order' | 'profile_update' | 'login' | 'payment';
  title: string;
  description: string;
  time: string;
  status: 'completed' | 'pending' | 'failed';
  userId: string;
  userName: string;
}

export interface UserMetrics {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export interface UsersData {
  metrics: UserMetrics[];
  activities: UserActivity[];
  quickActions: QuickAction[];
  users: User[];
}

export const mockUsersData: UsersData = {
  metrics: [
    { title: 'Total Users', value: '2,340', change: '+12%', changeType: 'positive', icon: '👥' },
    { title: 'Active Users', value: '1,890', change: '+8%', changeType: 'positive', icon: '✅' },
    { title: 'New This Week', value: '156', change: '+15%', changeType: 'positive', icon: '🆕' },
    { title: 'Suspended', value: '23', change: '-2%', changeType: 'negative', icon: '⚠️' }
  ],
  activities: [
    { id: '1', type: 'registration', title: 'New user "John Doe" registered', description: 'User account created successfully', time: '2 minutes ago', status: 'completed', userId: '1', userName: 'John Doe' },
    { id: '2', type: 'order', title: 'User "Sarah Wilson" placed order', description: 'Order #1234 placed successfully', time: '5 minutes ago', status: 'completed', userId: '2', userName: 'Sarah Wilson' },
    { id: '3', type: 'profile_update', title: 'User "Mike Johnson" updated profile', description: 'Profile information updated', time: '8 minutes ago', status: 'completed', userId: '3', userName: 'Mike Johnson' },
    { id: '4', type: 'login', title: 'User "Emma Davis" logged in', description: 'Successful login from mobile app', time: '12 minutes ago', status: 'completed', userId: '4', userName: 'Emma Davis' },
    { id: '5', type: 'payment', title: 'Payment failed for "Alex Brown"', description: 'Payment processing failed - retry needed', time: '15 minutes ago', status: 'failed', userId: '5', userName: 'Alex Brown' },
    { id: '6', type: 'registration', title: 'New restaurant owner "Pizza Palace"', description: 'Restaurant owner account created', time: '18 minutes ago', status: 'completed', userId: '6', userName: 'Pizza Palace' },
    { id: '7', type: 'order', title: 'User "Lisa Chen" completed order', description: 'Order #1235 delivered successfully', time: '20 minutes ago', status: 'completed', userId: '7', userName: 'Lisa Chen' },
    { id: '8', type: 'profile_update', title: 'User "David Kim" changed password', description: 'Password updated successfully', time: '25 minutes ago', status: 'completed', userId: '8', userName: 'David Kim' },
    { id: '9', type: 'login', title: 'User "Anna Garcia" logged in', description: 'Login from web browser', time: '30 minutes ago', status: 'completed', userId: '9', userName: 'Anna Garcia' },
    { id: '10', type: 'registration', title: 'New user "Tom Wilson" registered', description: 'Account created with email verification', time: '35 minutes ago', status: 'completed', userId: '10', userName: 'Tom Wilson' },
    { id: '11', type: 'order', title: 'User "Maria Rodriguez" placed order', description: 'Large order from Italian Bistro', time: '40 minutes ago', status: 'pending', userId: '11', userName: 'Maria Rodriguez' },
    { id: '12', type: 'payment', title: 'Payment processed for "James Lee"', description: 'Payment transaction completed', time: '45 minutes ago', status: 'completed', userId: '12', userName: 'James Lee' },
    { id: '13', type: 'profile_update', title: 'User "Sophie Taylor" updated address', description: 'Delivery address updated', time: '50 minutes ago', status: 'completed', userId: '13', userName: 'Sophie Taylor' },
    { id: '14', type: 'login', title: 'User "Chris Anderson" logged in', description: 'Login from mobile app', time: '55 minutes ago', status: 'completed', userId: '14', userName: 'Chris Anderson' },
    { id: '15', type: 'registration', title: 'New user "Rachel Green" registered', description: 'User account created successfully', time: '1 hour ago', status: 'completed', userId: '15', userName: 'Rachel Green' }
  ],
  quickActions: [
    { id: '1', title: 'Add New User', description: 'Create a new user account', icon: '👤', href: '/users/add', color: 'bg-sera-blue' },
    { id: '2', title: 'Bulk Actions', description: 'Perform bulk operations on users', icon: '📋', href: '/users/bulk', color: 'bg-sera-yellow' },
    { id: '3', title: 'Export Users', description: 'Export user data to CSV', icon: '📊', href: '/users/export', color: 'bg-sera-green' }
  ],
  users: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      role: 'customer',
      joinDate: '2024-01-15',
      lastActive: '2 minutes ago',
      totalOrders: 12,
      totalSpent: 245.50,
      location: 'New York, NY'
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      role: 'customer',
      joinDate: '2024-02-20',
      lastActive: '5 minutes ago',
      totalOrders: 8,
      totalSpent: 189.75,
      location: 'Los Angeles, CA'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+1 (555) 345-6789',
      status: 'active',
      role: 'customer',
      joinDate: '2024-01-10',
      lastActive: '8 minutes ago',
      totalOrders: 25,
      totalSpent: 456.20,
      location: 'Chicago, IL'
    },
    {
      id: '4',
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+1 (555) 456-7890',
      status: 'active',
      role: 'customer',
      joinDate: '2024-03-05',
      lastActive: '12 minutes ago',
      totalOrders: 5,
      totalSpent: 98.30,
      location: 'Miami, FL'
    },
    {
      id: '5',
      name: 'Alex Brown',
      email: 'alex.brown@email.com',
      phone: '+1 (555) 567-8901',
      status: 'pending',
      role: 'customer',
      joinDate: '2024-03-10',
      lastActive: '15 minutes ago',
      totalOrders: 0,
      totalSpent: 0,
      location: 'Seattle, WA'
    },
    {
      id: '6',
      name: 'Pizza Palace',
      email: 'owner@pizzapalace.com',
      phone: '+1 (555) 678-9012',
      status: 'active',
      role: 'restaurant_owner',
      joinDate: '2024-02-15',
      lastActive: '18 minutes ago',
      totalOrders: 156,
      totalSpent: 0,
      location: 'New York, NY'
    },
    {
      id: '7',
      name: 'Lisa Chen',
      email: 'lisa.chen@email.com',
      phone: '+1 (555) 789-0123',
      status: 'active',
      role: 'customer',
      joinDate: '2024-01-25',
      lastActive: '20 minutes ago',
      totalOrders: 18,
      totalSpent: 312.45,
      location: 'San Francisco, CA'
    },
    {
      id: '8',
      name: 'David Kim',
      email: 'david.kim@email.com',
      phone: '+1 (555) 890-1234',
      status: 'active',
      role: 'customer',
      joinDate: '2024-02-28',
      lastActive: '25 minutes ago',
      totalOrders: 7,
      totalSpent: 134.80,
      location: 'Boston, MA'
    },
    {
      id: '9',
      name: 'Anna Garcia',
      email: 'anna.garcia@email.com',
      phone: '+1 (555) 901-2345',
      status: 'inactive',
      role: 'customer',
      joinDate: '2024-01-05',
      lastActive: '2 days ago',
      totalOrders: 3,
      totalSpent: 67.25,
      location: 'Austin, TX'
    },
    {
      id: '10',
      name: 'Tom Wilson',
      email: 'tom.wilson@email.com',
      phone: '+1 (555) 012-3456',
      status: 'active',
      role: 'customer',
      joinDate: '2024-03-10',
      lastActive: '35 minutes ago',
      totalOrders: 1,
      totalSpent: 24.99,
      location: 'Denver, CO'
    }
  ]
};
