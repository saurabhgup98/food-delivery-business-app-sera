import React from 'react';

const Payments: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Payments</h1>
          <p className="text-gray-400">Monitor transactions and payment processing</p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
          <div className="text-center">
            <div className="w-24 h-24 bg-sera-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-sera-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Payments</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              This is the payments page. Here you'll view transaction history, 
              process refunds, monitor payment methods, and handle financial reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
