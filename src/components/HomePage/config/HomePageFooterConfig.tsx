import React from 'react';
import { FacebookIcon, LinkedInIcon, InstagramIcon } from '../../../assets/PrimarySocialIcons';
import { EmailIcon, PhoneIcon, LocationIcon } from '../../../assets/ContactPrimaryIcons';

export interface ContactInfo {
  icon: React.ComponentType;
  text: string;
}

export interface BrandInfo {
  logo: {
    text: string;
    gradient: string;
  };
  name: string;
  tagline: string;
  description: string;
}

export interface HomePageFooterConfig {
  brand: BrandInfo;
  contact: ContactInfo[];
  socialLinks: Array<{
    href: string;
    label: string;
    icon: React.ComponentType;
  }>;
  copyright: string;
}

export const HOMEPAGE_FOOTER_CONFIG: HomePageFooterConfig = {
  brand: {
    logo: {
      text: "S",
      gradient: "from-sera-yellow to-sera-orange"
    },
    name: "SERA Business",
    tagline: "Food Delivery Platform",
    description: "Empowering restaurants with cutting-edge technology to deliver exceptional food experiences to customers worldwide."
  },
  contact: [
    {
      icon: EmailIcon,
      text: "support@serabusiness.com"
    },
    {
      icon: PhoneIcon,
      text: "+1 (555) 123-4567"
    },
    {
      icon: LocationIcon,
      text: "Mumbai, India"
    }
  ],
  socialLinks: [
    {
      href: "https://www.facebook.com/serabusiness",
      label: "Facebook",
      icon: FacebookIcon
    },
    {
      href: "https://www.linkedin.com/company/serabusiness",
      label: "LinkedIn",
      icon: LinkedInIcon
    },
    {
      href: "https://www.instagram.com/serabusiness",
      label: "Instagram",
      icon: InstagramIcon
    }
  ],
  copyright: "© 2024 SERA Business. All rights reserved."
};