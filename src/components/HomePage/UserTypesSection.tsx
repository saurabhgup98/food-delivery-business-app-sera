export default function UserTypesSection() {
  return (
    <section id="user-types" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sera-pink/5 via-transparent to-sera-blue/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sera-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sera-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sera-pink text-sm font-semibold tracking-wider uppercase">
              Choose Your Role
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sera-pink to-sera-blue">
              Every User Type
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a restaurant owner looking to grow your business or an admin managing the platform, SERA Business has the tools you need.
          </p>
        </div>
        
        {/* User Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Business Owner Card */}
          <div className="group relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-sera-pink/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sera-pink/10">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-sera-pink/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-sera-pink to-sera-pink/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">Restaurant Owner</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Take control of your restaurant operations with our comprehensive management tools. Perfect for restaurant owners who want to streamline their business.
              </p>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-pink rounded-full"></div>
                  <span>Menu & Inventory Management</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-pink rounded-full"></div>
                  <span>Order Processing & Tracking</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-pink rounded-full"></div>
                  <span>Staff Management & Scheduling</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-pink rounded-full"></div>
                  <span>Business Analytics & Reports</span>
                </li>
              </ul>
              
              {/* CTA */}
              <div className="text-center">
                <span className="inline-block text-sera-pink text-sm font-semibold">
                  Register to get started →
                </span>
              </div>
            </div>
          </div>

          {/* Admin Card */}
          <div className="group relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-sera-blue/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sera-blue/10">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-sera-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-sera-blue to-sera-blue/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">Platform Admin</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Manage the entire SERA Business platform with powerful admin tools. Designed for platform administrators and super users.
              </p>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-blue rounded-full"></div>
                  <span>Restaurant & User Management</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-blue rounded-full"></div>
                  <span>Payment Processing & Analytics</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-blue rounded-full"></div>
                  <span>System Monitoring & Reports</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-sera-blue rounded-full"></div>
                  <span>Platform Configuration & Settings</span>
                </li>
              </ul>
              
              {/* CTA */}
              <div className="text-center">
                <span className="inline-block text-sera-blue text-sm font-semibold">
                  Admin access by invitation →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
