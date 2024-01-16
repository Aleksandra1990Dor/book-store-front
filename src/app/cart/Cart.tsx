'use client'

import { useCart } from '@/hooks/useCart'
import { useState, type FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import CartItem from './CartItem'
import { convertPrice } from '@/utils/convert-price'
import Button from '@/components/ui/button/Button'
import { IoMdClose } from 'react-icons/io'
import CheckOrder from './CheckOrder'

const Cart: FC = () => {
	const {
		cartItems,
		decrementCount,
		incrementCount,
		defaultSum,
		removeFromCart,
		reset
	} = useCart()
	const [isNotificationShown, setIsNotificationShown] = useState(false)

	return (
		<div className={cn('pt-1 pb-2 px-2 lg:px-4', gentium.className)}>
			<div className="flex justify-between items-start">
				<h2 className="font-bold text-black text-2xl lg:text-xl leading-none mb-3">
					Корзина:
				</h2>
				{!!cartItems.length && (
					<button
						className="lg:text-0.5-base text-0.5-lg text-gray flex items-center leading-none gap-0.15 opacity-60 hover:opacity-100"
						onClick={() => reset()}
					>
						Очистить корзину
						<IoMdClose className="lg:text-0.5-base text-0.5-lg leading-none fill-gray" />
					</button>
				)}
			</div>
			{!cartItems.length ? (
				<div className="text-gray text-lg lg:text-base px-2 mb-4">
					Ваша корзина пуста...
				</div>
			) : (
				<div
					className="flex flex-col gap-5 lg:grid"
					style={{ gridTemplateColumns: '1fr 20%' }}
				>
					<div className="flex gap-2 lg:gap-2 justify-start flex-wrap">
						{cartItems.map(item => (
							<CartItem
								key={item.id}
								item={item}
								decrement={() => decrementCount(item.id)}
								increment={() => incrementCount(item.id)}
								remove={() => removeFromCart(item.id)}
							/>
						))}
					</div>
					<div className="flex flex-col items-center gap-1 py-2">
						<h3 className="text-black font-bold texl-xl lg:text-0.5-lg leading-none">
							Итого:
							<span className="text-2xl lg:text-xl text-brown underline ml-0.75">
								{convertPrice(defaultSum)}
							</span>
						</h3>
						<Button
							size="large"
							text="Оформить заказ"
							variant="color"
							onClick={() => setIsNotificationShown(true)}
						/>
					</div>
				</div>
			)}
			{isNotificationShown && (
				<CheckOrder
					cartItems={cartItems}
					defaultSum={defaultSum}
					setIsNotificationShown={setIsNotificationShown}
				/>
			)}
		</div>
	)
}

export default Cart
