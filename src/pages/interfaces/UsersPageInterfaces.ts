// Users Page Interfaces
// All TypeScript interfaces for Users page

export interface UsersPageProps {
  // Add any props if needed in the future
}

export interface UsersPageState {
  isSticky: boolean;
}

export interface ScrollHandlerConfig {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  introRef: React.RefObject<HTMLDivElement>;
  setIsSticky: (isSticky: boolean) => void;
}

export interface UsersPageClasses {
  stickyContainer: string;
  leftSection: string;
  rightSection: string;
}
