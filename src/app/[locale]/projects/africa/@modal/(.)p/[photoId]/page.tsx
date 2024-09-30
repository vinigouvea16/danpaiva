import Modal from '@/components/modal'
import { getImagesFromCloudinary } from '@/utils/get-images-from-cloudinary'
import { ImageProps } from '@/utils/types'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    photoId: string
  }
}

// Helper function to get the current image by ID
const getCurrentPhoto = async (
  photoId: string,
  images: ImageProps[],
): Promise<ImageProps | null> => {
  return images.find((img) => img.id === Number(photoId)) || null
}

export default async function ModalPage({ params }: PageProps) {
  const { photoId } = params
  const project = 'africa'
  const images = await getImagesFromCloudinary(project)
  const currentImage = await getCurrentPhoto(photoId, images)

  if (!currentImage) {
    notFound()
  }

  // Pass the `project` prop to the `Modal` component
  return <Modal images={images} currentImage={currentImage} project={project} />
}
