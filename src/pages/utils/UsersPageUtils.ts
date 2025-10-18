import { RefObject } from 'react';

// Scroll handling utility
export const useScrollHandler = (
  scrollContainerRef: RefObject<HTMLDivElement>,
  introRef: RefObject<HTMLDivElement>,
  setIsSticky: (isSticky: boolean) => void
) => {
  const handleScroll = () => {
    if (scrollContainerRef.current && introRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const introHeight = introRef.current.offsetHeight;

      // Check if intro has scrolled behind the header
      if (scrollTop > introHeight + 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  return handleScroll;
};

// Scroll event listener setup utility
export const setupScrollListener = (
  scrollContainer: HTMLDivElement | null,
  handleScroll: () => void
) => {
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }
  return undefined;
};

// Constants for Users page
export const USERS_PAGE_CONSTANTS = {
  SCROLL_OFFSET: 20, // Offset for sticky behavior
  INTRO_HEIGHT_BUFFER: 20 // Buffer for intro height calculation
} as const;
