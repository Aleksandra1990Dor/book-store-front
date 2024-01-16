'use client'
import { Suspense, type FC, useState } from 'react'
import SkeletonLoader from '../skeleton/SkeletonLoader'
import styles from './Disc.module.scss'
import Image from 'next/image'
import { getImageUrl } from '@/config/image-url.config'

const Disc: FC<{ src: string }> = ({ src }) => {
	const [isImageLoading, setIsImageLoading] = useState(false)

	return (
		<div className={styles.disk}>
			{isImageLoading && (
				<SkeletonLoader
					containerClassName="absolute -top-0.15 left-0 block w-full h-full  overflow-hidden rounded-full"
					className="w-full h-full rounded-full block"
					count={1}
				/>
			)}
			<Image
				width={130}
				height={130}
				alt="Picture of the book"
				className={styles.img}
				src={getImageUrl(src)}
				loading="lazy"
				onLoadStart={() => setIsImageLoading(true)}
				onLoadingComplete={() => setIsImageLoading(false)}
			/>
		</div>
	)
}

export default Disc
