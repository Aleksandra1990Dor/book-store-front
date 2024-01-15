import { useForm } from 'react-hook-form'
import { formData, formRegisterData } from './Auth.interface'
import { MouseEvent, useMemo, useState } from 'react'
import { useActions } from '@/hooks/useActions'

export const useAuthPage = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const switchType = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		type === 'login' ? setType('register') : setType('login')
	}

	const { login, register: userRegister } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm<formRegisterData>({
		mode: 'onSubmit'
	})

	const registerFn = (data: formRegisterData) => {
		if (data.password !== data.passwordRepeat) {
			console.log('пароли не совпадают')
		} else {
			userRegister({
				email: data.email,
				password: data.password,
				avatarPath: data.avatarPath
			})
			reset()
		}
	}

	const loginFn = (data: formData) => {
		login(data)

		reset()
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			loginFn,
			registerFn,
			type,
			switchType,
			errors,
			control
		}),
		[type, errors, switchType]
	)
}
