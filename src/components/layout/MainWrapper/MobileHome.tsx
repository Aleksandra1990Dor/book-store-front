import AudioBooksMobile from '@/components/screens/AudioBooks/AudioBooksMobile'
import AuthorsMobile from '@/components/screens/Authors/AuthorsMobile'
import Table from '@/components/ui/design-elements/table/Table'
import authorService from '@/services/author.service'
import booksService from '@/services/books.service'
import { ENUM_SEARCH } from '@/types/sort.types'
import type { FC, PropsWithChildren } from 'react'

export async function getBooks() {
	const books = await booksService.getAll({
		sort: ENUM_SEARCH.AUDIO,
		searchTerm: ''
	})
	const authors = await authorService.getAll()

	return { books, authors }
}

const MobileHome: FC<PropsWithChildren> = async ({ children }) => {
	const { authors, books } = await getBooks()
	const popularAuthors = authors.filter(author => author._count.books > 1)
	return (
		<>
			{children}
			<div className="relative">
				<Table />
				<AudioBooksMobile books={books} />
				<AuthorsMobile authors={popularAuthors} title="Популярные авторы" />
			</div>
		</>
	)
}

export default MobileHome
