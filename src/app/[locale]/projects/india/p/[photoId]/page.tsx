import { getImagesFromCloudinary } from '@/utils/get-images-from-cloudinary'
import { ImageProps } from '@/utils/types'
import Carousel from '@/components/carousel'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface PageProps {
  params: {
    photoId: string
  }
}

const getCurrentPhoto = async (photoId: string): Promise<ImageProps | null> => {
  const images = await getImagesFromCloudinary('india')
  return images.find((img) => img.id === Number(photoId)) || null
}

const ImagePage = async ({ params }: PageProps) => {
  const { photoId } = params
  const currentPhoto = await getCurrentPhoto(photoId)

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
