import type { FC } from 'react'
import booksService from '@/services/books.service'
import authorService from '@/services/author.service'
import Landing from '@/components/screens/Landing/Landing'
import MobileHome from '@/components/layout/MainWrapper/MobileHome'

export const validate = 60

async function getBooks() {
	const books = await booksService.getAll({})
	const author = await authorService.mostPopular()
	const audioBook = await booksService.getMostPopularAudio()

	return { books, author, audioBook }
}

const HomePage: FC = async () => {
	const { books, author, audioBook } = await getBooks()

	return (
		<MobileHome>
			<Landing books={books} author={author} audioBook={audioBook} />
		</MobileHome>
	)
}

export default HomePage
