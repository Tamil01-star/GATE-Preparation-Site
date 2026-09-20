/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#EAF7ED',    
          primary: '#A8DDB5',  
          dark: '#3D8B5A',     
          hover: '#2a6340',
          text: '#173B27',     
          soft: '#EAF7ED',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#FFFFFF',     
          card: '#FFFFFF',
          cardDark: '#FFFFFF',
          border: '#A8DDB5',
          borderDark: '#A8DDB5'
        },
        slate: {
          900: '#173B27',
          800: '#173B27',
          700: '#1c4930',
          600: '#276844',
          500: '#3D8B5A',
          400: '#75b58c',
          300: '#A8DDB5',
          200: '#c5e8ce',
          100: '#EAF7ED',
          50: '#f4fbf5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'academic': '0 2px 8px -2px rgba(61, 139, 90, 0.08), 0 4px 16px -4px rgba(61, 139, 90, 0.1)',
        'academic-hover': '0 4px 12px -2px rgba(61, 139, 90, 0.15), 0 8px 24px -4px rgba(61, 139, 90, 0.12)',
      }
    },
  },
  plugins: [],
}
