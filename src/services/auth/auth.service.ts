import { IUser } from './../../types/user.types'
import { IAuthResponse, IUserState } from '@/store/user/user.interface'
import { removeTokensStorage, saveToStorage } from './auth.helper'
import Cookies from 'js-cookie'
import { axiosClassic } from '@/api/api.interceptor'
import { getAuthServerUrl } from '@/config/server-url.config'
import { getContentType } from '@/api/api.helpers'

export const AuthService = {
	async register(email: string, password: string, avatarPath: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthServerUrl('register'),
			{ email, password, avatarPath }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthServerUrl('login'),
			{ email, password }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<IAuthResponse>(
			getAuthServerUrl('login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async getUserFromStorage() {
		const jsonUser = localStorage.getItem('user')

		if (jsonUser) {
			const user = JSON.parse(jsonUser) as IUserState
			return { user }
		} else {
			return { user: null }
		}
	}
}
