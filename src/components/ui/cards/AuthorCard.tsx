import { Suspense, type FC } from 'react'
import Card from './CardWrapper'
import Image from 'next/image'
import styles from './Card.module.scss'
import { IAuthor } from '@/types/books.types'
import { getAuthorsUrl } from '@/config/url.config'
import Link from 'next/link'
import { getImageUrl } from '@/config/image-url.config'
import SkeletonLoader from '../design-elements/skeleton/SkeletonLoader'

interface IAuthorCard {
	author: IAuthor
	title?: string
}

const AuthorCard: FC<IAuthorCard> = ({ title, author }) => {
	return (
		<Link href={getAuthorsUrl(`/${author.slug}`)}>
			<Card
				className="bg-light-brown"
				title={title}
				name={author.fullName}
				text={`${author._count?.books} книг`}
			>
				<Suspense
					fallback={
						<SkeletonLoader
							count={1}
							containerClassName={styles.img}
							className="h-6"
						/>
					}
				>
					<Image
						width={130}
						height={130}
						alt="Picture of the author"
						className={styles.img}
						src={getImageUrl(author.avatarPath)}
						loading="lazy"
					/>
				</Suspense>
			</Card>
		</Link>
	)
}

export default AuthorCard
