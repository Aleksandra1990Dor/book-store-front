import { Suspense, type FC } from 'react'
import SkeletonLoader from '../skeleton/SkeletonLoader'
import styles from './Disc.module.scss'
import Image from 'next/image'
import { getImageUrl } from '@/config/image-url.config'

const Disc: FC<{ src: string }> = ({ src }) => {
	return (
		<div className={styles.disk}>
			<Suspense
				fallback={
					<SkeletonLoader
						count={1}
						containerClassName={styles.img}
						className="h-2.5"
					/>
				}
			>
				<Image
					width={130}
					height={130}
					alt="Picture of the book"
					className={styles.img}
					src={getImageUrl(src)}
					loading="lazy"
				/>
			</Suspense>
		</div>
	)
}

export default Disc
