import SecondarySolidBtn from '../Buttons/SecondarySolidBtn';
import OutlineTextBtn from '../Buttons/OutlineBtn';
import { HERO_SECTION_CONFIG } from './config/HeroSectionConfig';

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const handleScrollToSection = () => {
    const element = document.querySelector(HERO_SECTION_CONFIG.secondaryButton.href || '');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
            {HERO_SECTION_CONFIG.welcomeText}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block animate-fade-in-up delay-200">
            {HERO_SECTION_CONFIG.title.prefix}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sera-yellow via-sera-orange to-sera-pink animate-fade-in-up delay-400">
            {HERO_SECTION_CONFIG.title.brand}
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-600">
          {HERO_SECTION_CONFIG.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up delay-800">
          {/* Primary Button - Yellow Solid */}
          <div className="w-full sm:w-48 h-12 sm:h-14">
            <SecondarySolidBtn
              {...HERO_SECTION_CONFIG.primaryButton}
              onClick={onRegisterClick}
            />
          </div>
          
          {/* Secondary Button - Yellow Outline */}
          <div className="w-full sm:w-48 h-12 sm:h-14">
            <OutlineTextBtn
              {...HERO_SECTION_CONFIG.secondaryButton}
              onClick={handleScrollToSection}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-1000">
          {HERO_SECTION_CONFIG.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}