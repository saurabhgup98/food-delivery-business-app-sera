// Login form configuration
export const LOGIN_FORM_CONFIG = {
  initialFormData: {
    email: '',
    password: ''
  },
  
  inputConfigs: [
    {
      name: 'email',
      type: 'email' as const,
      placeholder: 'Email address'
    },
    {
      name: 'password',
      type: 'password' as const,
      placeholder: 'Password'
    }
  ],
  
  roleInfo: {
    'business-user': { 
      title: 'Restaurant Owner', 
      icon: '🏪', 
      description: 'Manage your restaurant and orders' 
    },
    'admin': { 
      title: 'Platform Admin', 
      icon: '⚙️', 
      description: 'Manage restaurants, users, and platform settings' 
    },
    'superadmin': { 
      title: 'Super Admin', 
      icon: '👑', 
      description: 'Full system access and management' 
    }
  },

  submitButtonProps: {
    name: "Sign In",
    bgColor: "w-full bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80",
    textColor: "text-white",
    hoverBgColor: "hover:from-sera-blue/90 hover:via-sera-blue/80 hover:to-sera-blue/70",
    border: "py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-sera-blue/20 hover:scale-[1.02] text-sm tracking-wide font-bold"
  },

  oauthButtons: {
    google: {
      provider: 'google' as const,
      className: "w-full flex items-center justify-center space-x-3 py-3 px-6 rounded-xl border-2 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sera-blue/20",
      onClick: () => window.location.href = `${(import.meta as any).env?.VITE_API_BASE_URL || 'https://simple-authentication-service.vercel.app'}/api/oauth/google`
    },
    facebook: {
      provider: 'facebook' as const,
      className: "w-full flex items-center justify-center space-x-3 py-3 px-6 rounded-xl border-2 border-blue-600/20 bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 hover:border-blue-600/30 hover:text-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sera-blue/20",
      onClick: () => window.location.href = `${(import.meta as any).env?.VITE_API_BASE_URL || 'https://simple-authentication-service.vercel.app'}/api/oauth/facebook`
    }
  }
} as const;