'use client'
import { type FC } from 'react'
import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import { IBook } from '@/types/books.types'
import { useGallery } from './useGallery'

interface IGallery {
	title: string
	books: IBook[]
	defaultLastIndex: number
	indexInterval: number
}

const Gallery: FC<IGallery> = ({
	title,
	books,
	defaultLastIndex,
	indexInterval
}) => {
	const { forward, lastIndex, offset } = useGallery(
		defaultLastIndex,
		indexInterval
	)

	return (
		<div className={cn(styles.gallery, gentium.className)}>
			<div className={styles.title}>
				<h2>{title}</h2>
			</div>
			<div className={styles.window}>
				<div
					className={styles.wrapper}
					style={{
						transform: `translateX(-${offset}%)`,
						minWidth: `100%`
					}}
				>
					{books?.length &&
						books?.map((item, index) => (
							<GalleryItem
								key={index}
								onClick={forward}
								lastIndex={lastIndex}
								index={index}
								book={item}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default Gallery
