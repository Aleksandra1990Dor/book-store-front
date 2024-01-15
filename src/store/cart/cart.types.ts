import { IBook } from '@/types/books.types'

export interface ICartItem {
	id: number
	book: IBook
	quantity: number
	price: number
}

export interface ICartInitialState {
	items: ICartItem[]
}
