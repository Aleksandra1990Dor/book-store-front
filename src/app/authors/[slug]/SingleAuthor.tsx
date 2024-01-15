import Button from '@/components/ui/button/Button'
import MainBook from '@/components/ui/design-elements/main-book/MainBook'
import BookRating from '@/components/ui/rating/BookRating'
import { IAuthor, IBook } from '@/types/books.types'
import type { FC } from 'react'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'
import BreadCrumbs from '@/components/ui/bread-crumbs/BreadCrumbs'
import { getAuthorBreadCrumbs } from '@/utils/get-bread-crumbs'
import Image from 'next/image'
import BooksList from '@/components/ui/books-list/BooksList'
import GalleryItem from '@/components/ui/gallery/GalleryItem'
import { getImageUrl } from '@/config/image-url.config'

const SingleAuthor: FC<{ author: IAuthor; books: IBook[] }> = ({
	author,
	books
}) => {
	return (
		<div className={cn('px-2 mb-4', gentium.className)}>
			<BreadCrumbs items={getAuthorBreadCrumbs(author)} />
			{/* main */}
			<div className="grid px-2" style={{ gridTemplateColumns: '30% 1fr' }}>
				<div className="flex items-center flex-col gap-1">
					<Image
						src={getImageUrl(author.avatarPath)}
						height={200}
						width={200}
						alt={author.fullName}
						className="rounded-full border border-brown h-10 w-10 object-cover"
					/>
					<h2 className="font-bold text-black text-xl leading-none mb-0.5">
						{author.fullName}
					</h2>
				</div>
				<div className="flex flex-wrap p-2 h-max">
					{books.map(book => (
						<GalleryItem book={book} key={book.id} className="h-max" />
					))}
				</div>
			</div>
		</div>
	)
}

export default SingleAuthor
