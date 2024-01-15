import type { Metadata } from 'next'
import Cart from './Cart'

export const metadata: Metadata = {
	title: 'Корзина'
}

export default function CartPage() {
	return <Cart />
}
