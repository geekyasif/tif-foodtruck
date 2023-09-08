import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
          'primary': '#E23744',
          'secondary': '#0E2368',
          'custom-text-gray': '#646874',
          "custom-text-blue": '#444957',
          'custom-bg-primary': '#F7F8FB'

      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'serif': ['Source Sans Pro', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
