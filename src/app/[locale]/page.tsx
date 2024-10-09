import LocaleSwitcherHeader from '@/components/language-switcher'
import { useTranslations } from 'next-intl'
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: { locale: string }
}

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('DesktopHome')

  return (
    <div className="flex lg:flex-row h-lvh flex-col">
      <LocaleSwitcherHeader />
      <Link href="/about" className="flex-1 relative group lg:h-lvh h-1/2">
        <Image
          src="/images/flamingo.jpg"
          fill
          className="object-cover lg:h-lvh h-full"
          alt="flamingos flying above the African sea"
          unoptimized={true}
          priority
        />
        <div className="absolute z-10 inset-0 flex opacity-60 flex-col top-[10%] bottom-[10%] justify-between items-center group-hover:opacity-100 group-hover:mix-blend-color-dodge group-hover:text-amber-500">
          <div className="relative mx-auto text-center md:text-left mt-4">
            <span className=""> {t('span')}</span>
            <h1 className="xl:text-clamp-6xl text-4xl mt-3 font-extrabold uppercase tracking-[0.25em] bg-black bg-opacity-0">
              {t('h1')}
            </h1>
          </div>
          <h2 className="font-extrabold tracking-[5px] text-2xl uppercase lg:block">
            {t('h2')}
          </h2>
        </div>
      </Link>

      <Link href="/portfolio" className="flex-1 relative group lg:h-lvh h-1/2">
        <Image
          src="/images/zebras.jpg"
          fill
          className="object-cover lg:h-lvh h-full"
          alt="two zebras on top of a grass field"
          unoptimized={true}
          priority
        />
        <div className="absolute z-10 inset-0 uppercase flex flex-col top-[10%]  bottom-[10%] justify-between items-center opacity-60 font-extrabold group-hover:opacity-100 group-hover:mix-blend-color-dodge  group-hover:text-amber-500">
          <h3 className="xl:text-clamp-6xl pt-6 mt-3 text-4xl font-extrabold tracking-[0.25em] bg-black bg-opacity-0">
            {t('h3')}
          </h3>
          <h4 className="tracking-[5px] text-2xl lg:block">{t('h4')}</h4>
        </div>
      </Link>
    </div>
  )
}
