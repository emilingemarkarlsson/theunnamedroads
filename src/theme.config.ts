import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://www.theunnamedroads.com',
  title: 'The Unnamed Road',
  description:
    'AI-native venture studio building measured, decision-first companies. Portfolio of focused experiments, Field Notes for indie founders, and a Company OS that compounds learning.',
  author: 'The Unnamed Road',
  navbarItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Stack', href: '/stack' },
    { label: 'Tools', href: '/tools' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' }
  ],
  footerItems: [
    {
      icon: 'tabler--mail',
      href: '/contact',
      label: 'Contact'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: false,
  colorScheme: 'scheme-roads',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
