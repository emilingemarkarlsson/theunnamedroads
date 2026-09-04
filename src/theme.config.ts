import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://www.theunnamedroads.com',
  title: 'The Unnamed Roads',
  description:
    'AI-native venture studio building measured, decision-first companies. Portfolio of focused experiments, Field Notes for indie founders, and a Company OS that compounds learning.',
  author: 'The Unnamed Roads',
  navbarItems: [
    { label: 'Projects', href: '/projects' },
    { label: 'Field Notes', href: '/posts' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' }
  ],
  footerNavItems: [
    { label: 'Stack', href: '/stack' },
    { label: 'Tools', href: '/tools' },
    { label: 'Contact', href: '/contact' },
    { label: 'For assistants', href: '/for-assistants' }
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
