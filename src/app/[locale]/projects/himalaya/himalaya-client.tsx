/* eslint-disable camelcase */
'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImageProps } from '@/utils/types'
import { useLastViewedPhoto } from '@/utils/use-last-viewed-photo'
import Modal from '@/components/modal'
import { useSearchParams } from 'next/navigation'

export default function HimalayaClient({ images }: { images: ImageProps[] }) {
  const searchParams = useSearchParams()
  const photoId = searchParams.get('photoId')
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return (
    <div className="mx-auto max-w-[1960px] p-4">
      {photoId && (
        <Modal
          images={images}
          onClose={() => setLastViewedPhoto(photoId)}
          currentImage={undefined}
          project={'himalaya'}
        />
      )}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 2xl:columns-4">
        {images.map(({ id, public_id, format, blurDataUrl }) => (
          <Link
            key={id}
            href={`/projects/himalaya/p/${id}`}
            shallow
            ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
            className="group relative mb-5 block w-full cursor-zoom-in"
          >
            <Image
              alt="Dann Paiva's photo"
              className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}
              blurDataURL={blurDataUrl}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
