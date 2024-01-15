import { SERVER_URL } from '@/constants/constants'

export const getImageUrl = (url: string) => {
	const server = SERVER_URL?.replace('/api', '') as string
	return `${server}${url}`
}
