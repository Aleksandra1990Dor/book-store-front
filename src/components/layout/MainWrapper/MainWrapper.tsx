import Table from '@/components/ui/design-elements/table/Table'
import Gallery from '@/components/ui/gallery/Gallery'
import styles from './MainWrapper.module.scss'
import { type FC, type PropsWithChildren } from 'react'
import booksService from '@/services/books.service'
import { IBook } from '@/types/books.types'

export async function getBooks(): Promise<IBook[]> {
	const books = await booksService.getAll({})

	return books
}

const MainWrapper: FC<PropsWithChildren> = async ({ children }) => {
	const books = await getBooks()

	return (
		<>
			{children}
			<div className={styles.tableWrapper}>
				<Table />
				<div className={styles.booksWrapper}>
					<Gallery
						title="Новейшие Бестселлеры"
						books={books}
						defaultLastIndex={3}
						indexInterval={4}
					/>
				</div>
			</div>
		</>
	)
}

export default MainWrapper
