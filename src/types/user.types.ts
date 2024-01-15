import { IBook } from './books.types'
import { IProfileOrder } from './order.types'

export enum EnumTokens {
	ACCESS_TOKEN = 'access-token',
	REFRESH_TOKEN = 'refresh-token'
}

export interface IUser {
	id: number
	email: string
	isAdmin: boolean
	avatarPath: string
	name: string
}

export type IUserProfile = IUser & {
	phone: string
	favorites: IBook[]
	orders: IProfileOrder[]
}
