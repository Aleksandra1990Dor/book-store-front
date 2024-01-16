import { IAuthor, IBook } from '@/types/books.types'
import type { FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import BreadCrumbs from '@/components/ui/bread-crumbs/BreadCrumbs'
import { getAuthorBreadCrumbs } from '@/utils/get-bread-crumbs'
import Image from 'next/image'
import GalleryItem from '@/components/ui/gallery/GalleryItem'
import { getImageUrl } from '@/config/image-url.config'
import styles from './SingleAuthor.module.scss'

const SingleAuthor: FC<{ author: IAuthor; books: IBook[] }> = ({
	author,
	books
}) => {
	return (
		<div className={cn(styles.mainWrapper, gentium.className)}>
			<div className={styles.breadCrumbs}>
				<BreadCrumbs items={getAuthorBreadCrumbs(author)} />
			</div>
			{/* main */}
			<div className={styles.wrapper}>
				<div className="flex items-center flex-col gap-1">
					<Image
						src={getImageUrl(author.avatarPath)}
						height={200}
						width={200}
						alt={author.fullName}
						className="rounded-full border border-brown h-10 w-10 object-cover"
					/>
					<h2 className="font-bold text-black text-xl leading-none mb-0.5 text-center">
						{author.fullName}
					</h2>
				</div>
				<div className={styles.books}>
					{books.map(book => (
						<GalleryItem book={book} key={book.id} className="h-max" />
					))}
				</div>
			</div>
		</div>
	)
}

export default SingleAuthor
