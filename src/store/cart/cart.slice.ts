import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartInitialState, ICartItem } from './cart.types'
import toast from 'react-hot-toast'
import { toastSuccess } from '@/app/assets/toast-styles'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItem>) => {
			const isExist = state.items.some(item => item.id === action.payload.id)
			if (!isExist) {
				toast.success('Книга добавлена в корзину', toastSuccess)
				state.items.push({ ...action.payload, id: state.items.length })
			}
		},

		incrementCount: (state, action: PayloadAction<number>) => {
			state.items.map(item => {
				if (item.id === action.payload) {
					const count = item.quantity + 1 < 10 ? item.quantity++ : item.quantity
					return { ...item, quantity: count }
				}
			})
		},

		decrementCount: (state, action: PayloadAction<number>) => {
			state.items.map(item => {
				if (item.id === action.payload) {
					const count = item.quantity > 1 ? item.quantity-- : item.quantity
					return { ...item, quantity: count }
				}
			})
		},

		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		},

		reset: state => {
			state.items = []
		}
	}
})
