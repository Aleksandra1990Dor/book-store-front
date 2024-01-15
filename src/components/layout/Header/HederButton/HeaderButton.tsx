import type { FC, PropsWithChildren } from 'react'
import styles from './HeaderButton.module.scss'
import cn from 'clsx'
import Link from 'next/link'

interface IHeaderButton {
	isChecked?: boolean
	title: string
	href: string
}

const HeaderButton: FC<PropsWithChildren<IHeaderButton>> = ({
	isChecked = false,
	title,
	children,
	href
}) => {
	return (
		<Link
			href={href}
			className={cn(styles.btn, {
				[styles.checked]: isChecked,
				'hover:fill-brown hover:text-brown': !isChecked
			})}
		>
			{children}
			<span>{title}</span>
		</Link>
	)
}

export default HeaderButton
