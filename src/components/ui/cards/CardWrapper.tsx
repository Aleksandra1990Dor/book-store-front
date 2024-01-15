import type { FC, PropsWithChildren } from 'react'
import styles from './Card.module.scss'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'

interface ICard {
	className: string
	title?: string
	name: string
	text: string
}

const Card: FC<PropsWithChildren<ICard>> = ({
	className,
	children,
	title,
	name,
	text
}) => {
	return (
		<div className={styles.mainWrapper}>
			<div className={cn(styles.wrapper, className, gentium.className)}>
				{title && (
					<div className={styles.title}>
						<h2>{title}</h2>
					</div>
				)}
				<div className={styles.container}>
					<div className="flex flex-col items-center gap-0.75">
						<h3>{name}</h3>
						<div className="text-gray text-sm text-center leading-none">
							{text}
						</div>
					</div>
					<div className="w-full h-full flex flex-col items-center justify-end gap-0.75">
						{children}
					</div>
				</div>
			</div>
			<div className={styles.shadow}></div>
		</div>
	)
}

export default Card
