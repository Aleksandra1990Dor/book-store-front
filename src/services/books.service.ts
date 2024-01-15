import { axiosClassic } from '@/api/api.interceptor'
import { getBooksServerUrl } from '@/config/server-url.config'
import { IBook } from '@/types/books.types'
import { ISearchParams } from '@/types/sort.types'

class BookService {
	async getAll(params: ISearchParams) {
		const data = await axiosClassic.get<IBook[]>(getBooksServerUrl(''), {
			params: params
		})

		return data.data
	}

	async getMostPopularAudio() {
		const data = await axiosClassic.get<IBook[]>(
			getBooksServerUrl('/popular-audio')
		)

		return data.data[0]
	}

	async bySlug(slug: string) {
		const data = await axiosClassic.get<IBook>(
			getBooksServerUrl(`/by-slug/${slug}`)
		)

		return data.data
	}

	async byAuthor(id: number) {
		const data = await axiosClassic.get<IBook[]>(
			getBooksServerUrl(`/by-author/${id}`)
		)

		return data.data
	}

	async byCategorySlug(slug: string) {
		const data = await axiosClassic.get<IBook[]>(
			getBooksServerUrl(`/by-category/${slug}`)
		)

		return data.data
	}
}

export default new BookService()
