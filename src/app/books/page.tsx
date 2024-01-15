import type { Metadata } from 'next'
import AllBooks from '../books/AllBooks'
import booksService from '@/services/books.service'
import { IBook } from '@/types/books.types'

export const metadata: Metadata = {
	title: 'Книги'
}

export const revalidate = 60

export async function getAllBooks(): Promise<IBook[]> {
	const books = await booksService.getAll({})

	return books
}

export default async function AllBooksPage() {
	const books = await getAllBooks()
	return <AllBooks books={books} />
}
