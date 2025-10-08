import React from 'react';

export interface UserTypeFeature {
  text: string;
}

export interface UserType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  iconBg: string;
  borderHover: string;
  shadowHover: string;
  backgroundGlow: string;
  bulletColor: string;
  ctaText: string;
  ctaColor: string;
  features: UserTypeFeature[];
}

export interface UserTypesSectionConfig {
  sectionId: string;
  header: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  userTypes: UserType[];
}

export const USER_TYPES_SECTION_CONFIG: UserTypesSectionConfig = {
  sectionId: "user-types",
  header: {
    badge: "Choose Your Role",
    title: "Built for",
    titleHighlight: "Every User Type",
    description: "Whether you're a restaurant owner looking to grow your business or an admin managing the platform, SERA Business has the tools you need."
  },
  userTypes: [
    {
      id: "restaurant-owner",
      title: "Restaurant Owner",
      description: "Take control of your restaurant operations with our comprehensive management tools. Perfect for restaurant owners who want to streamline their business.",
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconBg: "from-sera-pink to-sera-pink/80",
      borderHover: "hover:border-sera-pink/50",
      shadowHover: "hover:shadow-sera-pink/10",
      backgroundGlow: "from-sera-pink/5",
      bulletColor: "bg-sera-pink",
      ctaText: "Register to get started →",
      ctaColor: "text-sera-pink",
      features: [
        { text: "Menu & Inventory Management" },
        { text: "Order Processing & Tracking" },
        { text: "Staff Management & Scheduling" },
        { text: "Business Analytics & Reports" }
      ]
    },
    {
      id: "platform-admin",
      title: "Platform Admin",
      description: "Manage the entire SERA Business platform with powerful admin tools. Designed for platform administrators and super users.",
      icon: () => (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconBg: "from-sera-blue to-sera-blue/80",
      borderHover: "hover:border-sera-blue/50",
      shadowHover: "hover:shadow-sera-blue/10",
      backgroundGlow: "from-sera-blue/5",
      bulletColor: "bg-sera-blue",
      ctaText: "Admin access by invitation →",
      ctaColor: "text-sera-blue",
      features: [
        { text: "Restaurant & User Management" },
        { text: "Payment Processing & Analytics" },
        { text: "System Monitoring & Reports" },
        { text: "Platform Configuration & Settings" }
      ]
    }
  ]
};
