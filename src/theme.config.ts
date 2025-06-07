import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://theunnamedroad.dev',
  title: 'The Unnamed Road',
  description:
    'An anonymous, AI-driven venture studio exploring new business ideas without traditional startup infrastructure',
  author: 'The Unnamed Road',
  navbarItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
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
  locale: 'se',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-conversion',
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
