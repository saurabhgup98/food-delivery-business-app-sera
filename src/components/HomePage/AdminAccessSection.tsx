import { ADMIN_ACCESS_SECTION_CONFIG } from './config/AdminAccessSectionConfig';

interface AdminAccessSectionProps {
  onRegisterClick?: () => void;
}

export default function AdminAccessSection({ onRegisterClick }: AdminAccessSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sera-blue/5 via-transparent to-sera-pink/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sera-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Section Badge */}
        <div className="inline-block mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-sera-blue/10 border border-sera-blue/20 rounded-full text-sera-blue text-sm font-semibold">
            <ADMIN_ACCESS_SECTION_CONFIG.badge.icon />
            <span className="ml-2">{ADMIN_ACCESS_SECTION_CONFIG.badge.text}</span>
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {ADMIN_ACCESS_SECTION_CONFIG.title}
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {ADMIN_ACCESS_SECTION_CONFIG.description}
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={onRegisterClick}
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-200 bg-sera-blue text-white hover:bg-sera-blue/90"
          >
            {ADMIN_ACCESS_SECTION_CONFIG.primaryCTA.text}
          </button>
          <div className="relative group">
            <button
              disabled={ADMIN_ACCESS_SECTION_CONFIG.secondaryCTA.disabled}
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-200 border-2 border-gray-500 text-gray-500 cursor-not-allowed opacity-50"
            >
              {ADMIN_ACCESS_SECTION_CONFIG.secondaryCTA.text}
            </button>
            {/* Tooltip */}
            {ADMIN_ACCESS_SECTION_CONFIG.secondaryCTA.tooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {ADMIN_ACCESS_SECTION_CONFIG.secondaryCTA.tooltip}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {ADMIN_ACCESS_SECTION_CONFIG.trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 text-gray-400">
              <indicator.icon />
              <span className="text-sm font-medium">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
