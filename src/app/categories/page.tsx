import categoryService from '@/services/category.service'
import type { Metadata } from 'next'
import AllCategories from '../../components/screens/Categories/AllCategories'

export const metadata: Metadata = {
	title: 'Категории Книг'
}

export const revalidate = 60

export async function getCategories() {
	const categories = await categoryService.getAll()

	return categories
}

export default async function AllCategoriesPage() {
	const categories = await getCategories()
	return <AllCategories categories={categories} />
}
