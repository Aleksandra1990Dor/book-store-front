import booksService from '@/services/books.service'
import categoryService from '@/services/category.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import type { Metadata } from 'next'
import SingleCategory from '../../../components/screens/Categories/SingleCategory'
import { convertMetaUrl } from '@/utils/convert-meta-url'
import { IBook } from '@/types/books.types'

export const revalidate = 60

type PageProps = {
	params: { slug: string }
}

export async function generateStaticParams() {
	const categories = await categoryService.getAll()

	const paths = categories.map(category => ({ slug: category.slug }))

	return paths
}

export async function getCategoryBooks({
	params
}: PageProps): Promise<IBook[]> {
	const booksByCategory = await booksService.byCategorySlug(
		params?.slug as string
	)

	return booksByCategory
}

export async function generateMetadata({
	params
}: PageProps): Promise<Metadata> {
	const booksByCategory = await getCategoryBooks({ params })

	return {
		title: booksByCategory[0].category.name,
		description: `Random description about ${booksByCategory[0].category.name}`,
		openGraph: {
			images: convertMetaUrl(booksByCategory[0].images) || []
		}
	}
}

export default async function SingleCategoryPage({ params }: PageProps) {
	const books = await getCategoryBooks({ params })
	return <SingleCategory books={books} />
}
