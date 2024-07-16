import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
    },
  },
  plugins: [typographyPlugin],
} satisfies Config
