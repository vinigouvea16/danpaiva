import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <>
      <footer
        id="footer"
        className="lg:flex lg:flex-row flex flex-col bg-dark-green lg:h-96 py-16 border-t-2 border-b-2 mb-4 justify-around items-center lg:gap-0 gap-10 border-white w-full text-center lg:text-start"
      >
        <div className="gap-4 md:gap-4 flex flex-col">
          <h4 className="uppercase lg:text-[4vw] text-5xl font-bold md:max-w-[550px] 3xl:max-w-none">
            {t('h4')}
          </h4>
          <p className="uppercase lg:text-xl text-sm opacity-60 font-normal pl-1 ">
            {t('p.part1')} <br /> {t('p.part2')}
          </p>
        </div>
        <div className="border-2 border-white p-6 font-extrabold uppercase rounded-full flex justify-center align-middle items-center">
          <a href="mailto:drc_paiva@hotmail.com">dannpaiva@wildlife.com</a>
        </div>
      </footer>
      <div>
        <p className="flex justify-start text-sm pl-4 md:pl-10 pb-4 gap-1">
          made by{' '}
          <a
            href="http://tailvinicss.dev"
            className="italic tracking-widest text-[#9FBE77]"
          >
            tailvinicss
          </a>
        </p>
      </div>
    </>
  )
}
