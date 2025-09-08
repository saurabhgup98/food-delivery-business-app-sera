import { Activity } from '../types/activities';

// Activities API Configuration
const ACTIVITIES_API_BASE_URL = 'https://food-delivery-business-app-sera-backend-apiy81evo.vercel.app';

// Activities API Client
class ActivitiesApiClient {
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
      console.error('Activities API request failed:', error);
      throw error;
    }
  }

  // Get admin activities
  async getAdminActivities(page: number = 1, limit: number = 20): Promise<{
    activities: Activity[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      pages: number;
    };
  }> {
    const response = await this.request<{
      success: boolean;
      message: string;
      data: {
        activities: Activity[];
        pagination: {
          total: number;
          page: number;
          limit: number;
          pages: number;
        };
      };
    }>(`/admin?page=${page}&limit=${limit}`, {
      method: 'GET',
    });

    if (response.success) {
      return response.data;
    }

    throw new Error('Failed to fetch admin activities');
  }

  // Get restaurant activities
  async getRestaurantActivities(restaurantId: string, page: number = 1, limit: number = 20): Promise<{
    activities: Activity[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      pages: number;
    };
  }> {
    const response = await this.request<{
      success: boolean;
      message: string;
      data: {
        activities: Activity[];
        pagination: {
          total: number;
          page: number;
          limit: number;
          pages: number;
        };
      };
    }>(`/restaurant/${restaurantId}?page=${page}&limit=${limit}`, {
      method: 'GET',
    });

    if (response.success) {
      return response.data;
    }

    throw new Error('Failed to fetch restaurant activities');
  }

  // Get activity statistics
  async getActivityStats(targetRole?: string, restaurantId?: string): Promise<{
    stats: Array<{
      _id: string;
      count: number;
      latest: string;
    }>;
  }> {
    const params = new URLSearchParams();
    if (targetRole) params.append('targetRole', targetRole);
    if (restaurantId) params.append('restaurantId', restaurantId);

    const response = await this.request<{
      success: boolean;
      message: string;
      data: {
        stats: Array<{
          _id: string;
          count: number;
          latest: string;
        }>;
      };
    }>(`/stats?${params.toString()}`, {
      method: 'GET',
    });

    if (response.success) {
      return response.data;
    }

    throw new Error('Failed to fetch activity statistics');
  }
}

// Create and export activities API client instance
export const activitiesApiClient = new ActivitiesApiClient(ACTIVITIES_API_BASE_URL);

// Export individual methods for convenience
export const activitiesApi = {
  getAdminActivities: (page?: number, limit?: number) => 
    activitiesApiClient.getAdminActivities(page, limit),
  getRestaurantActivities: (restaurantId: string, page?: number, limit?: number) => 
    activitiesApiClient.getRestaurantActivities(restaurantId, page, limit),
  getActivityStats: (targetRole?: string, restaurantId?: string) => 
    activitiesApiClient.getActivityStats(targetRole, restaurantId),
};

export default activitiesApiClient;
