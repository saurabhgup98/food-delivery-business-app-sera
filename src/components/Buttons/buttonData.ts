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
  },

  // Submit Button Configuration (for forms)
  SubmitBtnProps: {
    name: 'Submit',
    bgColor: 'w-full bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80',
    textColor: 'text-white',
    hoverBgColor: 'hover:from-sera-blue/90 hover:via-sera-blue/80 hover:to-sera-blue/70',
    hoverTextColor: 'hover:text-white',
    border: 'py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-sera-blue/20 hover:scale-[1.02] text-sm tracking-wide font-bold'
  }
};
