import tailwindTypography from '@tailwindcss/typography'
import { createRequire } from 'module'
import defaultTheme from 'tailwindcss/defaultTheme'

const require = createRequire(import.meta.url)
const { addIconSelectors } = require('@iconify/tailwind')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: withOpacity('--accent'),
        'accent-bg': withOpacity('--accent-bg')
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [tailwindTypography, addIconSelectors(['tabler'])],
  darkMode: ['selector', '[data-mode="dark"]']
}
