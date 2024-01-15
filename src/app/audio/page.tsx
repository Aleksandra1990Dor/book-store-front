import type { Metadata } from 'next'
import booksService from '@/services/books.service'
import AllAudioBooks from './AudioBooks'
import { IBook } from '@/types/books.types'

export const metadata: Metadata = {
	title: 'АудиоКниги'
}

export const revalidate = 60

export async function getAudioBooks(): Promise<IBook[]> {
	const books = await booksService.getAll({
		searchTerm: ''
	})

	return books
}

export default async function AudioPage() {
	const books = await getAudioBooks()
	return <AllAudioBooks books={books} />
}
