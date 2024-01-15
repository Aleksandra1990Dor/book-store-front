import type { Metadata } from 'next'
import authorService from '@/services/author.service'
import AllAuthors from './AllAuthors'

export const metadata: Metadata = {
	title: 'Популярные авторы'
}

export const revalidate = 60

export async function getAuthors() {
	const authors = await authorService.getAll()

	return authors
}

export default async function AllAuthorsPage() {
	const authors = await getAuthors()
	return <AllAuthors authors={authors} />
}
