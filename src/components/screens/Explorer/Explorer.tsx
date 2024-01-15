'use client'

import SearchField from '@/components/ui/SearchField/SearchField'
import Button from '@/components/ui/button/Button'
import GalleryItem from '@/components/ui/gallery/GalleryItem'
import { IBook } from '@/types/books.types'
import { type FC } from 'react'
import { searchTermData } from './searchTermData'
import { useExplorer } from './useExplorer'
import Loader from '@/components/ui/Loader'
import { FaAnglesDown } from 'react-icons/fa6'
import BooksList from '@/components/ui/books-list/BooksList'
import { usePagination } from '@/components/ui/paginatioin/usePagination'
import Pagination from '@/components/ui/paginatioin/Pagination'

interface IExplorer {
	books: IBook[]
}

const Explorer: FC<IExplorer> = ({ books }) => {
	const { data, handleUpdateQueryParams, queryParams, isLoading } =
		useExplorer(books)
	const { isPaginated, items, onClick } = usePagination(3, 6, data)

	return (
		<div className="p-2 flex flex-col gap-1">
			<div className="flex items-center gap-0.75 px-1.5">
				<SearchField />
				<div className="flex gap-0.3">
					{searchTermData.map(item => (
						<Button
							size="small"
							text={item[1]}
							variant={item[0] === queryParams.sort ? 'color' : 'transparent'}
							key={item[0]}
							onClick={() => handleUpdateQueryParams('sort', item[0])}
							disabled={item[0] === queryParams.sort}
						/>
					))}
				</div>
			</div>
			{/* if loading */}
			{isLoading ? (
				<div className="w-full h-10 flex items-center justify-center">
					<Loader />
				</div>
			) : // if data present
			!!items.length ? (
				<BooksList books={items} />
			) : (
				// if data absent
				<div className="w-full h-8 px-5 py-0.5 text-gray text-base">
					По вашему запросу ничего не найдено...
				</div>
			)}
			<Pagination isPaginated={isPaginated} onClick={onClick} />
		</div>
	)
}

export default Explorer
