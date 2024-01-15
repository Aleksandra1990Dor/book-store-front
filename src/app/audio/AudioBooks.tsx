'use client'
import { gentium } from '@/app/assets/fonts'
import type { FC } from 'react'
import cn from 'clsx'
import BooksList from '@/components/ui/books-list/BooksList'
import { IBook } from '@/types/books.types'
import { usePagination } from '@/components/ui/paginatioin/usePagination'
import Pagination from '@/components/ui/paginatioin/Pagination'
import AudioBook from '@/components/ui/books-list/AudioBook'

const AllAudioBooks: FC<{ books: IBook[] }> = ({ books }) => {
	const { isPaginated, items, onClick } = usePagination(3, 6, books)

	return (
		<div className={cn('pt-1 pb-4 px-4', gentium.className)}>
			<h2 className="font-bold text-black text-xl leading-none mb-2">
				Аудио Книги:
			</h2>
			<div className="flex gap-2 px-2 flex-wrap">
				{items.map(book => (
					<AudioBook book={book} key={book.id} />
				))}
			</div>
			<Pagination isPaginated={isPaginated} onClick={onClick} />
		</div>
	)
}

export default AllAudioBooks
