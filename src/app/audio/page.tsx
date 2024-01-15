import type { Metadata } from 'next'
import booksService from '@/services/books.service'
import { ENUM_SEARCH } from '@/types/sort.types'
import AllAudioBooks from './AudioBooks'

export const metadata: Metadata = {
	title: 'АудиоКниги'
}

export const revalidate = 60

export async function getAudioBooks() {
	const books = await booksService.getAll({
		sort: ENUM_SEARCH.AUDIO,
		searchTerm: ''
	})

	return books
}

export default async function AudioPage() {
	const books = await getAudioBooks()
	return <AllAudioBooks books={books} />
}
