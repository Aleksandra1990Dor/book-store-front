import { IAuthor } from '../types/books.types'
import { axiosClassic } from '@/api/api.interceptor'
import { getAuthorsServerUrl } from '@/config/server-url.config'

class AuthorService {
	async getAll() {
		const data = await axiosClassic<IAuthor[]>(getAuthorsServerUrl(''))
		return data.data
	}

	async mostPopular() {
		const data = await axiosClassic<IAuthor[]>(
			getAuthorsServerUrl('/most-popular')
		)
		return data.data[0]
	}

	async bySlug(slug: string) {
		const data = await axiosClassic.get<IAuthor>(
			getAuthorsServerUrl(`/by-slug/${slug}`)
		)

		return data.data
	}
}

export default new AuthorService()
