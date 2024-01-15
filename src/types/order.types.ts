import { ICartItem } from '@/store/cart/cart.types'
import { IBook } from './books.types'

export type IOrderItem = {
	productId: number
	quantity: number
	price: number
}

export type IOrder = {
	orders: IOrderItem[]
}

export type IOrderItemResponse = {
	id: number
	quantity: number
	price: number
	product: IBook[]
}

export type IOrderResponse = {
	id: number
	createdAt: string
	status: string
	total: number
	items: IOrderItemResponse[]
}

export type IProfileOrder = {
	id: number
	createdAt: string
	total: number
}
