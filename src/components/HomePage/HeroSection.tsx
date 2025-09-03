import React from 'react';
import CTAButton from './CTAButton';
import { heroData } from '@/data/homePageData';

export default function HeroSection() {
  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        padding: '5rem 1rem',
        textAlign: 'center'
      }}
    >
      <div 
        className="max-w-7xl mx-auto text-center"
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem'
          }}
        >
          {heroData.title.split('SERA Business')[0]} <span style={{ color: '#FFD700' }}>SERA Business</span>
        </h1>
        <p 
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          style={{
            fontSize: '1.25rem',
            color: '#D1D5DB',
            marginBottom: '2rem',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {heroData.subtitle}
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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
