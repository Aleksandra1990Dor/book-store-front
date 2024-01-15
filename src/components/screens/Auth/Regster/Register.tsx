'use client'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { type FC } from 'react'
import { useAuthPage } from '../useAuthPage'
import { validEmail } from '../valid-email'
import { IAuth } from '../Auth.interface'
import { Controller } from 'react-hook-form'
import FileField from '../../../ui/field/file-field/FileField'
import { useAuth } from '@/hooks/useAuth'
import Loader from '@/components/ui/Loader'
import styles from '../Auth.module.scss'

const Register: FC<IAuth> = ({ switchType }) => {
	const { errors, handleSubmit, registerFn, register, control } = useAuthPage()
	const { isLoading } = useAuth()

	return (
		<div className={styles.formWrapper}>
			<h1 className={styles.title}>Регистрация</h1>
			{isLoading ? (
				<div className={styles.registerLoader}>
					<Loader />
				</div>
			) : (
				<form className={styles.form} onSubmit={handleSubmit(registerFn)}>
					<Field
						placeholder="Введите e-mail"
						label="E-mail"
						{...register('email', {
							required: 'Поле "E-mail" обязательно',
							pattern: {
								value: validEmail,
								message: 'Пожалуйста введите валидный e-mail'
							}
						})}
						error={errors.email?.message}
					/>
					<Field
						placeholder="Введите пароль"
						type="password"
						label="Пароль"
						{...register('password', {
							required: 'Поле "пароль" обязательно',
							minLength: {
								value: 6,
								message: 'Минимальная длинна пароля - 6 символов'
							}
						})}
						error={errors.password?.message}
					/>

					<Field
						placeholder="Повторите пароль"
						type="password"
						label="Повторите пароль"
						{...register('passwordRepeat', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Минимальная длинна пароля - 6 символов'
							}
						})}
					/>
					<Controller
						control={control}
						name="avatarPath"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<FileField
								error={error?.message}
								folder="/users"
								onChange={onChange}
								placeholder="Фото"
								value={value}
							/>
						)}
					/>

					<Button text="Регистрация" size="large" variant="color" />
					<button className={styles.switchBtn} onClick={e => switchType(e)}>
						Вход
					</button>
				</form>
			)}
		</div>
	)
}

export default Register
