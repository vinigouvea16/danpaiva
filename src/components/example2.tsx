'use client'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'

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

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Example = () => {
  const mobileImages = [
    '/images/mobile/wildlife.jpg',
    '/images/mobile/pantanal.jpg',
    '/images/mobile/africa.jpg',
    '/images/mobile/himalaya.jpg',
  ]

  const desktopImages = [
    '/images/desktop/wildlife.jpg',
    '/images/desktop/pantanal.jpg',
    '/images/desktop/africa.jpg',
    '/images/desktop/himalaya.jpg',
  ]

  const titles = ['WILDLIFE', 'PANTANAL', 'AFRICA', 'HIMALAYA']

  const links = [
    '/projects/project-one',
    '/projects/project-two',
    '/projects/project-three',
    '/projects/project-four',
  ]

  const [[page, direction], setPage] = useState([0, 0])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

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
        <motion.div
          key={page}
          style={{
            backgroundImage: `url(${images[imageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-screen h-screen"
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
          onContextMenu={(e) => e.preventDefault()} // Prevent right-click
        />
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div className="flex flex-col items-center text-left transform -translate-y-1/2 top-1/2">
            {imageIndex === 0 && (
              <p className="text-left">Daniel Ribeiro&apos;s take on the</p>
            )}
            <Link href={links[imageIndex]}>
              <h1 className="lg:text-[180px] text-5xl font-extrabold tracking-[0.25em] bg-black bg-opacity-0 opacity-60">
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
        <CaretRight size={48} color="#fcfcfc" />
      </div>
      <div
        className="absolute rounded-full flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 left-3"
        onClick={() => paginate(-1)}
      >
        <CaretLeft size={48} color="#fcfcfc" />
      </div>
    </>
  )
}

export default Example
