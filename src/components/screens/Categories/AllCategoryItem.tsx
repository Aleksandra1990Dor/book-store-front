import { ICategory } from '@/types/category.types'
import type { FC } from 'react'
import Book from '@/components/ui/design-elements/book/Book'
import Link from 'next/link'
import { getCategoryUrl } from '@/config/url.config'

const AllCategoryItem: FC<{ category: ICategory }> = ({ category }) => {
	return (
		<Link
			className="flex flex-col items-center hover:scale-105 transition-transform duration-200 gap-0.5 text-light-brown hover:text-[#3e1e02]"
			href={getCategoryUrl(`/${category.slug}`)}
		>
			<Book size="small" src={category.books[0].images[0]} />
			<h3 className="font-bold  leading-none text-0.5-lg mb-0.5 z-3">
				{category.name}
			</h3>
		</Link>
	)
}

export default AllCategoryItem
