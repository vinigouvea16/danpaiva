// import Nav from '@/components/nav'
// import NavB from '@/components/navb'
// import Image from 'next/image'
// import Link from 'next/link'
// export default function Portfolio() {
//   return (
//     <>
//       <Nav />
//       <NavB />
//       {/* <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 h-screen"> */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 h-screen">
//         <Link
//           href="/projects/pantanal"
//           className="relative group flex items-center justify-center bg-gray-800"
//         >
//           <Image
//             src="/images/desktop/SNY07077.jpg"
//             fill
//             className="object-cover transform group-hover:brightness-75"
//             alt="Project 1"
//             // unoptimized={true}
//           />
//           <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
//             pantanal
//           </h3>
//         </Link>
//         <Link
//           href="/projects/himalaya"
//           className="relative group flex items-center justify-center bg-gray-800"
//         >
//           <Image
//             src="/images/desktop/SNY07486.jpg"
//             fill
//             className="object-cover group-hover:brightness-75"
//             alt="Project 2"
//             // unoptimized={true}
//           />
//           <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
//             himalaya
//           </h3>
//         </Link>
//         {/* <Link
//           href="/projects/india"
//           className="relative group flex items-center justify-center bg-gray-800"
//         >
//           <Image
//             src="/images/desktop/SNY04113.jpg"
//             fill
//             className="object-cover group-hover:brightness-75"
//             alt="Project 3"
//             // unoptimized={true}
//           />
//           <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
//             india
//           </h3>
//         </Link> */}
//         <Link
//           href="/projects/africa"
//           className="relative group flex items-center justify-center bg-gray-800"
//         >
//           <Image
//             src="/images/flamingo.jpg"
//             fill
//             className="object-cover group-hover:brightness-75"
//             alt="Project 4"
//             // unoptimized={true}
//           />
//           <h3 className="absolute bottom-[20%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
//             africa
//           </h3>
//         </Link>
//       </div>
//     </>
//   )
// }

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
          <h3 className="absolute bottom-[47%] xl:right-[5%] text-white opacity-60 text-4xl font-bold uppercase tracking-[10px] group-hover:text-amber-500 group-hover:opacity-100 transition-colors">
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
