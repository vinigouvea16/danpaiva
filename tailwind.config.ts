import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radial-custom':
          'radial-gradient(circle, rgba(159,190,119,1) 15%, rgba(0,0,0,1) 100%);',
      },
      inset: {
        'calc-50-20': 'calc(50% - 20px)',
      },
      transform: {
        'scale-negative-1': 'scale(-1)',
      },
      backdropBlur: {
        '180px': '180px',
      },
      fontSize: {
        'clamp-8xl': 'clamp(2rem, 4vw + 1rem, 5rem)',
        'clamp-7xl': 'clamp(1.75rem, 3.5vw + 0.875rem, 4.5rem)',
        'clamp-6xl': 'clamp(1.5rem, 3vw + 0.6rem, 4rem)',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}
export default config
