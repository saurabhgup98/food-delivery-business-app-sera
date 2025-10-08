// Features Configuration
export interface Feature {
    icon: string;
    title: string;
    description: string;
    bgColor: string;
}

export interface FeaturesSectionConfig {
    sectionId: string;
    header: {
        badge: string;
        title: string;
        titleHighlight: string;
        description: string;
    };
    features: Feature[];
}

export const FEATURES_CONFIG: FeaturesSectionConfig = {
    sectionId: "features",
    header: {
        badge: "Why Choose SERA?",
        title: "Powerful Features for",
        titleHighlight: "Modern Restaurants",
        description: "Discover the comprehensive suite of tools designed to streamline your restaurant operations and boost your business growth."
    },
    features: [
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
    ]
};