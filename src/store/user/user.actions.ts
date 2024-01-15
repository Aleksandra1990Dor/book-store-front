import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword, IRegister } from './user.interface'
import { AuthService } from '@/services/auth/auth.service'
import { errorCatch } from '@/api/api.helpers'
import { toast } from 'react-hot-toast'
import { toastError, toastSuccess } from '@/app/assets/toast-styles'

export const register = createAsyncThunk<IAuthResponse, IRegister>(
	'auth/register',
	async ({ email, password, avatarPath }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password, avatarPath)
			toast.success('Регистрация прошла успешно!', toastSuccess)

			return response.data
		} catch (error) {
			toast.error('Регистрация не выполнена.', toastError)
			return thunkApi.rejectWithValue(error)
		}
	}
)

// login

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toast.success('Вы успешно вошли в систему.', toastSuccess)
			return response.data
		} catch (error) {
			toast.error('Вход не выполнен.', toastError)
			return thunkApi.rejectWithValue(error)
		}
	}
)

// logout

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	toast.success('Вы вышли из системы.', toastSuccess)
	await AuthService.logout()
})

//get user from localStorage

export const getUser = createAsyncThunk(
	'auth/get-from-storage',
	async (_, thunkApi) => {
		try {
			const user = await AuthService.getUserFromStorage()
			return user
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// checkAuth

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toast.error('Пожалуйста войдите в систему.', toastError)
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
