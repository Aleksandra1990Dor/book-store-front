import { useCart } from '@/hooks/useCart'
import orderService from '@/services/order.service'
import { convertCartItemsToOrder } from '@/utils/convert-cart-to-order'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const usePlaceOrder = () => {
	const { reset, cartItems } = useCart()
	const [isAccepted, setIsAccepted] = useState(false)

	const { mutateAsync, data, isPending } = useMutation({
		mutationKey: ['place order'],
		mutationFn: () => {
			setIsAccepted(true)
			return orderService.placeOrder(convertCartItemsToOrder(cartItems))
		},
		onSuccess: data => {
			reset()
		},
		onError: error => {
			toast.error('Не удалось оформить заказ...')
			setIsAccepted(false)
		}
	})

	return useMemo(
		() => ({ isAccepted, mutateAsync, orderID: data?.id, isPending }),
		[isAccepted, data, isPending]
	)
}
