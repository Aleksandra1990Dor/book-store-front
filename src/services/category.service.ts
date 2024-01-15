import { axiosClassic } from '@/api/api.interceptor'
import { getCategoryServerUrl } from '@/config/server-url.config'
import { ICategory } from '@/types/category.types'

class CategoryService {
	async getAll() {
		const data = await axiosClassic<ICategory[]>(getCategoryServerUrl(''))
		return data.data
	}
}

export default new CategoryService()
