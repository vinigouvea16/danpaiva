import Modal from '@/components/modal'
import { getImagesFromCloudinary } from '@/utils/get-images-from-cloudinary'
import { ImageProps } from '@/utils/types'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    photoId: string
  }
}

const getCurrentPhoto = async (
  photoId: string,
  images: ImageProps[],
): Promise<ImageProps | null> => {
  return images.find((img) => img.id === Number(photoId)) || null
}

export default async function ModalPage({ params }: PageProps) {
  const { photoId } = params
  const images = await getImagesFromCloudinary('pantanal')
  const currentImage = await getCurrentPhoto(photoId, images)

  if (!currentImage) {
    notFound()
  }

  return <Modal images={images} currentImage={currentImage} />
}
