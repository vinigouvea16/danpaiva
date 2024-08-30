import Image from 'next/image'
import Button from '@/components/button'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import NavB from '@/components/navb'
import { getImagesFromCloudinary } from '@/utils/getImagesFromCloudinary'
import { Suspense } from 'react'
import AfricaClient from './AfricaClient'

export default async function Africa() {
  const images = await getImagesFromCloudinary('africa')
  // console.log('Images: ', images)

  return (
    <div>
      <Nav />
      <NavB />
      {/* <div className="flex flex-col h-screen bg-[url('/images/desktop/pantanalHome.jpg')] bg-no-repeat bg-cover overflow-hidden"> */}
      <div className="flex flex-col h-svh items-start justify-between overflow-x-hidden">
        <Image
          src="/images/desktop/africa.jpg"
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
            AFRICA
          </h1>
          <p className="text-xl lg:w-1/2 lg:pl-1 text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum
            voluptas recusandae tempora quidem corrupti voluptatibus eum? Cumque
            accusamus tempore nostrum. Quam facilis eveniet voluptatum, sunt
            quod soluta cupiditate fugiat?
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
              About the Project
            </span>
            <p className="xl:text-xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id minus
              laudantium quos. Dolore laudantium sapiente doloremque beatae ad
              numquam id in, officia praesentium esse dolor alias deleniti
              incidunt, ut consequuntur! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dolore, inventore commodi praesentium pariatur
              molestiae harum dolorem dolores, perspiciatis a et recusandae
              iusto expedita voluptatibus temporibus itaque earum, ducimus iure
              tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor sunt enim cum ullam ratione, inventore quos explicabo odio
              reprehenderit quas eaque libero maxime quisquam sint neque
              deleniti. Accusantium, molestias eius? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab alias, ad beatae sit, amet,
              incidunt tempore voluptas necessitatibus quasi veritatis similique
              maxime inventore mollitia quibusdam obcaecati perspiciatis unde
              rerum repellat! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Architecto quaerat consequuntur enim error cupiditate
              accusantium laudantium, dolores aut. Consectetur accusantium fuga
              deleniti et illo earum unde quas laudantium repudiandae
              necessitatibus.
            </p>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <AfricaClient images={images} />
      </Suspense>

      <Button href="/portfolio" label="next project" />

      <Footer />
    </div>
  )
}
