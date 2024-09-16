import Nav from '@/components/Nav'
import NavB from '@/components/NavB'
import Image from 'next/image'
import Link from 'next/link'
export default function Portfolio() {
  return (
    <>
      <Nav />
      <NavB />
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 h-screen">
        <Link
          href="/projects/pantanal"
          className="relative group flex items-center justify-center bg-gray-800"
        >
          <Image
            src="/images/desktop/pantanalHome.jpg"
            fill
            className="object-cover transform group-hover:brightness-75"
            alt="Project 1"
            // unoptimized={true}
          />
          <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
            pantanal
          </h3>
        </Link>
        <Link
          href="/projects/pantanal"
          className="relative group flex items-center justify-center bg-gray-800"
        >
          <Image
            src="/images/desktop/india.jpg"
            fill
            className="object-cover group-hover:brightness-75"
            alt="Project 2"
            // unoptimized={true}
          />
          <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
            himalaya
          </h3>
        </Link>
        <Link
          href="/projects/pantanal"
          className="relative group flex items-center justify-center bg-gray-800"
        >
          <Image
            src="/images/desktop/wildlife.jpg"
            fill
            className="object-cover group-hover:brightness-75"
            alt="Project 3"
            // unoptimized={true}
          />
          <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
            india
          </h3>
        </Link>
        <Link
          href="/projects/africa"
          className="relative group flex items-center justify-center bg-gray-800"
        >
          <Image
            src="/images/desktop/africa.jpg"
            fill
            className="object-cover group-hover:brightness-75"
            alt="Project 4"
            // unoptimized={true}
          />
          <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
            africa
          </h3>
        </Link>
      </div>
    </>
  )
}
