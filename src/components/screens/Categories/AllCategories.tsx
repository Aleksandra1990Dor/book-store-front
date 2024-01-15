import { ICategory } from '@/types/category.types'
import type { FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import AllCategoryItem from './AllCategoryItem'

const AllCategories: FC<{ categories: ICategory[] }> = ({ categories }) => {
	return (
		<div className={cn('pt-1 pb-3 px-4', gentium.className)}>
			<h2 className="font-bold text-black text-xl leading-none mb-2">
				Категории книг:
			</h2>
			<div className="flex gap-2 justify-evenly flex-wrap">
				{categories.map(category => (
					<AllCategoryItem key={category.id} category={category} />
				))}
			</div>
		</div>
	)
}

export default AllCategories
