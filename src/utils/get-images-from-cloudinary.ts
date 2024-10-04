import getBase64ImageUrl from './generate-blur-placeholder'
import { ImageProps } from './types'

export async function getImagesFromCloudinary(
  folderName: string,
): Promise<ImageProps[]> {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`,
          ).toString('base64')}`,
        },
        body: JSON.stringify({
          expression: `folder:${folderName}/*`,
          max_results: 24,
        }),
        next: {
          revalidate: 60,
        },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const results = await response.json()
    // console.log('Cloudinary Response:', results)

    const reducedResults: ImageProps[] = results.resources.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result: any, index: number) => ({
        id: index,
        height: result.height.toString(),
        width: result.width.toString(),
        public_id: result.public_id,
        format: result.format,
      }),
    )

    const blurImagePromises = reducedResults.map((image: ImageProps) =>
      getBase64ImageUrl(image),
    )
    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

    return reducedResults.map((image, index) => ({
      ...image,
      blurDataUrl: imagesWithBlurDataUrls[index],
    }))
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error)
    return []
  }
}
