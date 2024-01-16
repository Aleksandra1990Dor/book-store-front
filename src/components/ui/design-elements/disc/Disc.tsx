'use client'
import { type FC } from 'react'
import styles from './Disc.module.scss'
import Image from 'next/image'
import { getImageUrl } from '@/config/image-url.config'

const Disc: FC<{ src: string }> = ({ src }) => {
	return (
		<div className={styles.disk}>
			<Image
				width={130}
				height={130}
				alt="Picture of the book"
				className={styles.img}
				src={getImageUrl(src)}
				loading="lazy"
			/>
		</div>
	)
}

export default Disc
