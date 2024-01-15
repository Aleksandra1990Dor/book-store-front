import instance from '@/api/api.interceptor'
import { getOrderServerUrl } from '@/config/server-url.config'
import { IOrder, IOrderResponse } from '@/types/order.types'

class OrderService {
	async getAll() {
		const data = await instance.get<IOrderResponse[]>(
			getOrderServerUrl('/by-user')
		)

		return data.data
	}

	async placeOrder(order: IOrder) {
		const data = await instance.post<IOrderResponse>(
			getOrderServerUrl(''),
			order
		)

		return data.data
	}
}

export default new OrderService()
