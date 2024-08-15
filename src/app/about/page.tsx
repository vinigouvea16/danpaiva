import Image from 'next/image'
import React from 'react'
// import heroImage from '../../../public/images/desktop/SNY06578.jpg'
import fotopaiva from '../../../public/images/desktop/image1.png'
import Nav from '@/components/nav'
import Button from '@/components/button'
import Footer from '@/components/footer'

export default function About() {
  return (
    <>
      <Nav />
      <div className="flex flex-col h-dvh bg-[url('/images/desktop/SNY06578.jpg')] bg-no-repeat bg-cover overflow-hidden">
        {/* <div className="flex flex-col h-dvh items-start justify-between">
        <Image
          src="/images/desktop/SNY06578.jpg"
          height={1080}
          width={1920}
          alt={'a picture of a bird'}
          unoptimized={true}
          className="object-fit h-screen"
        /> */}
        <div
          id="text-hero"
          className="absolute flex flex-col left-[10%] lg:top-1/3 top-1/4"
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

      <div id="story" className="lg:h-dvh w-full">
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
              molestiae harum dolorem dolores, perspiciatis a et recusandae
              iusto expedita voluptatibus temporibus itaque earum, ducimus iure
              tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor sunt enim cum ullam ratione, inventore quos explicabo odio
              reprehenderit quas eaque libero maxime quisquam sint neque
              deleniti. Accusantium, molestias eius?
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

      <div
        id="pre-footer"
        className="w-full h-32 bg-[#9FBE77] text-black uppercase hidden lg:flex justify-center gap-11 align-middle items-center text-8xl mb-20"
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
          <span className="">CHECK MY PORTFOLIO</span>
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

      <Button
        href="/portfolio"
        label="check my porftolio"
        className="lg:hidden"
      />

      <Footer />
    </>
  )
}
