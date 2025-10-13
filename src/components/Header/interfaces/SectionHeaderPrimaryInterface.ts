export interface SectionHeaderPrimaryProps {
  // Compulsory props
  icon: string;
  heading: string;
  subHeading: string;
  
  // Right side content (mutually exclusive with rightSideAction)
  rightSideContent?: {
    dot?: {
      color: 'green' | 'blue' | 'amber' | 'rose' | 'purple' | 'emerald';
      text: string;
    };
    text?: string;
  };
  
  // Right side action (mutually exclusive with rightSideContent)
  rightSideAction?: {
    component: React.ReactNode;
    onClick?: () => void;
  };
  
  size?: 'small' | 'medium' | 'large';
  className?: string;
  
  // Expandable props
  isExpandable?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}