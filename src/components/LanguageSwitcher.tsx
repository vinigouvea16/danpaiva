'use client'

import { useRouter } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function LocaleSwitcherHeader() {
  const t = useTranslations('LocaleSwitcherHeader')
  const router = useRouter()

  const switchLocale = (locale: string) => {
    router.replace('/', { locale })
  }

  return (
    <header className="fixed top-0 w-full bg-transparent text-white py-2 flex justify-end items-center z-50">
      <div className="flex flex-col">
        <span className="pr-4 text-center">{t('span')}:</span>
        <div className="flex gap-2 pr-4">
          <Image
            src="/images/us-flag.png"
            alt="USA flag"
            width={40}
            height={10}
            className="cursor-pointer border-2 border-white rounded transition-transform duration-100 hover:scale-110"
            onClick={() => switchLocale('en')}
          />
          <Image
            src="/images/br-flag.png"
            alt="Brazilian flag"
            width={40}
            height={10}
            className="cursor-pointer border-2 border-white rounded transition-transform duration-200 hover:scale-110"
            onClick={() => switchLocale('pt-BR')}
          />
        </div>
      </div>
    </header>
  )
}
