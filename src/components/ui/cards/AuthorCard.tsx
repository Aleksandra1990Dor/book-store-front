import { type FC } from 'react'
import Card from './CardWrapper'
import { IAuthor } from '@/types/books.types'
import { getAuthorsUrl } from '@/config/url.config'
import Link from 'next/link'
import AuthorImage from './AutorImage'

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
				<AuthorImage src={author.avatarPath} />
			</Card>
		</Link>
	)
}

export default AuthorCard
