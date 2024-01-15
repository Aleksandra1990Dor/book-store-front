import { gentium } from '@/app/assets/fonts'
import type { FC } from 'react'
import styles from './AuthorsMobile.module.scss'
import cn from 'clsx'
import { IAuthor } from '@/types/books.types'
import Link from 'next/link'
import { getAuthorsUrl } from '@/config/url.config'
import Image from 'next/image'
import { getImageUrl } from '@/config/image-url.config'

const AuthorsMobile: FC<{ authors: IAuthor[]; title: string }> = ({
	authors,
	title
}) => {
	return (
		<div className={cn(styles.wrapper, gentium.className)}>
			<h2>{title}</h2>

			<div className={styles.booksWrapper}>
				{authors.slice(0, 3).map(author => (
					<AuthorMobileItem key={author.id} author={author} />
				))}
			</div>
		</div>
	)
}

const AuthorMobileItem: FC<{ author: IAuthor }> = ({ author }) => {
	return (
		<Link
			href={getAuthorsUrl(`/${author.slug}`)}
			className="flex gap-2 items-center bg-light-brown rounded-3xl px-2 py-1"
		>
			<Image
				src={getImageUrl(author.avatarPath)}
				height={200}
				width={200}
				alt={author.fullName}
				className="rounded-full border border-brown h-4 w-4 object-cover"
			/>

			<div className="flex flex-col gap-0.3">
				<div className="text-black text-lg font-bold leading-none">
					{author.fullName}
				</div>
				<div className="text-gray text-lg">{author._count.books} книг</div>
			</div>
		</Link>
	)
}

export default AuthorsMobile
