import booksService from '@/services/books.service'
import categoryService from '@/services/category.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import type { Metadata } from 'next'
import SingleCategory from '../../../components/screens/Categories/SingleCategory'
import { convertMetaUrl } from '@/utils/convert-meta-url'

export const revalidate = 60

export async function generateStaticParams() {
	const categories = await categoryService.getAll()

	const paths = categories.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	return paths
}

export async function getCategoryBooks(params: TypeParamSlug) {
	const booksByCategory = await booksService.byCategorySlug(
		params?.slug as string
	)

	return booksByCategory
}

export async function generateMetadata({
	params
}: IPageSlugParam): Promise<Metadata> {
	const booksByCategory = await getCategoryBooks(params)

	return {
		title: booksByCategory[0].category.name,
		description: `Random description about ${booksByCategory[0].category.name}`,
		openGraph: {
			images: convertMetaUrl(booksByCategory[0].images) || []
		}
	}
}

export default async function SingleCategoryPage({ params }: IPageSlugParam) {
	const books = await getCategoryBooks(params)
	return <SingleCategory books={books} />
}
