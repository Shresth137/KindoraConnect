/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Based on the burgundy/maroon from your logo
        primary: {
          light: '#c5506bff', // lighter burgundy-rose
          medium: '#A9324C', // medium rose
          main: '#8B2635',  // deep burgundy from logo
          dark: '#5D1A20',  // darker burgundy
        },
        
        // Secondary Colors - Professional blue scheme
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
          lime: {
            light: '#ECFCCB', // very light lime
            main: '#84CC16', // bright lime green
            dark: '#65A30D', // deeper lime
          },
        },
        
        // Background Colors - Soft, caring tones
        background: {
          primary: '#FFFBF7',   // warm white with slight cream tint
          secondary: '#FEF7F0', // very soft peach background
          accent: '#F0FDF4',    // very light mint background
          plain: '#FFFFFF',      // pure white for cards and sections
        },
        
        // Text Colors - Ensuring readability while maintaining warmth
        text: {
          primary: '#2D1B22',   // deep warm brown (easier on eyes than black)
          secondary: '#6B5B73', // muted purple-gray
          light: '#9CA3AF',     // soft gray
          accent: '#8B2635',    // burgundy for accent text
        },
      },
      
      // Custom gradient utilities
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #F472B4, #EC4899)',
        'gradient-secondary': 'linear-gradient(to right, #60A5FA, #3B82F6)',
        'gradient-accent': 'linear-gradient(to right, #34D399, #10B981)',
        'gradient-hero': 'linear-gradient(to right, #F9A8D4, #F3E8FF, #FED7AA)',
        'gradient-card': 'linear-gradient(to bottom, #FFFFFF, #EFF6FF)',
        'gradient-nature': 'linear-gradient(to right, #BEF264, #34D399)',
        'gradient-personal-care': 'linear-gradient(to right, #F472B4, #EC4899)',
        'gradient-community': 'linear-gradient(to right, #A3E635, #10B981)',
        'gradient-independence': 'linear-gradient(to right, #2DD4BF, #10B981)',
      }
    },
  },
  plugins: [],
}