import { gentium } from '@/app/assets/fonts'
import type { FC } from 'react'
import styles from './AudioBooksMobile.module.scss'
import cn from 'clsx'
import { IBook } from '@/types/books.types'
import Disc from '@/components/ui/design-elements/disc/Disc'
import BookRating from '@/components/ui/rating/BookRating'
import Link from 'next/link'
import { getAudioUrl } from '@/config/url.config'

const AudioBooksMobile: FC<{ books: IBook[] }> = ({ books }) => {
	return (
		<div className={cn(styles.wrapper, gentium.className)}>
			<h2>АудиоКниги</h2>

			<div className={styles.booksWrapper}>
				{books.slice(0, 3).map(book => (
					<AudioBookMobile key={book.id} book={book} />
				))}
			</div>
		</div>
	)
}

const AudioBookMobile: FC<{ book: IBook }> = ({ book }) => {
	return (
		<Link
			href={getAudioUrl(`/${book.slug}`)}
			className="flex gap-2 items-center bg-white rounded-3xl px-2 py-1"
		>
			<Disc src={book.images[0]} />

			<div className="flex flex-col gap-0.3">
				<div className="text-black text-lg font-bold leading-none">
					{book.name}
				</div>
				<div className="text-gray text-lg">{book.author.fullName}</div>
				<BookRating />
			</div>
		</Link>
	)
}

export default AudioBooksMobile
