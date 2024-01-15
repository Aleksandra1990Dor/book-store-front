import Image from 'next/image'
import { Suspense, type FC } from 'react'
import styles from './Book.module.scss'
import cn from 'clsx'
import { getImageUrl } from '@/config/image-url.config'
import SkeletonLoader from '../skeleton/SkeletonLoader'

interface IBook {
	size: 'small' | 'large'
	className?: string
	src: string
}

const Book: FC<IBook> = ({ size, className, src }) => {
	return (
		<div
			className={cn(styles.wrapper, className, {
				[styles.small]: size === 'small',
				[styles.large]: size === 'large'
			})}
		>
			<Suspense
				fallback={
					<SkeletonLoader
						count={1}
						containerClassName={
							size === 'small' ? 'w-4 inline-block' : 'w-11 inline-block'
						}
						className={size === 'small' ? 'h-5.75' : 'h-15'}
					/>
				}
			>
				<Image
					src={getImageUrl(src)}
					width={200}
					height={400}
					alt="book image"
					priority={size === 'large'}
					loading={size === 'small' ? 'lazy' : 'eager'}
				/>
			</Suspense>
			<div className={styles.booksPages}></div>
			{size === 'large' && <div className={styles.shadow}></div>}
		</div>
	)
}

export default Book
