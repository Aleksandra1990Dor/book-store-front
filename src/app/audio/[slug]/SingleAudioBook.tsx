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

const SingleBook: FC<{ book: IBook }> = ({ book }) => {
	const [isShown, setIsShown] = useState(false)
	const { handleAddToCart } = useCart()

	return (
		<div className={cn('px-2 mb-4', gentium.className)}>
			<BreadCrumbs items={getAudioBreadCrumbs(book)} />
			{/* main */}
			<div className="grid px-2" style={{ gridTemplateColumns: '35% 1fr' }}>
				{/* right-side book */}
				<div className="relative ml-2 h-14 w-full">
					<button onClick={() => setIsShown(false)}>
						<MainBook book={book} />
					</button>
					<div className="absolute top-2 left-1 z-3">
						{isShown && <AudioCard audioBook={book} />}
					</div>
				</div>
				{/* left-side description */}
				<div className="flex gap-0.3 flex-col px-2">
					<div className="text-sm text-gray">{book.author.fullName}</div>
					<h2 className="font-bold text-brown text-xl underline leading-none mb-0.5">
						{book.name}
					</h2>
					<BookRating />
					{/* description */}
					<p className="my-0.5 text-black text-base">{book.description}</p>
					{/* add to card block */}
					<div className="flex items-center gap-1 ">
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
		</div>
	)
}

export default SingleBook
