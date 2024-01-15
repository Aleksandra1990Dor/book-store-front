'use client'
import type { FC } from 'react'
import { IBook } from '@/types/books.types'
import Link from 'next/link'
import Book from '@/components/ui/design-elements/book/Book'
import { getAudioUrl } from '@/config/url.config'
import BookRating from '@/components/ui/rating/BookRating'
import Button from '@/components/ui/button/Button'
import FavoriteButton from '../button/favorite-button/FavoriteButton'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'

const AudioBook: FC<{ book: IBook }> = ({ book }) => {
	const { user } = useAuth()
	const { handleAddToCart } = useCart()

	return (
		<div className="flex gap-0.5 w-12 h-max hover:scale-105 transition-transform duration-200 relative">
			<div>
				<Link href={getAudioUrl(`/${book.slug}`)}>
					<Book size="small" src={book.images[0]} />
				</Link>
			</div>
			<div className="flex flex-col gap-0.15 justify-between">
				<BookRating />
				<h3 className="text-wrap text-black font-bold text-sm leading-none">
					{book.name}
				</h3>
				<div className="text-gray font-medium text-sm leading-none">
					{book.author.fullName}
				</div>
				<Button
					text="Купить"
					size="small"
					variant="transparent"
					onClick={() => handleAddToCart(book)}
				/>
				{user && (
					<FavoriteButton
						bookId={book.id}
						className="top-0 right-0.5 z-3 hover:scale-105"
					/>
				)}
			</div>
		</div>
	)
}

export default AudioBook
