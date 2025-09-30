import { UserMetrics } from '../../../../data/usersData';

// Function to create header configuration for users section
export const createUsersHeaderConfig = (totalUsers: number) => ({
  totalUsers,
  className: "bg-gradient-to-br from-sera-pink/60 via-sera-orange/50 to-sera-yellow/55 border-b-2 border-sera-pink/50"
});

// Function to create metrics cards configuration
export const createMetricsCardsConfig = (metrics: UserMetrics[]) => {
  return metrics.map((metric) => ({
    ...metric,
    className: "bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border border-sera-pink/30 rounded-xl p-4 backdrop-blur-sm shadow-xl shadow-sera-pink/10 hover:shadow-sera-pink/20 transition-all duration-300 hover:scale-105"
  }));
};
