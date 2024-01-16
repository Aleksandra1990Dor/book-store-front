'use client'

import { gentium } from '@/app/assets/fonts'
import MainBook from '@/components/ui/design-elements/main-book/MainBook'
import { IBook } from '@/types/books.types'
import { useEffect, type FC } from 'react'
import cn from 'clsx'
import Register from '@/components/screens/Auth/Regster/Register'
import Login from '@/components/screens/Auth/Login/Login'
import { useAuthPage } from '@/components/screens/Auth/useAuthPage'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import styles from './Auth.module.scss'

const Auth: FC<{ books: IBook[] }> = ({ books }) => {
	const { switchType, type } = useAuthPage()
	const { user } = useAuth()
	const { back } = useRouter()

	useEffect(() => {
		if (!!user) back()
	}, [user, back])

	return (
		<div
			className={cn(styles.mainWrapper, gentium.className)}
			style={{ gridTemplateColumns: '40% 1fr' }}
		>
			<div
				className={cn(styles.wrapper, {
					'mb-8': type === 'register',
					'mb-4': type === 'login'
				})}
			>
				<div className="relative hidden lg:block" style={{ width: '13rem' }}>
					<MainBook
						book={
							type === 'login'
								? books[books.length - 7]
								: books[books.length - 6]
						}
					/>
				</div>
			</div>
			{type === 'login' ? (
				<Login switchType={switchType} />
			) : (
				<Register switchType={switchType} />
			)}
		</div>
	)
}

export default Auth
