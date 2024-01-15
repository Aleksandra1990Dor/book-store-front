import { SERVER_URL } from '@/constants/constants'
import { errorCatch, getContentType } from './api.helpers'
import axios from 'axios'
import {
	getAccessToken,
	removeTokensStorage
} from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

export const axiosClassic = axios.create({
	baseURL: SERVER_URL,
	headers: getContentType()
})

const instance = axios.create({
	baseURL: SERVER_URL,
	headers: getContentType()
})

instance.interceptors.request.use(async config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.configureStore

		console.log(errorCatch(error))

		if (
			(error.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await AuthService.getNewTokens()

				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeTokensStorage()
				}
			}
		}

		throw error
	}
)

export default instance
