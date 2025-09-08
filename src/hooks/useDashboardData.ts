import { useState, useEffect } from 'react';
import { MetricCard } from '../data/dashboardData';
import { dashboardApi } from '../services/dashboardApi';

interface UseDashboardDataReturn {
  revenue: MetricCard | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useDashboardData = (): UseDashboardDataReturn => {
  const [revenue, setRevenue] = useState<MetricCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRevenue = async () => {
    try {
      setLoading(true);
      setError(null);
      const revenueData = await dashboardApi.getTotalRevenue();
      setRevenue(revenueData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch revenue data');
      console.error('Error fetching revenue:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRevenue();
  }, []);

  return {
    revenue,
    loading,
    error,
    refetch: fetchRevenue
  };
};
