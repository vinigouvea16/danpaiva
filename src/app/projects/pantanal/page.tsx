import Image from 'next/image'
import Button from '@/components/button'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import NavB from '@/components/navb'
import PantanalClient from './PantanalClient'
import { getImagesFromCloudinary } from '@/utils/getImagesFromCloudinary'
import { Suspense } from 'react'

export default async function Pantanal() {
  const images = await getImagesFromCloudinary('pantanal')
  // console.log('Images: ', images)

  return (
    <div>
      <Nav />
      <NavB />
      {/* <div className="flex flex-col h-screen bg-[url('/images/desktop/pantanalHome.jpg')] bg-no-repeat bg-cover overflow-hidden"> */}
      <div className="flex flex-col h-svh items-start justify-between overflow-x-hidden">
        <Image
          src="/images/desktop/pantanalHome.jpg"
          alt={'a picture of a cheetah'}
          className="absolute w-screen h-screen object-cover -z-10  "
          height={1080}
          width={1920}
          // layout="fill"
          // unoptimized={true}
          // objectFit="cover"
        />
        <div
          id="text-hero"
          className="relative flex flex-col lg:left-[5%] lg:top-1/2 h-full lg:h-auto lg:items-start items-center lg:justify-normal justify-evenly lg:px-0 px-2 gap-80 lg:gap-0"
        >
          <h1 className="lg:text-8xl text-5xl font-extrabold  uppercase tracking-[0.20em]">
            PANTANAL
          </h1>
          <p className="text-xl lg:w-1/2 lg:pl-1 text-center lg:text-start">
            My saddest take on wildlife - Brazil&apos;s richest flora and fauna
            burnt to ashes as the animals struggle to survive mid wildfire chaos
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
            <span className="xl:text-6xl text-4xl font-extrabold  ">
              The Harsh Reality of Wildfires in the Pantanal
            </span>
            <p className="xl:text-xl font-light">
              Amidst the vastness of the Pantanal, one of the most biodiverse
              regions in the world, fire spreads relentlessly. In recent years,
              wildfires have devastated this unique ecosystem, turning its lush
              flora and fauna into ashes. This region, home to iconic species
              such as the jaguar, the jabiru stork, and countless others, faces
              an unprecedented threat.
              <br /> Often sparked by human activities, these wildfires cause
              irreparable destruction, leading to the death of thousands of
              animals and the loss of essential habitats. In a landscape where
              life struggles to survive amidst the chaos, the images captured
              here stand as a testament to the devastating impact of these
              fires. They remind us of the urgency to protect the Pantanal
              before it&apos;s too late.
            </p>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PantanalClient images={images} />
      </Suspense>

      <Button href="/portfolio" label="next project" />

      <Footer />
    </div>
  )
}
