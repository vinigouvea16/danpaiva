import Image from 'next/image'
import React from 'react'
// import heroImage from '../../../public/images/desktop/SNY06578.jpg'
import fotopaiva from '../../../public/images/desktop/image1.png'

export function Hero() {
  return (
    <div className="flex flex-col h-screen bg-[url('/images/desktop/SNY06578.jpg')] bg-no-repeat bg-cover overflow-hidden">
      {/* <div className="flex flex-col h-dvh items-start justify-between"> */}
      {/* <Image
        src={heroImage}
        alt={'a picture of a bird'}
        className="-z-10"
        layout="fill"
        objectFit="cover"
      /> */}
      <div
        id="text-hero"
        className="relative flex flex-col left-[10%] lg:top-1/3 top-1/4"
      >
        <h1 className="text-6xl font-extrabold">Hello, I&apos;m Daniel</h1>
        <p className="lg:text-3xl text-2xl w-80">
          A passionate admirer of the wildlife, eager to capture nature&apos;s
          best moments
        </p>
      </div>
      <div className="bottom-20 absolute flex left-1/2">
        <a href="#story">
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
  )
}

export function Story() {
  return (
    <div id="story" className="lg:h-dvh bg-black w-full">
      <div className="flex lg:px-36 py-24 px-10 gap-12 lg:gap-0 justify-between lg:flex-row flex-col">
        <div
          id="left-side"
          className="lg:w-1/2 gap-8 flex flex-col items-center lg:text-start text-center"
        >
          <span className="text-4xl font-light">My Story</span>
          <p className="lg:text-xl font-light lg:leading-10 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id minus
            laudantium quos. Dolore laudantium sapiente doloremque beatae ad
            numquam id in, officia praesentium esse dolor alias deleniti
            incidunt, ut consequuntur! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolore, inventore commodi praesentium pariatur
            molestiae harum dolorem dolores, perspiciatis a et recusandae iusto
            expedita voluptatibus temporibus itaque earum, ducimus iure tempore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt
            enim cum ullam ratione, inventore quos explicabo odio reprehenderit
            quas eaque libero maxime quisquam sint neque deleniti. Accusantium,
            molestias eius?
          </p>
        </div>
        <div id="right-side" className="lg:p-8">
          <Image
            src={fotopaiva}
            alt={'photo of the photographer'}
            className="lg:rounded-none rounded-[4em]"
          />
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <div
      id="footer"
      className="lg:flex lg:flex-row flex flex-col bg-black lg:h-96 py-20 border-t-2 border-b-2 mb-16 justify-around items-center lg:px-20 px-10 lg:gap-0 gap-10 border-white w-full text-center lg:text-start"
    >
      <div className="gap-8 flex flex-col">
        <h2 className="uppercase lg:text-8xl text-6xl font-bold">reach me</h2>
        <p className="uppercase text-xl font-bold pl-1 ">
          I wold love to hear from you
          <br /> Let&apos;s work together
        </p>
      </div>
      <div className="border-2 border-white px-6 py-3 rounded-full flex justify-center align-middle items-center">
        <a href="#">danribeiropaiva@wildlife.com</a>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Footer />
    </>
  )
}
