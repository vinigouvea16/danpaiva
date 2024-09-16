import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) notFound()

  return {
    messages: (
      await (locale === 'pt-BR'
        ? import(`../messages/${locale}.json`)
        : import('../messages/en.json'))
    ).default,
  }
})
