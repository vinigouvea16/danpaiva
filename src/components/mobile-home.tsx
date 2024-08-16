/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function MobileHome() {
  const [openSection, setOpenSection] = useState<number>(1)
  const [clickCount, setClickCount] = useState<number>(0)
  const router = useRouter()
  const handleSectionClick = useCallback(
    (section: number, href: string) => {
      setClickCount((prev) => {
        if (prev === 0) {
          setOpenSection(section)
          return 1
        } else {
          router.push(href)
          return 0
        }
      })
    },
    [router],
  )

  return (
    <div className="relative h-screen overflow-hidden flex flex-col lg:hidden">
      <div
        className={`relative transition-all duration-500 ease-in-out ${openSection === 1 ? 'h-[80%] lg:h-auto lg:w-1/2' : 'h-[20%] lg:h-full lg:w-1/2'}`}
        onClick={() => handleSectionClick(1, '/about')}
      >
        <Image
          src="/images/desktop/wildlife.jpg"
          fill
          className="object-cover"
          alt="bird picture"
          unoptimized={true}
        />
        <div className="absolute z-10 inset-0 flex flex-col top-[10%] bottom-[10%] justify-between items-center opacity-60 font-extrabold text-white group-hover:opacity-100 group-hover:text-amber-500">
          <div className="relative">
            <span>Daniel Ribeiro&apos;s take on the</span>
            <h1 className="text-5xl font-extrabold uppercase tracking-[0.25em] bg-black bg-opacity-0">
              wildlife
            </h1>
          </div>
          <h2 className="font-extrabold tracking-[5px] text-lg uppercase">
            photographic tour
          </h2>
        </div>
      </div>

      <div
        className={`relative transition-all duration-500 ease-in-out ${openSection === 2 ? 'h-[80%] lg:h-auto lg:w-1/2' : 'h-[20%] lg:h-full lg:w-1/2'}`}
        onClick={() => handleSectionClick(2, '/portfolio')}
      >
        <Image
          src="/images/desktop/wildlife2.jpg"
          fill
          className="object-cover"
          alt="monkey picture"
          unoptimized={true}
        />
        <div className="absolute z-10 inset-0 flex flex-col top-[10%] bottom-[10%] justify-between items-center opacity-60 font-extrabold text-white group-hover:opacity-100 group-hover:text-amber-500">
          <h3 className=" text-5xl font-extrabold uppercase tracking-[0.25em] bg-black bg-opacity-0">
            portfolio
          </h3>
          <h4 className="tracking-[5px] text-lg uppercase">expeditions</h4>
        </div>
      </div>
    </div>
  )
}
