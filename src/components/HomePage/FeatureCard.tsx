import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function FeatureCard({ icon, title, description, bgColor }: FeatureCardProps) {
  return (
    <div className="sera-feature-card sera-fade-in">
      <div 
        className="sera-feature-icon"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
      <h3 className="sera-feature-title">{title}</h3>
      <p className="sera-feature-desc">{description}</p>
    </div>
  );
}
