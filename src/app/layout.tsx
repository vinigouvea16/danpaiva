import type { Metadata } from 'next'
// eslint-disable-next-line camelcase, @typescript-eslint/no-unused-vars
import { Inter, Nunito_Sans } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ['latin'] })
// const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

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
  description: `Dann Paiva`,
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
        {children}
      </body>
    </html>
  )
}
