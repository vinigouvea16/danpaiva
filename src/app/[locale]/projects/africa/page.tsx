import Image from 'next/image'
import Button from '@/components/button'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import NavB from '@/components/navb'
import { getImagesFromCloudinary } from '@/utils/get-images-from-cloudinary'
import { Suspense } from 'react'
import AfricaClient from './africa-client'
// eslint-disable-next-line camelcase
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type Props = {
  params: { locale: string }
}

export default async function Africa({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const images = await getImagesFromCloudinary('africa')
  const t = await getTranslations('Africa')

  return (
    <div>
      <Nav />
      <NavB />
      <div className="flex flex-col h-svh items-start justify-between overflow-x-hidden">
        <Image
          src="/images/flamingo.jpg"
          alt={'a picture of a cheetah'}
          className="absolute w-screen h-screen object-cover -z-10 brightness-75"
          height={1080}
          width={1920}
          unoptimized={true}
        />
        <div
          id="text-hero"
          className="relative flex flex-col lg:left-[5%] lg:top-1/2 h-full lg:h-auto lg:items-start items-center lg:justify-normal justify-evenly lg:px-0 px-2 gap-80 lg:gap-0"
        >
          <h1 className="lg:text-[7vw] text-[11vw] font-extrabold  uppercase tracking-[0.20em]">
            AFRICA
          </h1>
          <p className="text-xl lg:w-1/2 lg:pl-1 text-center lg:text-start">
            {t('hero-p')}
          </p>
        </div>
        <div className="bottom-8 relative flex left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#fff"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </div>
      <div id="story" className="bg-black w-full h-auto">
        <div className="flex xl:px-36 py-24 px-2 gap-5 ">
          <div className="gap-8 flex flex-col items-center text-center ">
            <span className="xl:text-6xl text-4xl font-extrabold ">
              {t('story-span')}
            </span>
            <p className="xl:text-xl font-light">{t('story-p')}</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <AfricaClient images={images} />
      </Suspense>

      <Button href="/portfolio" label="projects" />

      <Footer />
    </div>
  )
}
