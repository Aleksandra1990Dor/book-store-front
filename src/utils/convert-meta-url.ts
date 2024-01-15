import { getImageUrl } from '@/config/image-url.config'

export const convertMetaUrl = (images: string[]): string[] => {
	return images.map(img => getImageUrl(img))
}
