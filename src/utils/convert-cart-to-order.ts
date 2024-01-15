import { ICartItem } from '@/store/cart/cart.types'
import { IOrder } from '@/types/order.types'

export const convertCartItemsToOrder = (items: ICartItem[]): IOrder => {
	return {
		orders: items.map(item => ({
			productId: item.book.id,
			quantity: item.quantity,
			price: item.price
		}))
	}
}
