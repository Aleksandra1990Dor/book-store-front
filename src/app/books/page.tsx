import type { Metadata } from 'next'
import AllBooks from '../books/AllBooks'
import booksService from '@/services/books.service'

export const metadata: Metadata = {
	title: 'Книги'
}

export const revalidate = 60

export async function getAllBooks() {
	const books = await booksService.getAll({})

	return books
}

export default async function AllBooksPage() {
	const books = await getAllBooks()
	return <AllBooks books={books} />
}
