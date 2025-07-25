import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://www.theunnamedroads.com',
  title: 'The Unnamed Road',
  description:
    'AI-native venture studio building the future roads of business. Where human creativity merges with artificial intelligence to forge impossible innovations through anonymous, experimental methodology and post-human entrepreneurship.',
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
  locale: 'en',
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
