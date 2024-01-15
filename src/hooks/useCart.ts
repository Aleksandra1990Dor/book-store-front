import { IBook } from '@/types/books.types'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'
import { useMemo } from 'react'

export const useCart = () => {
	const cartItems = useTypedSelector(state => state.cart.items)
	const { addToCart, decrementCount, incrementCount, removeFromCart, reset } =
		useActions()

	const defaultSum = cartItems.reduce((prev, acc) => {
		return prev + acc.price * acc.quantity
	}, 0)

	const handleAddToCart = (book: IBook) => {
		const existedBook = cartItems.find(item => item.book.id === book.id)

		if (!existedBook)
			addToCart({
				book: book,
				quantity: 1,
				id: cartItems.length + 1,
				price: book.price
			})
	}

	return useMemo(
		() => ({
			handleAddToCart,
			cartItems,
			incrementCount,
			decrementCount,
			defaultSum,
			removeFromCart,
			reset
		}),
		[cartItems, defaultSum]
	)
}
