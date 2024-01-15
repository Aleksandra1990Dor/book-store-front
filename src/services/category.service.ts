import { axiosClassic } from '@/api/api.interceptor'
import { getCategoryServerUrl } from '@/config/server-url.config'
import { ICategory } from '@/types/category.types'

class CategoryService {
	async getAll(): Promise<ICategory[]> {
		const data = await axiosClassic<ICategory[]>(getCategoryServerUrl(''))
		return data.data
	}
}

const categoryService = new CategoryService()
export default categoryService
