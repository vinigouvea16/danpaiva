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
          src="/images/desktop/cheetah.jpg"
          height={1080}
          width={1920}
          alt={'a picture of a bird'}
          className="absolute w-screen h-screen object-cover brightness-75"
        />
        <div
          id="text-hero"
          className="absolute flex flex-col lg:left-[10%] lg:top-1/2 top-[55%] left-0 md:text-left text-center"
        >
          <h1 className="lg:text-[3vw] text-[10vw] font-extrabold">
            {t('h1.part1')} <br /> {t('h1.part2')}
          </h1>
          <p className="lg:text-3xl text-2xl lg:w-2/3">{t('hero-p')}</p>
          <span className="uppercase text-3xl font-extrabold tracking-widest text-amber-500">
            {t('hero-span')}
          </span>
        </div>
        <div className="bottom-20 absolute flex left-1/2">
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
              className="xl:text-lg font-light xl:leading-8 text-justify first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left"
            >
              {t('myStory-p1')}
            </p>
            <p className="xl:text-lg font-light xl:leading-8 text-justify ">
              {t('myStory-p2')}
            </p>
          </div>
          <div id="right-side" className="lg:p-8">
            <Image
              src="/images/desktop/image1.png"
              width={500}
              height={500}
              alt={'photo of the photographer'}
              className="lg:rounded-none rounded-[2em]"
            />
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
