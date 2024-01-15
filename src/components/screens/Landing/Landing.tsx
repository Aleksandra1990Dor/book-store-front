import type { FC } from 'react'
import styles from './Landing.module.scss'
import SearchField from '@/components/ui/SearchField/SearchField'
import AudioCard from '../../ui/cards/AudioCard'
import AuthorCard from '../../ui/cards/AuthorCard'
import { gentium } from '@/app/assets/fonts'
import cn from 'clsx'
import { IAuthor, IBook } from '@/types/books.types'
import MainBook from '@/components/ui/design-elements/main-book/MainBook'
import Link from 'next/link'
import { getBookUrl } from '@/config/url.config'
import Book from '@/components/ui/design-elements/book/Book'
import { getImageUrl } from '@/config/image-url.config'

interface ILanding {
	books: IBook[]
	author: IAuthor
	audioBook: IBook
}

const Landing: FC<ILanding> = ({ books, author, audioBook }) => {
	return (
		<div className={styles.landing}>
			<div className={styles.titleWrapper}>
				<h1 className={gentium.className}>
					<span>Новинки и</span>
					<span>Популярное</span>
				</h1>
				<div className={cn(styles.subtitle, gentium.className)}>
					Исследуйте мир новых произведений авторов
				</div>
				<SearchField />
			</div>
			<div className={styles.desktopWrapper}>
				<div className={styles.mainBookWrapper}>
					<MainBook book={books[books.length - 1]} />
				</div>
				<AuthorCard author={author} title="Автор недели" />
				<AudioCard title="Недавно слушали" audioBook={audioBook} />
			</div>
			<div className={styles.mobileWrapper}>
				{/* <div className={styles.window}> */}
					{books.map(book => (
						<Link href={getBookUrl(`/${book.slug}`)} key={book.id}>
							<div className={styles.mainBookWrapper}>
								<MainBook book={book} />
							</div>
						</Link>
					))}
				{/* </div> */}
			</div>
		</div>
	)
}

export default Landing
