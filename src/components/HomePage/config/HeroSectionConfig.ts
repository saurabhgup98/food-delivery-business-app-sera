import { HeroSectionConfig } from '../interfaces/HeroSectionInterfaces';

export const HERO_SECTION_CONFIG: HeroSectionConfig = {
  welcomeText: "Welcome to the Future of Food Delivery",
  title: {
    prefix: "Welcome to",
    brand: "SERA Business"
  },
  subtitle: "Empowering Restaurant Owners & Platform Administrators with Smart Management Solutions",
  primaryButton: {
    text: "Get Started",
    bgColor: "bg-sera-yellow",
    hoverBgColor: "hover:bg-sera-yellow/90",
    textColor: "text-dark-900",
    hoverTextColor: "hover:text-dark-900"
  },
  secondaryButton: {
    text: "See How It Works",
    href: "#user-types",
    borderColor: "border-sera-yellow",
    hoverBgColor: "hover:bg-sera-yellow",
    textColor: "text-sera-yellow",
    hoverTextColor: "hover:text-dark-900"
  },
  stats: [
    {
      value: "500+",
      label: "Restaurants",
      color: "text-sera-yellow"
    },
    {
      value: "10K+",
      label: "Orders Daily",
      color: "text-sera-blue"
    },
    {
      value: "50K+",
      label: "Happy Customers",
      color: "text-sera-pink"
    },
    {
      value: "99.9%",
      label: "Uptime",
      color: "text-sera-orange"
    }
  ]
};