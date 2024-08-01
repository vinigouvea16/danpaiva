'use client'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
// import { images, titles, links } from './image-data'
import Link from 'next/link'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

// const images = [
//   '/images/wildlife.jpg',
//   '/images/pantanal.jpg',
//   '/images/africa.jpg',
//   '/images/himalaya.jpg',
// ]

// const titles = ['WILDLIFE', 'PANTANAL', 'AFRICA', 'HIMALAYA']

// const links = [
//   '/projects/project-one',
//   '/projects/project-two',
//   '/projects/project-three',
//   '/projects/project-four',
// ]

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const Example = () => {
  const mobileImages = [
    '/images/mobile/mobile-wildlife.jpg',
    '/images/mobile/pantanal.jpg',
    '/images/mobile/africa.jpg',
    '/images/mobile/himalaya.jpg',
    '/images/mobile/india.jpg',
  ]

  const desktopImages = [
    '/images/desktop/wildlife.jpg',
    '/images/desktop/pantanal.jpg',
    '/images/desktop/africa.jpg',
    '/images/desktop/himalaya.jpg',
    '/images/desktop/india.jpg',
  ]

  const titles = ['WILDLIFE', 'PANTANAL', 'AFRICA', 'HIMALAYA', 'INDIA']

  const links = [
    '/about',
    '/projects/pantanal',
    '/projects/africa',
    '/projects/himalaya',
    '/projects/india',
  ]

  const [[page, direction], setPage] = useState([0, 0])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500)
    }

    window.addEventListener('resize', handleResize)

    // Initial check
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const images = isMobile ? mobileImages : desktopImages
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-screen h-screen object-cover"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center h-12 text-white z-10 transform -translate-y-1/2 top-2/3">
          <div>
            {imageIndex === 0 && (
              <p className="text-left opacity-60">
                Daniel Ribeiro&apos;s take on the
              </p>
            )}
            <Link href={links[imageIndex]}>
              <h1 className="lg:text-[180px] text-5xl font-extrabold tracking-[0.25em] bg-black bg-opacity-0 opacity-60 hover:opacity-100 hover:text-amber-500">
                {titles[imageIndex]}
              </h1>
            </Link>
          </div>
        </div>
      </AnimatePresence>
      <div
        className="absolute rounded-full flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 right-3"
        onClick={() => paginate(1)}
      >
        <CaretRight size={32} color="#fcfcfc" />
      </div>
      <div
        className="absolute rounded-full flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 left-3"
        onClick={() => paginate(-1)}
      >
        <CaretLeft size={32} color="#fcfcfc" />
      </div>
    </>
  )
}

export default Example
