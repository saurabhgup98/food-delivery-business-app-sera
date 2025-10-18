import { UserMetrics } from '../../../../data/usersData';

// Function to create header configuration for users section
export const createUsersHeaderConfig = (totalUsers: number) => ({
  totalUsers,
  className: "bg-gradient-to-br from-sera-pink/60 via-sera-orange/50 to-sera-yellow/55 border-b-2 border-sera-pink/50"
});

// Function to create metrics cards configuration
export const createMetricsCardsConfig = (metrics: UserMetrics[]) => {
  return metrics.map((metric) => ({
    ...metric
  }));
};