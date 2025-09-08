// Dashboard data structure following business-app design pattern
import { Activity } from '../types/activities';

export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface ActivityItem {
  id: string;
  type: 'order' | 'user' | 'system';
  title: string;
  description: string;
  time: string;
  status?: 'completed' | 'pending' | 'failed';
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

export interface DashboardData {
  metrics: MetricCard[];
  activities: ActivityItem[] | Activity[];
  quickActions: QuickAction[];
  revenueChart: ChartData;
  ordersChart: ChartData;
}

export const mockDashboardData: DashboardData = {
  metrics: [
    { title: 'Total Revenue', value: '$12,450', change: '+15%', changeType: 'positive', icon: '💰' },
    { title: 'Total Orders', value: '156', change: '+8%', changeType: 'positive', icon: '📦' },
    { title: 'Total Users', value: '2,340', change: '+12%', changeType: 'positive', icon: '👥' },
    { title: 'Restaurants', value: '89', change: '+5%', changeType: 'positive', icon: '🏪' }
  ],
  activities: [
    { id: '1', type: 'system', title: 'New restaurant "Pizza Palace" registered', description: 'Restaurant registration completed', time: '2 minutes ago', status: 'completed' },
    { id: '2', type: 'user', title: 'New customer "John Doe" joined', description: 'User account created successfully', time: '5 minutes ago', status: 'completed' },
    { id: '3', type: 'order', title: 'Order #1234 completed successfully', description: 'Order delivered to customer', time: '8 minutes ago', status: 'completed' },
    { id: '4', type: 'order', title: 'Payment processed for Order #1233', description: 'Payment transaction completed', time: '12 minutes ago', status: 'completed' },
    { id: '5', type: 'system', title: 'System maintenance scheduled', description: 'Scheduled maintenance for tonight', time: '1 hour ago', status: 'pending' },
    { id: '6', type: 'user', title: 'Customer "Sarah Wilson" updated profile', description: 'Profile information updated successfully', time: '15 minutes ago', status: 'completed' },
    { id: '7', type: 'order', title: 'Order #1235 placed by customer', description: 'New order received from Pizza Palace', time: '18 minutes ago', status: 'pending' },
    { id: '8', type: 'system', title: 'Database backup completed', description: 'Daily backup process finished successfully', time: '25 minutes ago', status: 'completed' },
    { id: '9', type: 'user', title: 'Restaurant "Burger House" updated menu', description: 'Menu items updated and published', time: '30 minutes ago', status: 'completed' },
    { id: '10', type: 'order', title: 'Order #1236 cancelled by customer', description: 'Order cancellation processed', time: '35 minutes ago', status: 'failed' },
    { id: '11', type: 'system', title: 'Payment gateway maintenance', description: 'Scheduled payment system maintenance', time: '45 minutes ago', status: 'pending' },
    { id: '12', type: 'user', title: 'New restaurant "Sushi Master" applied', description: 'Restaurant application submitted for review', time: '1 hour ago', status: 'pending' },
    { id: '13', type: 'order', title: 'Order #1237 delivered successfully', description: 'Order completed and delivered on time', time: '1 hour 5 minutes ago', status: 'completed' },
    { id: '14', type: 'system', title: 'Email notifications sent', description: 'Bulk email notifications delivered', time: '1 hour 10 minutes ago', status: 'completed' },
    { id: '15', type: 'user', title: 'Customer "Mike Johnson" added address', description: 'New delivery address added to account', time: '1 hour 15 minutes ago', status: 'completed' },
    { id: '16', type: 'order', title: 'Order #1238 payment failed', description: 'Payment processing failed - retry scheduled', time: '1 hour 20 minutes ago', status: 'failed' },
    { id: '17', type: 'system', title: 'API rate limit warning', description: 'Approaching API rate limits for external services', time: '1 hour 30 minutes ago', status: 'pending' },
    { id: '18', type: 'user', title: 'Restaurant "Taco Fiesta" went offline', description: 'Restaurant temporarily unavailable', time: '1 hour 35 minutes ago', status: 'pending' },
    { id: '19', type: 'order', title: 'Order #1239 refund processed', description: 'Customer refund completed successfully', time: '1 hour 40 minutes ago', status: 'completed' },
    { id: '20', type: 'system', title: 'Security scan completed', description: 'Daily security vulnerability scan finished', time: '1 hour 45 minutes ago', status: 'completed' },
    { id: '21', type: 'user', title: 'New customer "Emma Davis" registered', description: 'User account created with email verification', time: '2 hours ago', status: 'completed' },
    { id: '22', type: 'order', title: 'Order #1240 placed successfully', description: 'Large order received from corporate client', time: '2 hours 5 minutes ago', status: 'pending' },
    { id: '23', type: 'system', title: 'Cache cleared successfully', description: 'Application cache cleared for performance', time: '2 hours 10 minutes ago', status: 'completed' },
    { id: '24', type: 'user', title: 'Restaurant "Coffee Corner" updated hours', description: 'Business hours updated in system', time: '2 hours 15 minutes ago', status: 'completed' },
    { id: '25', type: 'order', title: 'Order #1241 delivery delayed', description: 'Delivery delayed due to weather conditions', time: '2 hours 20 minutes ago', status: 'pending' }
  ],
  quickActions: [
    { id: '1', title: 'Approve Restaurants', description: 'Review pending restaurant applications', icon: '🏪', href: '/restaurants', color: 'bg-sera-yellow' },
    { id: '2', title: 'View Orders', description: 'Monitor active and completed orders', icon: '📦', href: '/orders', color: 'bg-sera-blue' },
    { id: '3', title: 'System Alerts', description: 'Check system notifications and alerts', icon: '⚠️', href: '/alerts', color: 'bg-red-500' }
  ],
  revenueChart: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [12000, 13500, 14200, 13800, 15600, 12450],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    }]
  },
  ordersChart: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Orders',
      data: [120, 135, 142, 138, 156, 145],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)'
    }]
  }
};
