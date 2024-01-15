import type { FC } from 'react'
import GalleryItem from '../gallery/GalleryItem'
import { IBook } from '@/types/books.types'

const BooksList: FC<{ books: IBook[] }> = ({ books }) => {
	return (
		<div className="flex flex-wrap gap-y-1 gap-x-2 px-2">
			{books.map(book => (
				<GalleryItem book={book} key={book.id} className="h-max" />
			))}
		</div>
	)
}

export default BooksList
