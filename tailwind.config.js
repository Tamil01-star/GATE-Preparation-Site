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
          light: '#F1FBF5',
          text: 'var(--brand-text)',
          border: 'var(--brand-border)',
          primary: '#78C99A',
          dark: '#26734D',
          hover: '#1e5c3e',
          accent: '#A3E0BC',
          soft: '#E4F6EB',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#141E18',
          card: '#FFFFFF',
          cardDark: '#1A2920',
          border: '#E2ECE6',
          borderDark: '#283B30'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'academic': '0 2px 8px -2px rgba(38, 115, 77, 0.06), 0 4px 16px -4px rgba(38, 115, 77, 0.08)',
        'academic-hover': '0 4px 12px -2px rgba(38, 115, 77, 0.12), 0 8px 24px -4px rgba(38, 115, 77, 0.1)',
      }
    },
  },
  plugins: [],
}
