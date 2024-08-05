import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Nunito_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ['latin'] })
const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dann Paiva | WILDLIFE',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        // className={`${nunitoSans.className} flex flex-col bg-black text-white`}
        className={`${nunitoSans.className} bg-black text-white`}
      >
        <Nav />
        {children}
      </body>
    </html>
  )
}
