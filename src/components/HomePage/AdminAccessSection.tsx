import React from 'react';
import CTAButton from './CTAButton';
import { adminAccessData } from '@/data/homePageData';

export default function AdminAccessSection() {
  return (
    <section className="sera-section">
      <div className="sera-container">
        <div className="sera-hero-content">
          <h2 className="sera-heading sera-fade-in">
            {adminAccessData.title}
          </h2>
          <p className="sera-subtitle sera-slide-right">
            {adminAccessData.description}
          </p>
          
          <div className="sera-grid sera-grid-2" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <CTAButton href={adminAccessData.primaryCTA.href} variant="secondary">
              {adminAccessData.primaryCTA.text}
            </CTAButton>
            <CTAButton href={adminAccessData.secondaryCTA.href} variant="outline">
              {adminAccessData.secondaryCTA.text}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
