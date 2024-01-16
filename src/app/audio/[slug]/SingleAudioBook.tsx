'use client'

import Button from '@/components/ui/button/Button'
import MainBook from '@/components/ui/design-elements/main-book/MainBook'
import BookRating from '@/components/ui/rating/BookRating'
import { IBook } from '@/types/books.types'
import { useState, type FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import { convertPrice } from '@/utils/convert-price'
import BreadCrumbs from '@/components/ui/bread-crumbs/BreadCrumbs'
import { getAudioBreadCrumbs } from '@/utils/get-bread-crumbs'
import AudioCard from '@/components/ui/cards/AudioCard'
import { useCart } from '@/hooks/useCart'
import styles from '../../books/[slug]/SingleBook.module.scss'
import Table from '@/components/ui/design-elements/table/Table'
import { IoMdClose } from 'react-icons/io'

const SingleBook: FC<{ book: IBook }> = ({ book }) => {
	const [isShown, setIsShown] = useState(false)
	const { handleAddToCart } = useCart()

	return (
		<div className={cn(styles.wrapper, 'mb-4', gentium.className)}>
			<BreadCrumbs items={getAudioBreadCrumbs(book)} />
			{/* main */}
			<div className={styles.container}>
				{/* right-side book */}
				<div>
					<div className="flex gap-1 justify-between">
						<div className={styles.singleBook}>
							<MainBook book={book} />
						</div>
						<div className="lg:hidden flex flex-col gap-0.5 justify-center h-full">
							<div className="text-lg text-gray leading-none">
								{book.author.fullName}
							</div>
							<h2 className="font-bold text-brown text-1.5xl underline leading-none mb-0.5">
								{book.name}
							</h2>
							<div className="flex flex-col gap-1">
								<div className="text-black text-1.5xl leading-none font-bold">
									{convertPrice(book.price)}
								</div>
								<div className="flex items-center gap-0.5">
									<Button
										size="small"
										text="В корзину"
										variant="color"
										onClick={() => handleAddToCart(book)}
									/>
									<Button
										size="small"
										text="Слушать"
										variant="color"
										onClick={() => setIsShown(true)}
									/>
								</div>
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
						<Button
							size="large"
							text="Слушать"
							variant="color"
							onClick={() => setIsShown(true)}
						/>
					</div>
				</div>
			</div>
			{isShown && (
				<div className="absolute bottom-6 right-4 lg:bottom-2 lg:right-2 z-3">
					<div className="relative">
						<button
							onClick={() => setIsShown(false)}
							className="absolute -top-0.5 -right-0.5 z-3"
						>
							<IoMdClose className="texl-lg lg:text-base fill-gray opacity-60 hover:opacity-100 hover:scale-105 transition-transform duration-200" />
						</button>
						<AudioCard audioBook={book} />
					</div>
				</div>
			)}
		</div>
	)
}

export default SingleBook
