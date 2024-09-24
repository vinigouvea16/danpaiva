import { getImagesFromCloudinary } from '@/utils/get-images-from-cloudinary'
import { ImageProps } from '@/utils/types'
import Carousel from '@/components/carousel'
// import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface PageProps {
  params: {
    photoId: string
  }
}

const getCurrentPhoto = async (photoId: string): Promise<ImageProps | null> => {
  const images = await getImagesFromCloudinary('pantanal')
  // console.log('Fetched Images:', images)
  return images.find((img) => img.id === Number(photoId)) || null
}

const ImagePage = async ({ params }: PageProps) => {
  const { photoId } = params
  // console.log('Photo ID:', photoId)
  const currentPhoto = await getCurrentPhoto(photoId)
  console.log('Current Photo:', currentPhoto)

  if (!currentPhoto) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Suspense fallback={<p>Loading...</p>}>
        <Carousel currentPhoto={currentPhoto} index={0} />
      </Suspense>
    </main>
  )
}

export default ImagePage
