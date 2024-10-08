/* eslint-disable camelcase */
'use client'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { variants } from '../utils/animation-variants'
import type { ImageProps, SharedModalProps } from '../utils/types'
import { useRouter } from 'next/navigation'
import { range } from '@/utils/range'

export default function SharedModal({
  index,
  direction,
  images = [],
  currentPhoto,
  changePhotoId,
  navigation,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()

  const closeModal = () => {
    router.back()
  }

  const filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id),
  )

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1)
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1)
      }
    },
    trackMouse: true,
  })

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const currentImage = images?.[index] ?? currentPhoto
  const isPortrait =
    parseInt(currentImage?.height) > parseInt(currentImage?.width)

  return (
    <MotionConfig
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative z-50 flex aspect-[1/2] md:aspect-[3/2] w-full max-w-7xl 3xl:max-w-[100rem] items-center wide:h-full xl:taller-than-854:h-auto"
        {...handlers}
      >
        {/* Main image */}
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[1/2] md:aspect-[3/2] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImage?.public_id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    changePhotoId(index - 1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    changePhotoId(index + 1)
                  }
                }}
              >
                <Image
                  src={`https://res.cloudinary.com/${
                    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                  }/image/upload/c_fill,${navigation ? 'w_1280' : 'w_2560'},${
                    isPortrait ? 'ar_4:5' : 'ar_16:9'
                  },q_auto:best,f_auto,dpr_auto/${currentImage?.public_id}.${currentImage?.format}`}
                  width={navigation ? 1280 : 2560}
                  height={
                    navigation
                      ? isPortrait
                        ? 1600
                        : 853
                      : isPortrait
                        ? 2400
                        : 1280
                  }
                  priority
                  alt="Dann Paiva's photo"
                  onLoad={() => setLoaded(true)}
                  className="object-contain h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons + bottom nav bar */}
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          {/* Buttons */}
          {loaded && (
            <div className="relative aspect-[1/2] md:aspect-[3/2] max-h-full w-full">
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: 'translate3d(0, 0, 0)' }}
                      onClick={() => changePhotoId(index - 1)}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                  )}
                  {index + 1 < images?.length && (
                    <button
                      className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: 'translate3d(0, 0, 0)' }}
                      onClick={() => changePhotoId(index + 1)}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  )}
                </>
              )}
              <div className="absolute top-0 left-0 flex items-center gap-2 p-3 text-white">
                <button
                  onClick={() => closeModal()}
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
          {/* Bottom Nav bar */}
          {navigation && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mt-6 mb-6 flex aspect-[1/2] md:aspect-[3/2] h-14"
              >
                <AnimatePresence initial={false}>
                  {filteredImages?.map(({ public_id, format, id }) => (
                    <motion.button
                      initial={{
                        width: '0%',
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                        width: '100%',
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: '0%' }}
                      onClick={() => changePhotoId(id)}
                      key={id}
                      className={`${
                        id === index
                          ? 'z-20 rounded-md shadow shadow-black/50'
                          : 'z-10'
                      } ${id === 0 ? 'rounded-l-md' : ''} ${
                        id === images?.length - 1 ? 'rounded-r-md' : ''
                      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                    >
                      <Image
                        alt="small photos on the bottom"
                        width={180}
                        height={120}
                        className={`${
                          id === index
                            ? 'brightness-110 hover:brightness-110'
                            : 'brightness-50 contrast-125 hover:brightness-75'
                        } h-full transform object-cover transition`}
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
                      />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  )
}
