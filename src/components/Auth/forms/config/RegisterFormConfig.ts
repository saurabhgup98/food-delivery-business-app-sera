// Register form configuration
export const REGISTER_FORM_CONFIG = {
  initialFormData: {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  
  inputConfigs: [
    {
      name: 'name',
      type: 'text' as const,
      placeholder: 'Full name'
    },
    {
      name: 'email',
      type: 'email' as const,
      placeholder: 'Email address'
    },
    {
      name: 'password',
      type: 'password' as const,
      placeholder: 'Password'
    },
    {
      name: 'confirmPassword',
      type: 'password' as const,
      placeholder: 'Confirm password'
    }
  ],

  submitButtonProps: {
    name: "Create Account",
    bgColor: "w-full bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80",
    textColor: "text-white",
    hoverBgColor: "hover:from-sera-blue/90 hover:via-sera-blue/80 hover:to-sera-blue/70",
    border: "py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-sera-blue/20 hover:scale-[1.02] text-sm tracking-wide font-bold"
  }
} as const;
