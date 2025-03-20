import Image from 'next/image'
import React from 'react'
import Nav from '@/components/nav'
import Button from '@/components/button'
import Footer from '@/components/footer'
import NavB from '@/components/navb'
import { useTranslations } from 'next-intl'
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
  params: { locale: string }
}

export default function About({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('AboutPage')
  return (
    <>
      <Nav />
      <NavB />
      <div
        id="hero"
        className="flex flex-col h-lvh items-start justify-between"
      >
        <Image
          src="/images/desktop/about.jpg"
          height={1080}
          width={1920}
          alt={'a picture of a bird'}
          className="absolute w-screen h-screen object-cover brightness-75"
        />
        <div
          id="text-hero"
          className="absolute flex flex-col lg:left-[10%] lg:top-1/2 top-[60%] left-0 md:text-left text-center px-4"
        >
          <h1 className="lg:text-[3vw] text-[8vw] font-extrabold">
            {t('h1.part1')} <br /> {t('h1.part2')}
          </h1>
          <p className="lg:text-3xl text-lg lg:w-2/3 backdrop-blur-[2px] md:backdrop-blur-none">
            {t('hero-p')}
          </p>
          <span className="uppercase lg:text-3xl text-xl font-extrabold tracking-widest text-amber-500 pt-1 backdrop-blur-[2px]md:backdrop-blur-none">
            {t('hero-span')}
          </span>
        </div>
        <div className="bottom-4 absolute flex left-[48%]">
          <a href="#myStory">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div id="myStory" className="xl:h-full w-full">
        <div className="flex xl:px-32 py-24 px-2 gap-12 xl:gap-0 justify-between items-center xl:flex-row flex-col ">
          <div
            id="left-side"
            className="xl:max-w-[63%] gap-8 flex flex-col items-center xl:text-start text-center"
          >
            <span className="text-4xl font-light ">{t('myStory-span')}</span>
            <p
              className="xl:text-lg font-light xl:leading-8  md:first-line:uppercase md:first-line:tracking-widest
  md:first-letter:text-7xl md:first-letter:font-bold md:first-letter:text-white
  md:first-letter:mr-3 md:first-letter:float-left"
            >
              {t('myStory-p1')}
            </p>
            <p className="xl:text-lg font-light xl:leading-8 ">
              {t('myStory-p2')}
            </p>
          </div>
          <div id="right-side" className="lg:p-8">
            <Image
              src="/images/desktop/story.jpg"
              width={500}
              height={500}
              alt={'photo of the photographer'}
              className="lg:rounded-none rounded-[2em]"
            />
          </div>
        </div>
      </div>

      <div
        id="photographicTour"
        className="xl:px-32 pb-36 px-2  xl:gap-0 flex justify-between items-center flex-col text-center"
      >
        <h2 className="mb-12 text-clamp-6xl text-4xl mt-3 font-extrabold uppercase tracking-[0.25em] text-amber-500">
          {t('tour-header1')}
        </h2>
        <div className="flex flex-col md:flex-row w-full gap-8">
          <Image
            src="/images/desktop/tour.jpg"
            width={900}
            height={900}
            alt={'photo of the photographer'}
            className="object-cover w-full md:w-1/2"
          />
          <div className="flex flex-col justify-evenly w-full md:w-1/2 lg:space-y-12 space-y-8 text-center lg:text-left lg:pr-8">
            <h6 className="text-xl font-thin italic">{t('tour-header2')}</h6>
            <p className="xl:text-xl xl:leading-10">{t('tour-p')}</p>
            <div className="space-y-4">
              <p className="lg:text-xl font-thin tracking-wide text-gray-400">
                {t('tour-p2')}
              </p>
              <p className="lg:text-xl pb-2">{t('tour-cta')}</p>
              <a
                href="/doc/VIAGEM-PANTANAL-OUT25.pdf"
                download="VIAGEM-PANTANAL-OUT25.pdf"
                className="text-sky-300 italic tracking-wide "
              >
                {t('tour-a')}
              </a>
            </div>
            <p className="lg:text-xl text-lg xl:leading-8 flex lg:flex-row flex-col gap-4 justify-center items-center lg:justify-start">
              {t('tour-p3')}{' '}
              <a href="https://www.instagram.com/dannpaiva_/" id="Instagram">
                <span className="sr-only">instagram link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        id="banner"
        className="w-full h-32 bg-[#9FBE77] text-black uppercase hidden lg:flex justify-evenly align-middle items-center text-clamp-7xl mb-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="112"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"></path>
        </svg>
        <a
          href="/portfolio"
          className="no-underline font-extrabold tracking-widest "
        >
          <span className="uppercase">{t('banner-span')}</span>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="112"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"></path>
        </svg>
      </div>

      <Button href="/portfolio" label="about" className="lg:hidden" />

      <Footer />
    </>
  )
}
