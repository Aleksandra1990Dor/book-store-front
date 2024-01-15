import { IUser } from '@/types/user.types'

export interface IUserState {
	email: string
	isAdmin: boolean
	avatarPath: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export type IRegister = IEmailPassword & {
	avatarPath: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
