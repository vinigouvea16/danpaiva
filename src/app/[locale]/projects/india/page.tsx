import Image from 'next/image'
import Button from '@/components/button'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import NavB from '@/components/navb'
import IndiaClient from './india-client'
import { getImagesFromCloudinary } from '@/utils/get-images-from-cloudinary'
import { Suspense } from 'react'
// eslint-disable-next-line camelcase
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { ImageProps } from '@/utils/types'

type Props = {
  params: { locale: string }
}

export default async function India({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const images: ImageProps[] = await getImagesFromCloudinary('India')
  const t = await getTranslations('India')

  return (
    <div>
      <Nav />
      <NavB />
      <div className="flex flex-col h-svh items-start justify-between overflow-x-hidden">
        <Image
          src="/images/desktop/snowmeow.jpg"
          alt={'a picture of a cheetah'}
          className="absolute w-screen h-screen object-cover -z-10 "
          height={1080}
          width={1920}
          unoptimized={true}
        />
        <div
          id="text-hero"
          className="relative flex flex-col lg:left-[5%] lg:top-1/2 h-full lg:h-auto lg:items-start items-center lg:justify-normal justify-evenly lg:px-0 px-2 gap-80 lg:gap-0"
        >
          <h1 className="lg:text-[7vw] text-black opacity-65 text-[11vw] font-extrabold  uppercase tracking-[0.20em]">
            INDIA
          </h1>
          <p className="lg:text-xl lg:w-1/2 lg:pl-1 text-black lg:opacity-65 text-center lg:text-start">
            {t('hero-p')}
          </p>
        </div>
        <div className="bottom-4 relative flex left-[48%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#111111a8"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </div>
      <div id="story" className="bg-black w-full h-auto">
        <div className="flex xl:px-36 py-24 px-4 gap-5 ">
          <div className="space-y-2 flex flex-col items-center text-center ">
            <span className="xl:text-6xl text-4xl font-extrabold mb-8">
              {t('story-span')}
            </span>
            <p className="xl:text-xl font-light">{t('story-p')}</p>
            <p className="xl:text-xl font-light">{t('story-p2')}</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <IndiaClient images={images} />
      </Suspense>

      <Button href="/portfolio" label="projects" />

      <Footer />
    </div>
  )
}
