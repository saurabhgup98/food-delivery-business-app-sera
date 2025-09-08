import { MetricCard } from '../data/dashboardData';

// Dashboard API Configuration
const DASHBOARD_API_BASE_URL = 'https://food-delivery-business-app-sera-backend-pet5jpjf5.vercel.app'; // Vercel backend URL

// Dashboard API Client
class DashboardApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('Dashboard API request failed:', error);
      throw error;
    }
  }

  // Get total revenue
  async getTotalRevenue(): Promise<MetricCard> {
    const response = await this.request<{
      success: boolean;
      message: string;
      data: MetricCard & { rawValue: number; currency: string };
    }>('/api/dashboard/revenue', {
      method: 'GET',
    });

    if (response.success) {
      return {
        title: response.data.title,
        value: response.data.value,
        change: response.data.change,
        changeType: response.data.changeType,
        icon: response.data.icon
      };
    }

    throw new Error('Failed to fetch revenue data');
  }

  // Get all dashboard metrics
  async getAllMetrics(): Promise<MetricCard[]> {
    const response = await this.request<{
      success: boolean;
      message: string;
      data: (MetricCard & { rawValue: number })[];
    }>('/api/dashboard/metrics', {
      method: 'GET',
    });

    if (response.success) {
      return response.data.map(metric => ({
        title: metric.title,
        value: metric.value,
        change: metric.change,
        changeType: metric.changeType,
        icon: metric.icon
      }));
    }

    throw new Error('Failed to fetch dashboard metrics');
  }
}

// Create and export dashboard API client instance
export const dashboardApiClient = new DashboardApiClient(DASHBOARD_API_BASE_URL);

// Export individual methods for convenience
export const dashboardApi = {
  getTotalRevenue: () => dashboardApiClient.getTotalRevenue(),
  getAllMetrics: () => dashboardApiClient.getAllMetrics(),
};

export default dashboardApiClient;