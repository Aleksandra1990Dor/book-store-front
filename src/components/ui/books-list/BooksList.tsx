import type { FC } from 'react'
import GalleryItem from '../gallery/GalleryItem'
import { IBook } from '@/types/books.types'

const BooksList: FC<{ books: IBook[]; isAudio?: boolean }> = ({
	books,
	isAudio
}) => {
	return (
		<div className="flex flex-wrap gap-y-1 gap-x-0 lg:gap-x-2 lg:px-2 mb-2">
			{books.map(book => (
				<GalleryItem
					book={book}
					key={book.id}
					className="h-max"
					isAudio={isAudio}
				/>
			))}
		</div>
	)
}

export default BooksList
