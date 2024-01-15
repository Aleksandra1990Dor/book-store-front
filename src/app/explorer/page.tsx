import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import booksService from '@/services/books.service'
import Explorer from '@/components/screens/Explorer/Explorer'
import { IBook } from '@/types/books.types'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE
}

export const validate = 60

async function getBooks(): Promise<IBook[]> {
	const data = await booksService.getAll({})

	return data
}

export default async function Page() {
	const books = await getBooks()
	return <Explorer books={books} />
}
