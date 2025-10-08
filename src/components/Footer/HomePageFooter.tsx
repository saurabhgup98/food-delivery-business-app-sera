
import { HOMEPAGE_FOOTER_CONFIG } from '../HomePage/config/HomePageFooterConfig';

export default function HomePageFooter() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-r ${HOMEPAGE_FOOTER_CONFIG.brand.logo.gradient} rounded-lg flex items-center justify-center`}>
                <span className="text-dark-900 font-bold text-lg">{HOMEPAGE_FOOTER_CONFIG.brand.logo.text}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{HOMEPAGE_FOOTER_CONFIG.brand.name}</h3>
                <p className="text-sm text-gray-400">{HOMEPAGE_FOOTER_CONFIG.brand.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              {HOMEPAGE_FOOTER_CONFIG.brand.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              {HOMEPAGE_FOOTER_CONFIG.contact.map((contact, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-400">
                  <contact.icon />
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {HOMEPAGE_FOOTER_CONFIG.copyright}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {HOMEPAGE_FOOTER_CONFIG.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-sera-yellow hover:bg-sera-yellow/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
