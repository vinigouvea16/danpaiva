'use client'
import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { images, titles, links } from './image-data' // Make sure to adjust the import path as needed
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

export const Example2 = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          className="relative w-screen h-screen bg-cover "
          style={{
            backgroundImage: `url(${images[imageIndex]})`,
          }}
          exit="exit"
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
        >
          <div className="absolute inset-0 flex flex-col text-left items-center justify-center text-white z-10 h-12 self-center">
            <p className="text-left">Daniel Ribeiro&apos;s take on the</p>
            <Link href={links[imageIndex]}>
              <h1 className="lg:text-[180px] text-5xl font-extrabold tracking-[0.25em] bg-black bg-opacity-0 opacity-60 ">
                {titles[imageIndex]}
              </h1>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
      <div
        className=" absolute bg-white rounded-full w-8 h-8 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 right-3"
        onClick={() => paginate(1)}
      >
        {'‣'}
      </div>
      <div
        className=" absolute bg-white rounded-full w-8 h-8 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 left-3 scale-[-1]"
        onClick={() => paginate(-1)}
      >
        {'‣'}
      </div>
    </>
  )
}

export default Example2
