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
  subtitle: "Empowering Restaurant Owners with Smart Management Solutions",
  primaryCTA: {
    text: "Login",
    href: "/login"
  },
  secondaryCTA: {
    text: "Register",
    href: "/register"
  }
};

export const features: Feature[] = [
  {
    icon: '📱',
    title: 'Easy Management',
    description: 'Manage orders, menus, and staff effortlessly',
    bgColor: 'bg-sera-blue/20'
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Track performance and growth insights',
    bgColor: 'bg-sera-orange/20'
  },
  {
    icon: '💳',
    title: 'Payments',
    description: 'Secure and fast payment processing',
    bgColor: 'bg-sera-pink/20'
  },
  {
    icon: '🚚',
    title: 'Delivery',
    description: 'Seamless delivery integration',
    bgColor: 'bg-sera-yellow/20'
  }
];

export const adminAccessData: AdminAccessData = {
  title: "Admin Portal Access",
  description: "Already have an account? Access your dashboard to manage restaurants, users, and payments.",
  primaryCTA: {
    text: "Go to Dashboard",
    href: "/dashboard"
  },
  secondaryCTA: {
    text: "Admin Login",
    href: "/login"
  }
};

