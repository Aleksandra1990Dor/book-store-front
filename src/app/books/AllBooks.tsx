'use client'
import { gentium } from '@/app/assets/fonts'
import type { FC } from 'react'
import cn from 'clsx'
import BooksList from '@/components/ui/books-list/BooksList'
import { IBook } from '@/types/books.types'
import { usePagination } from '@/components/ui/paginatioin/usePagination'
import Pagination from '@/components/ui/paginatioin/Pagination'

const AllBooks: FC<{ books: IBook[] }> = ({ books }) => {
	const { isPaginated, items, onClick } = usePagination(6, 6, books)

	return (
		<div className={cn('pt-1 lg:pb-2 px-2 lg:px-4', gentium.className)}>
			<h2 className="font-bold text-black text-xl leading-none mb-2">Книги:</h2>
			<BooksList books={items || []} />
			<Pagination isPaginated={isPaginated} onClick={onClick} />
		</div>
	)
}

export default AllBooks
