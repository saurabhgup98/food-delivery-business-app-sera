import { useState, useEffect, useCallback } from 'react';
import { activitiesApi } from '../services/activitiesApi';
import { Activity, ActivitiesResponse } from '../types/activities';

interface UseActivitiesResult {
  activities: Activity[];
  loading: boolean;
  error: string | null;
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  } | null;
  refetch: () => void;
  loadMore: () => void;
}

interface UseActivitiesOptions {
  targetRole?: 'admin' | 'restaurant_owner';
  restaurantId?: string;
  page?: number;
  limit?: number;
}

export const useActivities = (options: UseActivitiesOptions = {}): UseActivitiesResult => {
  const { targetRole = 'admin', restaurantId, page = 1, limit = 20 } = options;
  
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<{
    total: number;
    page: number;
    limit: number;
    pages: number;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(page);

  const fetchActivities = useCallback(async (pageNum: number = 1, append: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching activities with options:', { targetRole, restaurantId, pageNum, limit });
      
      let response: ActivitiesResponse;
      
      if (targetRole === 'admin') {
        response = await activitiesApi.getAdminActivities(pageNum, limit);
      } else if (targetRole === 'restaurant_owner' && restaurantId) {
        response = await activitiesApi.getRestaurantActivities(restaurantId, pageNum, limit);
      } else {
        throw new Error('Invalid configuration for fetching activities');
      }

      console.log('Activities response:', response);
      
      if (append) {
        setActivities(prev => [...prev, ...response.activities]);
      } else {
        setActivities(response.activities);
      }
      
      setPagination(response.pagination);
      setCurrentPage(pageNum);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch activities');
      console.error('Error fetching activities:', err);
    } finally {
      setLoading(false);
    }
  }, [targetRole, restaurantId, limit]);

  const refetch = useCallback(() => {
    fetchActivities(1, false);
  }, [fetchActivities]);

  const loadMore = useCallback(() => {
    if (pagination && currentPage < pagination.pages) {
      fetchActivities(currentPage + 1, true);
    }
  }, [fetchActivities, pagination, currentPage]);

  useEffect(() => {
    fetchActivities(1, false);
  }, [fetchActivities]);

  return {
    activities,
    loading,
    error,
    pagination,
    refetch,
    loadMore
  };
};
