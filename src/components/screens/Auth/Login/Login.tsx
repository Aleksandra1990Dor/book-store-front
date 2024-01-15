'use client'

import type { FC } from 'react'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { validEmail } from '../valid-email'
import { useAuthPage } from '../useAuthPage'
import { IAuth } from '../Auth.interface'
import { useAuth } from '@/hooks/useAuth'
import Loader from '@/components/ui/Loader'
import styles from '../Auth.module.scss'

const Login: FC<IAuth> = ({ switchType }) => {
	const { handleSubmit, errors, loginFn, register } = useAuthPage()
	const { isLoading } = useAuth()

	return (
		<div className={styles.formWrapper}>
			<h1 className={styles.title}>Вход</h1>
			{isLoading ? (
				<div className={styles.loginLoader}>
					<Loader />
				</div>
			) : (
				<form className={styles.form} onSubmit={handleSubmit(loginFn)}>
					<Field
						placeholder="Введите e-mail"
						label="E-mail"
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Pease enter a valid email'
							}
						})}
						error={errors.email?.message}
					/>
					<Field
						placeholder="Введите пароль"
						type="password"
						label="Пароль"
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should be at least 6 symbols'
							}
						})}
						error={errors.password?.message}
					/>
					<Button text="Вход" size="large" variant="color" />
					<button className={styles.switchBtn} onClick={e => switchType(e)}>
						Регистрация
					</button>
				</form>
			)}
		</div>
	)
}

export default Login
