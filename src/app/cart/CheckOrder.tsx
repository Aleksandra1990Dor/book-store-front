import Button from '@/components/ui/button/Button'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/store/cart/cart.types'
import { convertPrice } from '@/utils/convert-price'
import { useRouter } from 'next/navigation'
import { useState, type FC } from 'react'
import { IoMdClose } from 'react-icons/io'
import { usePlaceOrder } from './usePlaceOrder'
import { useAuth } from '@/hooks/useAuth'
import { isPending } from '@reduxjs/toolkit'
import Loader from '@/components/ui/Loader'

interface ICheckOrder {
	setIsNotificationShown: (arg: boolean) => void
	defaultSum: number
	cartItems: ICartItem[]
}

const CheckOrder: FC<ICheckOrder> = ({
	cartItems,
	defaultSum,
	setIsNotificationShown
}) => {
	const { push } = useRouter()
	const { isAccepted, mutateAsync, orderID, isPending } = usePlaceOrder()
	const { user } = useAuth()

	if (!user) push('/auth')

	return (
		<div className="fixed w-screen h-screen overflow-hidden bg-shadow top-0 left-0 z-30 flex justify-center items-center">
			<div className="bg-bg-color border border-brown p-2 flex flex-col gap-0.5 rounded-xl z-40 text-black relative">
				<button
					onClick={() => setIsNotificationShown(false)}
					className="absolute top-1 right-1"
				>
					<IoMdClose className="text-base fill-gray opacity-60 hover:opacity-100 hover:scale-105 transition-transform duration-200" />
				</button>
				<h3 className="text-0.5-lg font-bold ">Подтверждение заказа:</h3>
				{isAccepted ? (
					<div className="flex flex-col items-center gap-1 text-black text-0.5-base">
						{isPending ? (
							<Loader className="mt-1" />
						) : (
							<>
								<p>
									Ваш заказ
									<span className="text-gray text-0.5-lg underline px-0.3">
										#{orderID}
									</span>
									успешно оформлен!
								</p>
								<Button
									size="small"
									text="Понятно"
									variant="color"
									onClick={() => push('/')}
								/>
							</>
						)}
					</div>
				) : (
					<>
						<div className="flex flex-col gap-0.3 text-sm">
							{cartItems.map(item => (
								<div key={item.id} className="flex gap-1 justify-between">
									<h4 className="underline">{item.book.name}</h4>
									<div>{item.quantity} шт.</div>
								</div>
							))}
						</div>
						<div className="text-0.5-base">
							на сумму
							<span className="text-lg ml-0.5 font-bold">
								{convertPrice(defaultSum)}
							</span>
						</div>
						<div className="flex flex-col w-full items-center gap-0.75 mt-0.75">
							<Button
								size="small"
								text="Подтвердить"
								variant="color"
								onClick={() => mutateAsync()}
							/>
							<div className="underline text-sm w-max uppercase text-gray mx-auto">
								Оплата заказа при получении
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default CheckOrder
