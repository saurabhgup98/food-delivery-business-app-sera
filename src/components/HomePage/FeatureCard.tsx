
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function FeatureCard({ icon, title, description, bgColor }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Card Background */}
      <div className="relative bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-sera-yellow/30 group-hover:shadow-2xl group-hover:shadow-sera-yellow/10 group-hover:-translate-y-2">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sera-blue/5 via-transparent to-sera-pink/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon Container */}
        <div className="relative mb-6">
          <div className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
          </div>
          {/* Glow effect */}
          <div className={`absolute inset-0 w-20 h-20 ${bgColor} rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
        </div>
        
        {/* Content */}
        <div className="relative">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sera-yellow transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-8 h-8 bg-sera-yellow/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-sera-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}