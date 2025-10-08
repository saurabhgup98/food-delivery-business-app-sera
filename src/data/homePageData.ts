
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

