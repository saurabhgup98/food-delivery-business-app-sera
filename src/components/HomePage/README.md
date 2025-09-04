# HomePage Components - Modular Structure

This directory contains all the modular components for the SERA Business App home page.

## 🏗️ Component Architecture

```
HomePage/
├── index.ts                 # Exports all components
├── HomePage.tsx            # Main container component
├── HeroSection.tsx         # Hero section with title and CTAs
├── FeaturesSection.tsx     # Features grid section
├── AdminAccessSection.tsx  # Admin portal access section
├── Footer.tsx              # Footer component
├── FeatureCard.tsx         # Reusable feature card
├── CTAButton.tsx           # Reusable call-to-action button
└── README.md               # This documentation
```

## 🧩 Components Overview

### **HomePage.tsx**
- **Purpose**: Main container that orchestrates all sections
- **Props**: None
- **Children**: HeroSection, FeaturesSection, AdminAccessSection, Footer

### **HeroSection.tsx**
- **Purpose**: Main hero section with title, subtitle, and primary CTAs
- **Data Source**: `@/data/homePageData` - `heroData`
- **Features**: 
  - Dynamic title with SERA Business highlight
  - Responsive subtitle
  - Login/Register buttons

### **FeaturesSection.tsx**
- **Purpose**: Displays key features in a responsive grid
- **Data Source**: `@/data/homePageData` - `features`
- **Features**: 
  - 4-column grid on large screens
  - 2-column on medium screens
  - 1-column on small screens

### **AdminAccessSection.tsx**
- **Purpose**: Admin portal access section for existing users
- **Data Source**: `@/data/homePageData` - `adminAccessData`
- **Features**: 
  - Dashboard access button
  - Admin login button

### **Footer.tsx**
- **Purpose**: Simple footer with copyright information
- **Features**: 
  - Copyright text
  - Responsive padding

### **FeatureCard.tsx**
- **Purpose**: Reusable card component for individual features
- **Props**: 
  - `icon`: Emoji or icon string
  - `title`: Feature title
  - `description`: Feature description
  - `bgColor`: Background color class
- **Features**: 
  - Hover animations
  - Scale effect on hover
  - Color transitions

### **CTAButton.tsx**
- **Purpose**: Reusable call-to-action button component
- **Props**: 
  - `href`: Navigation link
  - `children`: Button text
  - `variant`: 'primary' | 'secondary' | 'outline'
  - `className`: Additional CSS classes
- **Features**: 
  - Multiple button styles
  - Hover effects
  - Scale animation

## 📊 Data Structure

All content is managed through `@/data/homePageData.ts`:

```typescript
interface Feature {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; href: string; };
  secondaryCTA: { text: string; href: string; };
}

interface AdminAccessData {
  title: string;
  description: string;
  primaryCTA: { text: string; href: string; };
  secondaryCTA: { text: string; href: string; };
}
```

## 🎨 Styling

- **Framework**: Tailwind CSS
- **Color Scheme**: SERA brand colors (sera-yellow, sera-blue, sera-pink, sera-orange)
- **Responsive**: Mobile-first approach with responsive breakpoints
- **Animations**: Hover effects, scale transitions, color changes

## 🔧 Usage

```tsx
import { HomePage } from '@/components/HomePage';

export default function Page() {
  return <HomePage />;
}
```

## ✨ Benefits of This Structure

1. **Modularity**: Each section is a separate, reusable component
2. **Maintainability**: Content is separated from presentation logic
3. **Reusability**: Components can be used in other parts of the app
4. **Scalability**: Easy to add new sections or modify existing ones
5. **Type Safety**: Full TypeScript support with proper interfaces
6. **Performance**: Components can be optimized individually
7. **Testing**: Each component can be tested in isolation

## 🚀 Future Enhancements

- Add animation libraries (Framer Motion)
- Implement dark/light theme switching
- Add internationalization support
- Create more interactive elements
- Add loading states and error boundaries

