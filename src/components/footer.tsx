import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer
      id="footer"
      className="lg:flex lg:flex-row flex flex-col bg-black lg:h-96 py-20 border-t-2 border-b-2 mb-16 justify-around items-center lg:px-20 px-10 lg:gap-0 gap-10 border-white w-full text-center lg:text-start"
    >
      <div className="gap-8 flex flex-col">
        <h4 className="uppercase lg:text-8xl text-6xl font-bold">{t('h4')}</h4>
        <p className="uppercase text-xl opacity-60 font-normal pl-1 ">
          {t('p.part1')} <br /> {t('p.part2')}
        </p>
      </div>
      <div className="border-2 border-white p-6 font-extrabold uppercase rounded-full flex justify-center align-middle items-center">
        <a href="#">danribeiropaiva@wildlife.com</a>
      </div>
    </footer>
  )
}
