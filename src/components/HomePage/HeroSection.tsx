import React from 'react';
import CTAButton from './CTAButton';
import { heroData } from '@/data/homePageData';

export default function HeroSection() {
  return (
    <section className="sera-section">
      <div className="sera-container">
        <div className="sera-hero-content">
          <h1 className="sera-title sera-fade-in">
            {heroData.title.split('SERA Business')[0]} <span style={{ color: '#FFD700' }}>SERA Business</span>
          </h1>
          <p className="sera-subtitle sera-slide-left">
            {heroData.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="sera-grid sera-grid-2" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <CTAButton href={heroData.primaryCTA.href} variant="primary">
              {heroData.primaryCTA.text}
            </CTAButton>
            <CTAButton href={heroData.secondaryCTA.href} variant="outline">
              {heroData.secondaryCTA.text}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
