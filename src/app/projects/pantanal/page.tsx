import React from 'react'
import Image from 'next/image'

import imageA from '../../../../public/images/desktop/india.jpg'
import imageB from '../../../../public/images/desktop/pantanal.jpg'
import imageC from '../../../../public/images/desktop/africa.jpg'
import imageD from '../../../../public/images/desktop/himalaya.jpg'
import imageE from '../../../../public/images/desktop/wildlife.jpg'
import Button from '@/components/button'
import Footer from '@/components/footer'
import Nav from '@/components/nav'

export default function Pantanal() {
  return (
    <div>
      <Nav />
      {/* <div className="flex flex-col h-screen bg-[url('/images/desktop/pantanalHome.jpg')] bg-no-repeat bg-cover overflow-hidden"> */}
      <div className="flex flex-col h-dvh items-start justify-between">
        <Image
          src="/images/desktop/pantanalHome.jpg"
          alt={'a picture of a cheetah'}
          className="absolute w-screen h-screen object-cover -z-10  "
          layout="fill"
          quality={100}
          unoptimized={true}
          // objectFit="cover"
        />
        <div
          id="text-hero"
          className="relative flex flex-col lg:left-[5%] lg:top-1/2 h-full lg:h-auto lg:items-start items-center lg:justify-normal justify-around lg:px-0 px-10"
        >
          <h1 className="lg:text-8xl text-5xl font-extrabold  uppercase tracking-[0.20em]">
            PANTANAL
          </h1>
          <p className="text-xl lg:w-1/2 lg:pl-1">
            My saddest take on wildlife - Brazil&apos;s richest flora and fauna
            burnt to ashes as the animals struggle to survive mid wildfire chaos
          </p>
        </div>
        <div className="bottom-20 absolute flex left-1/2">
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
        <div className="flex lg:px-36 py-24 px-10 gap-5 ">
          <div className="gap-8 flex flex-col items-center text-center lg:text-start">
            <span className="lg:text-7xl text-5xl font-extrabold ">
              About the Project
            </span>
            <p className="lg:text-2xl font-light">
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

      <div id="gallery" className="flex justify-center ">
        <div className="grid grid-cols-2 p-2 gap-2 lg:w-3/4 mb-20">
          {/* Row 1: Two images */}
          <div className="w-full">
            <Image
              src={imageA}
              alt="Image A"
              className="w-full h-full object-cover"
              unoptimized={true}
            />
          </div>
          <div className="w-full">
            <Image
              src={imageB}
              alt="Image B"
              className="w-full object-cover"
              unoptimized={true}
            />
          </div>

          {/* Row 2 and 3: Large image spanning two rows */}
          <div className="col-span-2">
            <Image
              src={imageC}
              alt="Image C"
              className="w-full h-full object-cover"
              unoptimized={true}
            />
          </div>

          {/* Row 3: Two smaller images */}
          <div className="w-full h-full">
            <Image
              src={imageD}
              alt="Image D"
              className="w-full h-full object-cover"
              unoptimized={true}
            />
          </div>
          <div className="w-full h-full">
            <Image
              src={imageE}
              alt="Image E"
              className="w-full h-full object-cover"
              unoptimized={true}
            />
          </div>
        </div>
      </div>

      <Button href="/portfolio" label="next project" />

      <Footer />
    </div>
  )
}

// export default function Pantanal() {
//   return (
//     <div>
//       <Hero />
//       <Story />
//       <Footer />
//     </div>
//   )
// }

