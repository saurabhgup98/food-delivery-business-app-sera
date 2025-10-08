import { USER_TYPES_SECTION_CONFIG } from './config/UserTypesSectionConfig';

export default function UserTypesSection() {
  return (
    <section id={USER_TYPES_SECTION_CONFIG.sectionId} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 relative overflow-hidden">
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
              {USER_TYPES_SECTION_CONFIG.header.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {USER_TYPES_SECTION_CONFIG.header.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sera-pink to-sera-blue">
              {USER_TYPES_SECTION_CONFIG.header.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {USER_TYPES_SECTION_CONFIG.header.description}
          </p>
        </div>

        {/* User Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {USER_TYPES_SECTION_CONFIG.userTypes.map((userType) => (
            <div key={userType.id} className={`group relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 ${userType.borderHover} transition-all duration-500 hover:shadow-2xl ${userType.shadowHover}`}>
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${userType.backgroundGlow} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${userType.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <userType.icon />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{userType.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {userType.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {userType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <div className={`w-2 h-2 ${userType.bulletColor} rounded-full`}></div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="text-center">
                  <span className={`inline-block ${userType.ctaColor} text-sm font-semibold`}>
                    {userType.ctaText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}