import Image from 'next/image'
import React from 'react'
// import heroImage from '../../../public/images/desktop/SNY06578.jpg'
import fotopaiva from '../../../public/images/desktop/image1.png'
import Nav from '@/components/nav'
import Button from '@/components/button'
import Footer from '@/components/footer'
import NavB from '@/components/navb'

export default function About() {
  return (
    <>
      <Nav />
      <NavB />
      {/* <div className="flex flex-col h-dvh bg-[url('/images/desktop/SNY06578.jpg')] bg-no-repeat bg-cover overflow-hidden"> */}
      <div
        id="hero"
        className="flex flex-col h-dvh items-start justify-between"
      >
        <Image
          src="/images/desktop/SNY06578.jpg"
          height={1080}
          width={1920}
          alt={'a picture of a bird'}
          // unoptimized={true}
          className="absolute w-screen h-screen object-cover"
        />
        <div
          id="text-hero"
          className="absolute flex flex-col left-[10%] lg:top-1/3 top-1/4"
        >
          <h1 className="text-6xl font-extrabold">
            Hello, <br /> I&apos;m Dann Paiva
          </h1>
          <p className="lg:text-3xl text-2xl w-2/3">
            a photographer who left the fashion world to pursue my true passion:
            <br />
            <span className="uppercase text-3xl font-extrabold tracking-widest text-amber-500">
              wildlife
            </span>
          </p>
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

      <div id="myStory" className="xl:h-dvh w-full">
        <div className="flex xl:px-32 py-24 px-2 gap-12 xl:gap-0 justify-between items-center xl:flex-row flex-col ">
          <div
            id="left-side"
            className="xl:w-1/2 gap-8 flex flex-col items-center xl:text-start text-center"
          >
            <span className="text-4xl font-light ">My Story</span>
            <p
              className="xl:text-lg font-light xl:leading-8 text-justify first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left"
            >
              I have always been passionate about illustrated art, and I hold a
              degree in Cinema from Savannah College of Art and Design in
              Georgia. After working in the fashion industry for a few years, I
              decided to follow my true calling: showcasing nature&apos;s raw
              beauty. Since then, I have been documenting the most incredible
              animals around the globe. It has been an honor to capture and
              share these extraordinary moments in the wilderness.
              <br />
              <br />
              As a Brazilian, my primary focus has been on the jaguars of the
              Pantanal. After experiencing the thrill of capturing these
              majestic animals in their natural habitat, I decided to become a
              certified guide, specializing in photographic safaris and private
              tours.
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
        id="banner"
        className="w-full h-32 bg-[#9FBE77] text-black uppercase hidden lg:flex justify-evenly align-middle items-center text-clamp-8xl mb-20"
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
