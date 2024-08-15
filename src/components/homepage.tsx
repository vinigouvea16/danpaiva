'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex lg:flex-row flex-col h-screen">
      <Link href="/about" className="flex-1 relative group">
        <Image
          src="/images/desktop/wildlife.jpg"
          fill
          className="object-cover"
          alt="bird picture"
          unoptimized={true}
        />
        <div className="absolute z-10 inset-0 flex opacity-60 flex-col top-[10%]  bottom-[10%] lg:justify-between items-center group-hover:opacity-100 group-hover:text-amber-500">
          <div className="relative">
            <span>Daniel Ribeiro&apos;s take on the</span>
            <h1 className="lg:text-[90px] text-5xl font-extrabold uppercase tracking-[0.25em] bg-black bg-opacity-0">
              wildlife
            </h1>
          </div>
          <h2 className="font-extrabold tracking-[5px] text-2xl uppercase lg:block hidden">
            photographic tour
          </h2>
        </div>
      </Link>

      <Link href="/portfolio" className="flex-1 relative group">
        <Image
          src="/images/desktop/wildlife2.jpg"
          fill
          className="object-cover"
          alt="monkey picture"
          unoptimized={true}
        />
        <div className="absolute z-10 inset-0 uppercase flex flex-col top-[10%]  bottom-[10%] lg:justify-between items-center opacity-60 font-extrabold group-hover:opacity-100 group-hover:text-amber-500">
          <h3 className="lg:text-[90px] pt-6 text-5xl font-extrabold tracking-[0.25em] bg-black bg-opacity-0">
            portfolio
          </h3>
          <h4 className="tracking-[5px] text-2xl lg:block hidden">
            expeditions
          </h4>
        </div>
      </Link>
    </div>
  )
}