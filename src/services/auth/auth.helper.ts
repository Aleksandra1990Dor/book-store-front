import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import { EnumTokens } from '@/types/user.types'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, data.accessToken, { expires: 7 })
	Cookies.set(EnumTokens.REFRESH_TOKEN, data.refreshToken, { expires: 7 })
}

export const removeTokensStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
	Cookies.remove(EnumTokens.REFRESH_TOKEN)
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
