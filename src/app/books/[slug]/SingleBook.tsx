'use client'

import Button from '@/components/ui/button/Button'
import MainBook from '@/components/ui/design-elements/main-book/MainBook'
import BookRating from '@/components/ui/rating/BookRating'
import { IBook } from '@/types/books.types'
import type { FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import { convertPrice } from '@/utils/convert-price'
import BreadCrumbs from '@/components/ui/bread-crumbs/BreadCrumbs'
import { getBookBreadCrumbs } from '@/utils/get-bread-crumbs'
import { useCart } from '@/hooks/useCart'
import styles from './SingleBook.module.scss'
import Table from '@/components/ui/design-elements/table/Table'

const SingleBook: FC<{ book: IBook }> = ({ book }) => {
	const { handleAddToCart } = useCart()

	return (
		<div className={cn(styles.wrapper, gentium.className)}>
			<BreadCrumbs items={getBookBreadCrumbs(book)} />
			{/* main */}
			<div className={styles.container}>
				{/* right-side book */}
				<div>
					<div className="flex gap-1 justify-between">
						<div className={styles.singleBook}>
							<MainBook book={book} />
						</div>
						<div className={styles.mobileDescription}>
							<div className="text-lg text-gray">{book.author.fullName}</div>
							<h2 className="font-bold text-brown text-1.5xl underline leading-none mb-0.5">
								{book.name}
							</h2>
							<div className="flex items-center gap-0.5">
								<div className="text-black text-1.5xl font-bold">
									{convertPrice(book.price)}
								</div>
								<Button
									size="large"
									text="В корзину"
									variant="color"
									onClick={() => handleAddToCart(book)}
								/>
							</div>
						</div>
					</div>
					<div className={styles.mobileTable}>
						<Table />
					</div>
				</div>
				{/* left-side description */}
				<div className={styles.info}>
					<div className={styles.authorDesc}>{book.author.fullName}</div>
					<h2 className={styles.titleDesc}>{book.name}</h2>
					<BookRating />
					<p className={styles.description}>{book.description}</p>
					<div className={styles.addToCart}>
						<div className="text-black text-xl font-bold">
							{convertPrice(book.price)}
						</div>
						<Button
							size="large"
							text="В корзину"
							variant="color"
							onClick={() => handleAddToCart(book)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleBook
