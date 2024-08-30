import React from 'react'

export default function Footer() {
  return (
    <div
      id="footer"
      className="lg:flex lg:flex-row flex flex-col bg-black lg:h-96 py-20 border-t-2 border-b-2 mb-16 justify-around items-center lg:px-20 px-10 lg:gap-0 gap-10 border-white w-full text-center lg:text-start"
    >
      <div className="gap-8 flex flex-col">
        <h2 className="uppercase lg:text-8xl text-6xl font-bold">reach me</h2>
        <p className="uppercase text-xl opacity-60 font-normal pl-1 ">
          I would love to hear from you
          <br /> Let&apos;s work together
        </p>
      </div>
      <div className="border-2 border-white p-6 font-extrabold uppercase rounded-full flex justify-center align-middle items-center">
        <a href="#">danribeiropaiva@wildlife.com</a>
      </div>
    </div>
  )
}
