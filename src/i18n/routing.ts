import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'pt-BR'],
  defaultLocale: 'pt-BR',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      'pt-BR': '/about',
    },
    '/portfolio': {
      en: '/portfolio',
      'pt-BR': '/portfolio',
    },
    '/projects/africa': {
      en: '/projects/africa',
      'pt-BR': '/projects/africa',
    },
    '/projects/pantanal': {
      en: '/projects/pantanal',
      'pt-BR': '/projects/pantanal',
    },
    '/projects/india': {
      en: '/projects/india',
      'pt-BR': '/projects/india',
    },
    '/projects/himalaya': {
      en: '/projects/himalaya',
      'pt-BR': '/projects/himalaya',
    },
  },
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing)
