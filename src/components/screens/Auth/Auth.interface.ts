import { MouseEvent } from 'react'

export interface IAuth {
	switchType: (event: MouseEvent<HTMLButtonElement>) => void
}

export interface formData {
	email: string
	password: string
}

export type formRegisterData = formData & {
	passwordRepeat: string
	avatarPath: string
}
