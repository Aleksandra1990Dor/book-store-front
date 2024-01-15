import type { FC } from 'react'
import Book from '../book/Book'
import { IBook } from '@/types/books.types'
import styles from './MainBook.module.scss'

const MainBook: FC<{ book: IBook }> = ({ book }) => {
	return (
		<div className={styles.mainBook}>
			<Book size="large" src={book?.images[0]} />
		</div>
	)
}

export default MainBook
