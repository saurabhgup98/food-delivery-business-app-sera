export interface Feature {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export interface AdminAccessData {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export const heroData: HeroData = {
  title: "Welcome to SERA Business",
  subtitle: "Empowering Restaurant Owners & Platform Administrators with Smart Management Solutions",
  primaryCTA: {
    text: "Explore Features",
    href: "#features"
  },
  secondaryCTA: {
    text: "See How It Works",
    href: "#user-types"
  }
};

export const features: Feature[] = [
  {
    icon: '🏪',
    title: 'Restaurant Management',
    description: 'Complete control over your restaurant operations, menu management, and staff coordination',
    bgColor: 'bg-sera-blue/20'
  },
  {
    icon: '📊',
    title: 'Business Analytics',
    description: 'Real-time insights into sales, customer behavior, and performance metrics',
    bgColor: 'bg-sera-orange/20'
  },
  {
    icon: '💳',
    title: 'Payment Processing',
    description: 'Secure, fast, and reliable payment solutions for all transactions',
    bgColor: 'bg-sera-pink/20'
  },
  {
    icon: '🚚',
    title: 'Delivery Network',
    description: 'Integrated delivery management with real-time tracking and optimization',
    bgColor: 'bg-sera-yellow/20'
  }
];

export const adminAccessData: AdminAccessData = {
  title: "Ready to Get Started?",
  description: "Join thousands of restaurant owners who trust SERA Business to power their operations. Get started today with our comprehensive platform.",
  primaryCTA: {
    text: "Start Your Journey",
    href: "#register"
  },
  secondaryCTA: {
    text: "View Pricing",
    href: "#pricing"
  }
};

