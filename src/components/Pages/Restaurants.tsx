import React from 'react';

const Restaurants: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Restaurants</h1>
          <p className="text-gray-400">Manage your restaurant partners and their information</p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
          <div className="text-center">
            <div className="w-24 h-24 bg-sera-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-sera-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Restaurants</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              This is the restaurants page. Here you'll manage all restaurant partners, 
              view their details, menus, and handle restaurant applications.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-sera-yellow/10 border border-sera-yellow/20 rounded-full text-sera-yellow text-sm font-semibold">
              <span className="w-2 h-2 bg-sera-yellow rounded-full mr-2"></span>
              12 Pending Applications
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
