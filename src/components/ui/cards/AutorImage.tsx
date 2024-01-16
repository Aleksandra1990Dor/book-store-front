'use client'
import Image from 'next/image'
import { useState, type FC } from 'react'
import SkeletonLoader from '../design-elements/skeleton/SkeletonLoader'
import styles from './Card.module.scss'
import { getImageUrl } from '@/config/image-url.config'

const AuthorImage: FC<{ src: string }> = ({ src }) => {
	const [isImageLoading, setIsImageLoading] = useState(false)
	return (
		<div className="w-8 h-8 relative lg:h-6-1 lg:w-6-1 lg:pl-0.15 overflow-hidden rounded-full">
			{isImageLoading && (
				<SkeletonLoader
					containerClassName="absolute -top-0.3 left-0 block w-full h-full rounded-full"
					className="w-full h-full"
					count={1}
				/>
			)}
			<Image
				width={130}
				height={130}
				alt="Picture of the author"
				className={styles.img}
				src={getImageUrl(src)}
				loading="lazy"
				onLoadStart={() => setIsImageLoading(true)}
				onLoadingComplete={() => setIsImageLoading(false)}
			/>
		</div>
	)
}

export default AuthorImage
