import { ICategory } from '@/types/category.types'
import type { FC } from 'react'
import Book from '@/components/ui/design-elements/book/Book'
import Link from 'next/link'
import { getCategoryUrl } from '@/config/url.config'
import styles from './AllCategories.module.scss'

const AllCategoryItem: FC<{ category: ICategory }> = ({ category }) => {
	return (
		<Link className={styles.item} href={getCategoryUrl(`/${category.slug}`)}>
			<Book size="small" src={category.books[0].images[0]} />
			<h3>{category.name}</h3>
		</Link>
	)
}

export default AllCategoryItem
