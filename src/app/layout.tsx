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
  openGraph: {
    title: 'Dann Paiva | WILDLIFE',
    description: 'Discover the incredible wildlife photography of Dann Paiva.',
    url: 'https://danpaiva-wildlife.vercel.app/',
    images: [
      {
        url: '/images/metadataimagepaiva.png',
        width: 800,
        height: 600,
        alt: 'Wildlife Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dann Paiva | WILDLIFE',
    description: 'Discover the incredible wildlife photography of Dann Paiva.',
    images: ['/images/metadataimagepaiva.png'],
  },
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
    <html lang={locale} className="scroll-smooth">
      <body className={`${nunitoSans.className} bg-dark-green text-white`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
