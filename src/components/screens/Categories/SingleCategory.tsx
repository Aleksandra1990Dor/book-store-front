import { IBook } from '@/types/books.types'
import type { FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import BooksList from '@/components/ui/books-list/BooksList'
import BreadCrumbs from '@/components/ui/bread-crumbs/BreadCrumbs'
import { getCategoryBreadCrumbs } from '@/utils/get-bread-crumbs'

const SingleCategory: FC<{ books: IBook[] }> = ({ books }) => {
	return (
		<div className={cn('pb-3 px-2', gentium.className)}>
			<BreadCrumbs items={getCategoryBreadCrumbs(books[0])} />
			<div className="px-2">
				<h2 className="font-bold text-black text-xl leading-none mb-2">
					{books[0].category.name}:
				</h2>
				<div className="flex items-center">
					<BooksList books={books} />
				</div>
			</div>
		</div>
	)
}

export default SingleCategory
