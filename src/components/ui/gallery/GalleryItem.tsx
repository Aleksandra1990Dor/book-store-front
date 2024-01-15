'use client'
import type { FC } from 'react'
import styles from './Gallery.module.scss'
import cn from 'clsx'
import Book from '../design-elements/book/Book'
import BookRating from '../rating/BookRating'
import Button from '../button/Button'
import { IBook } from '@/types/books.types'
import Link from 'next/link'
import { getBookUrl } from '@/config/url.config'
import { useAuth } from '@/hooks/useAuth'
import FavoriteButton from '../button/favorite-button/FavoriteButton'
import { useCart } from '@/hooks/useCart'
import SkeletonLoader from '../design-elements/skeleton/SkeletonLoader'

type IGalleryItem = {
	lastIndex?: number
	onClick?: () => void
	index?: number
	book: IBook
	className?: string
}

const GalleryItem: FC<IGalleryItem> = ({
	lastIndex,
	onClick,
	index,
	book,
	className
}) => {
	const { user } = useAuth()
	const { handleAddToCart } = useCart()
	return (
		<div
			className={cn(styles.item, className, {
				[styles.margin]: !!lastIndex,
				'hover:scale-105 transition-transform duration-200':
					!!lastIndex && index !== lastIndex
			})}
		>
			{!!lastIndex && index === lastIndex ? (
				<button onClick={onClick}>
					<Book size="small" src={book.images[0]} className="rotate-12" />
				</button>
			) : (
				<Link href={getBookUrl(`/${book.slug}`)}>
					<Book size="small" src={book.images[0]} />
				</Link>
			)}

			<div
				className={cn(styles.itemContent, {
					'opacity-0': lastIndex && index === lastIndex
				})}
			>
				<BookRating />
				<h3 className="text-wrap text-black font-bold text-sm leading-none">
					{book.name}
				</h3>
				<div className="text-gray font-medium leading-none text-0.5-sm">
					{book.author.fullName}
				</div>
				<Button
					text="Купить"
					size="small"
					variant="transparent"
					onClick={() => handleAddToCart(book)}
				/>
				{user && !lastIndex && (
					<FavoriteButton
						bookId={book.id}
						className="top-0 -right-0.5 z-3 hover:scale-105"
					/>
				)}
			</div>
		</div>
	)
}

export default GalleryItem
