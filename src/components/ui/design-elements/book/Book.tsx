'use client'
import Image from 'next/image'
import { Suspense, type FC, useState } from 'react'
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
	const [isLoading, setIsLoading] = useState(true)
	return (
		<div
			className={cn(styles.wrapper, className, {
				[styles.small]: size === 'small',
				[styles.large]: size === 'large'
			})}
		>
			{isLoading && (
				<SkeletonLoader
					count={1}
					containerClassName={
						size === 'small'
							? 'w-4 inline-block absolute -top-0.15 left-0'
							: 'w-11 inline-block absolute -top-0.15 left-0'
					}
					className={size === 'small' ? 'h-5.75' : 'h-15'}
				/>
			)}
			<Image
				src={getImageUrl(src)}
				width={200}
				height={400}
				alt="book image"
				priority={size === 'large'}
				loading={size === 'small' ? 'lazy' : 'eager'}
				onLoadStart={() => setIsLoading(true)}
				onLoadingComplete={() => setIsLoading(false)}
			/>
			{/* </Suspense> */}
			<div className={styles.booksPages}></div>
			{size === 'large' && <div className={styles.shadow}></div>}
		</div>
	)
}

export default Book
