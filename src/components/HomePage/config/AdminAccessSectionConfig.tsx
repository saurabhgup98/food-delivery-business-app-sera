import React from 'react';
import { CheckIcon, SecurityIcon, LightningIcon, SupportIcon } from '../../../assets/AdminAccessSectionIcons';

export interface TrustIndicator {
    icon: React.ComponentType;
    text: string;
}

export interface CTAButton {
    text: string;
    href?: string;
    disabled?: boolean;
    tooltip?: string;
}

export interface AdminAccessSectionConfig {
    badge: {
        icon: React.ComponentType;
        text: string;
    };
    title: string;
    description: string;
    primaryCTA: CTAButton;
    secondaryCTA: CTAButton;
    trustIndicators: TrustIndicator[];
}

export const ADMIN_ACCESS_SECTION_CONFIG: AdminAccessSectionConfig = {
    badge: {
        icon: CheckIcon,
        text: "Ready to Get Started"
    },
    title: "Ready to Get Started?",
    description: "Join thousands of restaurant owners who trust SERA Business to power their operations. Get started today with our comprehensive platform.",
    primaryCTA: {
        text: "Start Your Journey",
        href: "#register"
    },
    secondaryCTA: {
        text: "View Pricing",
        href: "#pricing",
        disabled: true,
        tooltip: "Coming Soon"
    },
    trustIndicators: [
        {
            icon: SecurityIcon,
            text: "Bank-Level Security"
        },
        {
            icon: LightningIcon,
            text: "Lightning Fast Setup"
        },
        {
            icon: SupportIcon,
            text: "24/7 Support"
        }
    ]
};
