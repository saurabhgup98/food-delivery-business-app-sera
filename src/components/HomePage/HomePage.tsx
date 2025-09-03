import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AdminAccessSection from './AdminAccessSection';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="sera-hero">
      <HeroSection />
      <FeaturesSection />
      <AdminAccessSection />
      <Footer />
    </div>
  );
}
