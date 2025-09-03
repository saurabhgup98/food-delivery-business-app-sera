import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '@/data/homePageData';

export default function FeaturesSection() {
  return (
    <section className="sera-section-alt">
      <div className="sera-container">
        <h2 className="sera-heading sera-fade-in">
          Why Choose SERA?
        </h2>
        
        <div className="sera-grid sera-grid-4">
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
