import Nav from '@/components/nav'
import NavB from '@/components/navb'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <>
      <Nav />
      <NavB />
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] xl:grid-rows-[1fr_1fr] gap-2 h-screen">
        {/* Large Block (A) on desktop, same size on mobile */}
        <Link
          href="/projects/pantanal"
          className="relative group flex items-center justify-center bg-gray-800 xl:row-span-2"
        >
          <Image
            src="/images/desktop/oncas.jpg"
            fill
            className="object-cover transform group-hover:brightness-75"
            alt="Project 1"
            unoptimized={true}
          />
          <h3 className="absolute bottom-[20%] xl:bottom-[48%] xl:right-[5%] text-white opacity-75 xl:opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
            pantanal
          </h3>
        </Link>

        {/* Small Block (B) */}
        <Link
          href="/projects/india"
          className="relative group flex items-center justify-center bg-gray-800"
        >
          <Image
            src="/images/desktop/snowmeow.jpg"
            fill
            className="object-cover group-hover:brightness-75"
            alt="Project 2"
          />
          <h3 className="absolute bottom-[20%] xl:right-[5%] text-black opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
            India
          </h3>
        </Link>

        {/* Small Block (C) */}
        <Link
          href="/projects/africa"
          className="relative group flex items-center justify-center bg-gray-800"
        >
          <Image
            src="/images/desktop/lion.jpg"
            fill
            className="object-cover group-hover:brightness-75"
            alt="Project 4"
          />
          <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
            africa
          </h3>
        </Link>
      </div>
    </>
  )
}
