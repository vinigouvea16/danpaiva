import Link from 'next/link'
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'

export const dynamic = 'force-dynamic' // Force dynamic rendering

type Props = {
  params: { locale: string }
}

export default function NotFound({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
