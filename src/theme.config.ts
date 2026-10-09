import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://www.theunnamedroads.com',
  title: 'The Unnamed Roads',
  description:
    'An AI-native venture studio: a new kind of accelerator where AI does almost all of the work of starting, building and testing new companies. One founder in Stockholm, every project in the open.',
  author: 'The Unnamed Roads',
  navbarItems: [
    { label: 'Projects', href: '/projects' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Field Notes', href: '/posts' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  footerNavItems: [
    { label: 'Insights', href: '/insights' },
    { label: 'Stack', href: '/stack' },
    { label: 'Tools', href: '/tools' },
    { label: 'Agents', href: '/agents' },
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
