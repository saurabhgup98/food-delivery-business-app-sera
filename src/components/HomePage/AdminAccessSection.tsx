import CTAButton from './CTAButton';
import { adminAccessData } from '../../data/homePageData';

export default function AdminAccessSection() {
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
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ready to Get Started
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {adminAccessData.title}
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {adminAccessData.description}
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <CTAButton href={adminAccessData.primaryCTA.href} variant="secondary">
            {adminAccessData.primaryCTA.text}
          </CTAButton>
          <CTAButton 
            href={adminAccessData.secondaryCTA.href} 
            variant="outline" 
            className="border-sera-blue text-sera-blue hover:bg-sera-blue hover:text-white"
          >
            {adminAccessData.secondaryCTA.text}
          </CTAButton>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <svg className="w-6 h-6 text-sera-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-medium">Bank-Level Security</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <svg className="w-6 h-6 text-sera-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium">Lightning Fast Setup</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <svg className="w-6 h-6 text-sera-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
            </svg>
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
