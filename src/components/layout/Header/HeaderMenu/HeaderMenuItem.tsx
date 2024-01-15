import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderMenuItem.module.scss'

interface IHeaderMenuItem {
	title: string
	href?: string
	onClick: () => void
}

const HeaderMenuItem: FC<IHeaderMenuItem> = ({ href, title, onClick }) => {
	return (
		<li className={styles.item}>
			{href ? (
				<Link href={href} onClick={onClick}>
					{title}
				</Link>
			) : (
				<button onClick={onClick} aria-label={title}>
					{title}
				</button>
			)}
		</li>
	)
}

export default HeaderMenuItem
