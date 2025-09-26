export const theme = {
  colors: {
    // Primary Colors - Based on the burgundy/maroon from your logo
    primary: {
      light: '#c6315bff', // soft purple-pink
      main: '#9b3544ff',  // deep burgundy from logo
      dark: '#5D1A20',  // darker burgundy
    },
    
    // Secondary Colors - Inspired by the warm leaf tones
    secondary: {
      light: '#DBEAFE', // soft sky blue
      main: '#3B82F6',  // professional blue
      dark: '#1E40AF',  // deep navy blue
    },
    
    // Accent Colors - Reflecting the vibrant leaf colors
    accent: {
      teal: {
        light: '#A7F3D0', // soft mint green
        main: '#10B981',  // emerald green from leaves
        dark: '#047857',  // forest green
      },
      rose: {
        light: '#FECACA', // soft pink
        main: '#EC4899', // vibrant pink from leaves
        dark: '#BE185D', // deep rose
      },
      sage: {
        light: '#D1FAE5', // very light sage
        main: '#6EE7B7', // soft sage green
        dark: '#059669', // deeper sage
      },
      coral: {
        light: '#FED7AA', // soft peach
        main: '#FB923C', // warm coral
        dark: '#EA580C', // deep coral
      },
    },
    
    // Background Colors - Soft, caring tones
    background: {
      primary: '#FFFBF7',   // warm white with slight cream tint
      secondary: '#FEF7F0', // very soft peach background
      accent: '#F0FDF4',    // very light mint background
      card: '#FFFFFF',      // pure white for cards
    },
    
    // Text Colors - Ensuring readability while maintaining warmth
    text: {
      primary: '#2D1B22',   // deep warm brown (easier on eyes than black)
      secondary: '#6B5B73', // muted purple-gray
      light: '#9CA3AF',     // soft gray
      accent: '#8B2635',    // burgundy for accent text
    },
    
    // Gradient Combinations - Caring and nurturing feel
    gradients: {
      primary: 'from-rose-400 to-pink-500',           // burgundy-rose gradient
      secondary: 'from-blue-400 to-blue-600',         // professional blue gradient
      accent: 'from-emerald-400 to-teal-500',        // fresh green gradient
      hero: 'from-rose-300 via-pink-200 to-blue-200', // caring hero gradient with blue
      card: 'from-white to-blue-50',                 // subtle blue card background
      nature: 'from-lime-300 to-emerald-400',        // vibrant nature gradient
      personalCare: 'from-rose-400 to-pink-500',     // warm caring gradient
      community: 'from-lime-400 to-emerald-500',     // community growth gradient
      independence: 'from-teal-400 to-emerald-500',  // stability & growth gradient
    },
    
    // Status Colors - Softened for care context
    status: {
      success: {
        light: '#D1FAE5',
        main: '#10B981', 
        dark: '#047857',
      },
      warning: {
        light: '#FEF3C7',
        main: '#F59E0B',
        dark: '#D97706',
      },
      error: {
        light: '#FEE2E2',
        main: '#EF4444',
        dark: '#DC2626',
      },
      info: {
        light: '#E0F2FE',
        main: '#0EA5E9',
        dark: '#0284C7',
      },
    },
  },
  // Border Radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  // Spacing
  spacing: {
    section: {
      padding: {
        desktop: '5rem',
        mobile: '3rem',
      },
    },
  },
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  // Animation
  animation: {
    transition: 'all 0.3s ease-in-out',
    hover: 'transform 0.2s ease-in-out',
  },
};