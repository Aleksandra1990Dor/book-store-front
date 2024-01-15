import type { Metadata } from 'next'
import booksService from '@/services/books.service'
import SingleAudioBook from './SingleAudioBook'
import { ENUM_SEARCH } from '@/types/sort.types'
import { convertMetaUrl } from '@/utils/convert-meta-url'
import { IBook } from '@/types/books.types'

export const revalidate = 60

type PageProps = {
	params: { slug: string }
}

export async function generateStaticParams() {
	const books = await booksService.getAll({
		sort: ENUM_SEARCH.AUDIO,
		searchTerm: ''
	})

	const paths = books.map(book => ({ slug: book.slug }))

	return paths
}

async function getBook({ params }: PageProps): Promise<IBook> {
	const book = await booksService.bySlug(params?.slug as string)

	return book
}

export async function generateMetadata({
	params
}: PageProps): Promise<Metadata> {
	const book = await getBook({ params })

	return {
		title: book.name,
		description: `Random description about ${book.name}`,
		openGraph: {
			images: convertMetaUrl(book?.images) || [],
			description: book.description
		}
	}
}

export default async function SingleBookPage({ params }: PageProps) {
	const book = await getBook({ params })

	return <SingleAudioBook book={book} />
}
