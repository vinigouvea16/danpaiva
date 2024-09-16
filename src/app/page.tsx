/* eslint-disable camelcase */
import { redirect } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'

export const dynamic = 'force-dynamic' // Force dynamic rendering

type Props = {
  params: { locale: string }
}

export default function RootPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  redirect('/pt-BR')

  // return null
}
