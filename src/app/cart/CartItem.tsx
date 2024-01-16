import Book from '@/components/ui/design-elements/book/Book'
import BookRating from '@/components/ui/rating/BookRating'
import { getBookUrl } from '@/config/url.config'
import Link from 'next/link'
import { memo, type FC } from 'react'
import CountButton from './CountButton'
import { ICartItem } from '@/store/cart/cart.types'
import { convertPrice } from '@/utils/convert-price'
import { IoMdClose } from 'react-icons/io'

interface ICartItemType {
	item: ICartItem
	increment: () => void
	decrement: () => void
	remove: () => void
}

const CartItem = memo(function CartItem({
	item,
	decrement,
	increment,
	remove
}: ICartItemType) {
	return (
		<div className="flex gap-2 lg:gap-0.5 w-full lg:w-12 h-max relative">
			<button onClick={remove} className="absolute -top-0.3 right-0">
				<IoMdClose className="text-lg lg:text-base fill-gray opacity-60 hover:opacity-100 hover:scale-105 transition-transform duration-200" />
			</button>
			<div>
				<Link href={getBookUrl(`/${item.book.slug}`)}>
					<Book size="small" src={item.book.images[0]} />
				</Link>
			</div>
			<div className="flex flex-col gap-0.15 lg:gap-0.5 justify-between">
				<BookRating />
				<h3 className="text-wrap text-black font-bold text-lg lg:text-sm leading-none">
					{item.book.name}
				</h3>
				<div className="text-gray font-medium text-0.5-lg lg:text-sm leading-none">
					{item.book.author.fullName}
				</div>
				<div className="flex items-center gap-0.75">
					<h3 className="text-brown font-bold text-2xl lg:text-0.5-lg leading-none">
						{convertPrice(item.price)}
					</h3>
					<CountButton
						count={item.quantity}
						decrement={decrement}
						increment={increment}
					/>
				</div>
			</div>
		</div>
	)
})

export default CartItem
