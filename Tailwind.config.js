// tailwind.config.js - Add these custom configurations

module.exports = {
  theme: {
    extend: {
      // Custom container with responsive padding
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3.75rem', // 60px = 15 * 4px (px-15 equivalent)
        },
      },
      
      // Custom spacing values
      spacing: {
        '13': '3.25rem',     // 52px
        '13.5': '3.375rem',  // 54px
        '15': '3.75rem',     // 60px
        '52.5': '13.125rem', // 210px
      },
      
      // Custom height values
      height: {
        '13': '3.25rem',     // 52px
      },
      
      // Custom width values
      width: {
        '52.5': '13.125rem', // 210px
        'xl': '36rem',       // 576px
      },
      
      // Custom max-width values
      maxWidth: {
        'xl': '36rem',       // 576px
      },
      
      // Custom font families
      fontFamily: {
        'integral': ['Integral CF', 'sans-serif'],
      },
      
      // Custom breakpoints (if needed)
      screens: {
        'xs': '475px',
        // sm: '640px',  (default)
        // md: '768px',  (default)
        // lg: '1024px', (default)
        // xl: '1280px', (default)
        '2xl': '1536px',
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};