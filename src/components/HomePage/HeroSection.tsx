import CTAButton from './CTAButton';
import { heroData } from '../../data/homePageData';

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sera-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sera-pink/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-sera-yellow/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-sera-orange/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-sera-blue/5 via-transparent to-sera-pink/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Animated welcome text */}
        <div className="mb-4">
          <span className="inline-block text-sera-blue text-lg font-semibold tracking-wide animate-fade-in-up">
            Welcome to the Future of Food Delivery
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block animate-fade-in-up delay-200">
            {heroData.title.split('SERA Business')[0]}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sera-yellow via-sera-orange to-sera-pink animate-fade-in-up delay-400">
            SERA Business
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-600">
          {heroData.subtitle}
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-800">
          <button 
            onClick={onRegisterClick}
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-200 bg-sera-yellow text-dark-900 hover:bg-sera-yellow/90"
          >
            Get Started
          </button>
          <CTAButton href={heroData.secondaryCTA.href} variant="outline">
            {heroData.secondaryCTA.text}
          </CTAButton>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-1000">
          <div className="text-center">
            <div className="text-3xl font-bold text-sera-yellow mb-2">500+</div>
            <div className="text-gray-400 text-sm">Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sera-blue mb-2">10K+</div>
            <div className="text-gray-400 text-sm">Orders Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sera-pink mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sera-orange mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