// export function Hero() {
//   return (
//     <div className="flex flex-col h-screen bg-[url('/images/desktop/pantanalHome.jpg')] bg-no-repeat bg-cover overflow-hidden">
//       {/* // <div className="flex flex-col h-dvh items-start justify-between"> */}
//       {/* <Image
//         src={PantanalHeroImage}
//         alt={'a picture of a cheetah'}
//         className="absolute w-screen h-screen object-cover -z-10  "
//         layout="fill"
//         quality={100}
//         // objectFit="cover"
//       /> */}
//       <div
//         id="text-hero"
//         className="relative flex flex-col lg:left-[10%] lg:top-1/4 h-full lg:h-auto lg:items-start items-center lg:justify-normal justify-around lg:px-0 px-10"
//       >
//         <h1 className="lg:text-8xl text-5xl font-extrabold  uppercase tracking-[0.20em]">
//           PANTANAL
//         </h1>
//         <p className="text-2xl lg:w-1/3 lg:pl-1">
//           My saddest take on wildlife - Brazil&apos;s richest flora and fauna
//           burnt to ashes as the animals struggle to survive mid wildfire chaos
//         </p>
//       </div>
//       <div className="bottom-20 absolute flex left-1/2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="32"
//           height="32"
//           fill="#fff"
//           viewBox="0 0 256 256"
//         >
//           <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//         </svg>
//       </div>
//     </div>
//   )
// }

// export function Story() {
//   return (
//     <div id="story" className="bg-black w-full h-auto">
//       <div className="flex lg:px-36 py-24 px-10 gap-5 ">
//         <div className="gap-8 flex flex-col items-center text-center lg:text-start">
//           <span className="lg:text-7xl text-5xl font-extrabold ">
//             About the Project
//           </span>
//           <p className="lg:text-2xl font-light">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id minus
//             laudantium quos. Dolore laudantium sapiente doloremque beatae ad
//             numquam id in, officia praesentium esse dolor alias deleniti
//             incidunt, ut consequuntur! Lorem, ipsum dolor sit amet consectetur
//             adipisicing elit. Dolore, inventore commodi praesentium pariatur
//             molestiae harum dolorem dolores, perspiciatis a et recusandae iusto
//             expedita voluptatibus temporibus itaque earum, ducimus iure tempore!
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt
//             enim cum ullam ratione, inventore quos explicabo odio reprehenderit
//             quas eaque libero maxime quisquam sint neque deleniti. Accusantium,
//             molestias eius? Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Ab alias, ad beatae sit, amet, incidunt tempore voluptas
//             necessitatibus quasi veritatis similique maxime inventore mollitia
//             quibusdam obcaecati perspiciatis unde rerum repellat! Lorem ipsum
//             dolor sit amet consectetur adipisicing elit. Architecto quaerat
//             consequuntur enim error cupiditate accusantium laudantium, dolores
//             aut. Consectetur accusantium fuga deleniti et illo earum unde quas
//             laudantium repudiandae necessitatibus.
//           </p>
//           <Gallery />
//         </div>
//       </div>
//     </div>
//   )
// }

// export function Footer() {
//   return (
//     <div
//       id="footer"
//       className="lg:flex lg:flex-row flex flex-col bg-black lg:h-96 py-20 border-t-2 border-b-2 mb-16 justify-around items-center lg:px-20 px-10 lg:gap-0 gap-10 border-white w-full text-center lg:text-start"
//     >
//       <div className="gap-8 flex flex-col">
//         <h2 className="uppercase lg:text-8xl text-6xl font-bold">reach me</h2>
//         <p className="uppercase text-xl font-bold pl-1 ">
//           I wold love to hear from you
//           <br /> Let&apos;s work together
//         </p>
//       </div>
//       <div className="border-2 border-white px-6 py-3 rounded-full flex justify-center align-middle items-center">
//         <a href="#">danribeiropaiva@wildlife.com</a>
//       </div>
//     </div>
//   )
// }

// export function Gallery() {
//   return (
//     <div className="lg:grid grid-cols-3 grid-rows-3 gap-4 p-4 lg:w-3/4 flex flex-col">
//       <div className="row-span-2">
//         <Image
//           src={imageA}
//           alt="Image A"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="col-span-2">
//         <Image
//           src={imageB}
//           alt="Image B"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="col-span-2 row-span-1">
//         <Image
//           src={imageC}
//           alt="Image C"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div>
//         <Image
//           src={imageD}
//           alt="Image D"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div>
//         <Image
//           src={imageD}
//           alt="Image F"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div>
//         <Image
//           src={imageD}
//           alt="Image G"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   )
// }
