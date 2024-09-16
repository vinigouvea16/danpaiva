import { NextIntlClientProvider } from 'next-intl'
// eslint-disable-next-line camelcase
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import localFont from 'next/font/local'
import './globals.css'

const nunitoSans = localFont({
  src: [
    {
      path: '../../public/fonts/Nunito/NunitoSans_10pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nunito/NunitoSans_10pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nunito/NunitoSans_10pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nunito/NunitoSans_10pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nunito/NunitoSans_10pt-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Dann Paiva | WILDLIFE',
  description: 'Dann Paiva',
}

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${nunitoSans.className} bg-black text-white`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
