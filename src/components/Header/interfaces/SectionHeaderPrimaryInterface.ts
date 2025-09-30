export interface SectionHeaderPrimaryProps {
  // Compulsory props
  icon: string;
  heading: string;
  subHeading: string;
  
  // Optional props
  rightSideDot?: {
    color: 'green' | 'blue' | 'amber' | 'rose' | 'purple' | 'emerald';
    text: string;
  };
  rightSideText?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  
  // Expandable props
  isExpandable?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}