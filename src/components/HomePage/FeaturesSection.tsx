import FeatureCard from './FeatureCard';
import { features } from '../../data/homePageData';

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sera-blue/5 via-transparent to-sera-pink/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sera-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sera-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sera-blue text-sm font-semibold tracking-wider uppercase">
              Why Choose SERA?
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sera-yellow to-sera-orange">
              Modern Restaurants
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools designed to streamline your restaurant operations and boost your business growth.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sera-blue hover:text-sera-blue/80 transition-colors duration-300 cursor-pointer group">
            <span className="text-lg font-semibold">Explore All Features</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
