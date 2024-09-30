'use client'

import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import SharedModal from './shared-modal'
import useKeypress from '../utils/use-keypress'
import type { ImageProps } from '../utils/types'

interface ModalProps {
  images: ImageProps[]
  currentImage?: ImageProps
  onClose?: () => void
  project: string
}

export default function Modal({
  images,
  currentImage,
  onClose,
  project,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [curIndex, setCurIndex] = useState(
    images.findIndex((img) => img.id === currentImage?.id),
  )
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    setCurIndex(images.findIndex((img) => img.id === currentImage?.id))
  }, [currentImage, images])

  function closeModal() {
    onClose?.()
    router.back()
  }

  function changePhotoId(newVal: number) {
    if (newVal >= 0 && newVal < images.length) {
      setDirection(newVal > curIndex ? 1 : -1)
      setCurIndex(newVal)
      router.replace(`/projects/${project}/p/${images[newVal].id}`)
    }
  }

  useKeypress('ArrowRight', () => {
    if (curIndex + 1 < images.length) {
      changePhotoId(curIndex + 1)
    }
  })

  useKeypress('ArrowLeft', () => {
    if (curIndex > 0) {
      changePhotoId(curIndex - 1)
    }
  })

  return (
    <Dialog
      static
      open={true}
      onClose={closeModal}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={closeModal}
        navigation={true}
      />
    </Dialog>
  )
}
