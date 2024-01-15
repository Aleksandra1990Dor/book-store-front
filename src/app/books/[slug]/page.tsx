import type { Metadata } from 'next'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import booksService from '@/services/books.service'
import SingleBook from './SingleBook'
import { convertMetaUrl } from '@/utils/convert-meta-url'
import { IBook } from '@/types/books.types'

export const revalidate = 60

export async function generateStaticParams() {
	const books = await booksService.getAll({})

	const paths = books.map(book => {
		return {
			params: { slug: book.slug }
		}
	})

	return paths
}

async function getBook(params: TypeParamSlug): Promise<IBook> {
	const book = await booksService.bySlug(params?.slug as string)

	return book
}

export async function generateMetadata({
	params
}: IPageSlugParam): Promise<Metadata> {
	const book = await getBook(params)

	return {
		title: book.name,
		description: `Random description about ${book.name}`,
		openGraph: {
			images: convertMetaUrl(book?.images) || [],
			description: book.description
		}
	}
}

export default async function SingleBookPage({ params }: IPageSlugParam) {
	const book = await getBook(params)

	return <SingleBook book={book} />
}
