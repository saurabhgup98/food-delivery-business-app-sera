import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 p-6">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Orders */}
        <div className="bg-gradient-to-br from-sera-blue/20 to-sera-blue/10 border border-sera-blue/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-white">2,847</p>
              <p className="text-sera-green text-sm">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-sera-blue/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-sera-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Active Restaurants */}
        <div className="bg-gradient-to-br from-sera-yellow/20 to-sera-yellow/10 border border-sera-yellow/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Active Restaurants</p>
              <p className="text-3xl font-bold text-white">156</p>
              <p className="text-sera-green text-sm">+3 new this week</p>
            </div>
            <div className="w-12 h-12 bg-sera-yellow/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-sera-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-gradient-to-br from-sera-pink/20 to-sera-pink/10 border border-sera-pink/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-white">$45,892</p>
              <p className="text-sera-green text-sm">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-sera-pink/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-sera-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-gradient-to-br from-sera-orange/20 to-sera-orange/10 border border-sera-orange/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Active Users</p>
              <p className="text-3xl font-bold text-white">12,847</p>
              <p className="text-sera-green text-sm">+15% from last month</p>
            </div>
            <div className="w-12 h-12 bg-sera-orange/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-sera-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-dark-800/50 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[
              { id: '#1234', restaurant: 'Pizza Palace', customer: 'John Doe', amount: '$24.50', status: 'Delivered' },
              { id: '#1235', restaurant: 'Burger King', customer: 'Jane Smith', amount: '$18.75', status: 'In Transit' },
              { id: '#1236', restaurant: 'Sushi Master', customer: 'Mike Johnson', amount: '$45.20', status: 'Preparing' },
              { id: '#1237', restaurant: 'Taco Bell', customer: 'Sarah Wilson', amount: '$12.30', status: 'Delivered' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-xl">
                <div>
                  <p className="text-white font-medium">{order.id}</p>
                  <p className="text-gray-400 text-sm">{order.restaurant} • {order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{order.amount}</p>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Delivered' ? 'bg-sera-green/20 text-sera-green' :
                    order.status === 'In Transit' ? 'bg-sera-blue/20 text-sera-blue' :
                    'bg-sera-yellow/20 text-sera-yellow'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Restaurants */}
        <div className="bg-dark-800/50 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Top Performing Restaurants</h3>
          <div className="space-y-4">
            {[
              { name: 'Pizza Palace', orders: 234, revenue: '$5,847' },
              { name: 'Burger King', orders: 189, revenue: '$4,230' },
              { name: 'Sushi Master', orders: 156, revenue: '$6,890' },
              { name: 'Taco Bell', orders: 143, revenue: '$2,156' },
            ].map((restaurant, index) => (
              <div key={restaurant.name} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-sera-yellow/20 rounded-lg flex items-center justify-center">
                    <span className="text-sera-yellow font-bold text-sm">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{restaurant.name}</p>
                    <p className="text-gray-400 text-sm">{restaurant.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{restaurant.revenue}</p>
                  <p className="text-sera-green text-sm">+12%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
