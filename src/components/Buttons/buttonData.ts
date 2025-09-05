// Simple button configuration data for consistent styling across the app

export interface PrimarySolidBtnProps {
  name: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  hoverTextColor?: string;
  border?: string;
}

export const buttonData = {
  // Login Button Configuration
  LoginBtnProps: {
    name: 'Login',
    bgColor: 'bg-white/10',
    textColor: 'text-white',
    hoverBgColor: 'hover:bg-white/20',
    hoverTextColor: 'hover:text-white',
    border: 'border border-white/20'
  },

  // Register Button Configuration
  RegisterBtnProps: {
    name: 'Register',
    bgColor: 'bg-sera-yellow',
    textColor: 'text-dark-900',
    hoverBgColor: 'hover:bg-sera-yellow/90',
    hoverTextColor: 'hover:text-dark-900'
  }
};
