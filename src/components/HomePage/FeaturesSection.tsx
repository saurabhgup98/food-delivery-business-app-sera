import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '@/data/homePageData';

export default function FeaturesSection() {
  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-800"
      style={{
        padding: '4rem 1rem',
        backgroundColor: '#1E293B'
      }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{
          maxWidth: '80rem',
          margin: '0 auto'
        }}
      >
        <h2 
          className="text-3xl font-bold text-white text-center mb-12"
          style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          Why Choose SERA?
        </h2>
        
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
