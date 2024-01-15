'use client'
import { IAuthor } from '@/types/books.types'
import { type FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import AuthorCard from '@/components/ui/cards/AuthorCard'
import { usePagination } from '@/components/ui/paginatioin/usePagination'
import Pagination from '@/components/ui/paginatioin/Pagination'

const AllAuthors: FC<{ authors: IAuthor[] }> = ({ authors }) => {
	const { isPaginated, items, onClick } = usePagination(4, 4, authors)

	return (
		<div className={cn('pt-1 pb-2 px-4', gentium.className)}>
			<h2 className="font-bold text-black text-xl leading-none mb-2">
				Популярные авторы:
			</h2>
			<div className="flex gap-2 justify-evenly flex-wrap">
				{items.map(author => (
					<AuthorCard author={author} key={author.id} />
				))}
			</div>
			<Pagination isPaginated={isPaginated} onClick={onClick} />
		</div>
	)
}
export default AllAuthors
