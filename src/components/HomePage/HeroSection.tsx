import CTAButton from './CTAButton';
import { heroData } from '../../data/homePageData';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {heroData.title.split('SERA Business')[0]} <span className="text-sera-yellow">SERA Business</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {heroData.subtitle}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={heroData.primaryCTA.href} variant="primary">
            {heroData.primaryCTA.text}
          </CTAButton>
          <CTAButton href={heroData.secondaryCTA.href} variant="outline">
            {heroData.secondaryCTA.text}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
