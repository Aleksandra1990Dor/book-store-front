import booksService from '@/services/books.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import type { Metadata } from 'next'
import authorService from '@/services/author.service'
import SingleAuthor from './SingleAuthor'
import { getImageUrl } from '@/config/image-url.config'

export const revalidate = 60

export async function generateStaticParams() {
	const authors = await authorService.getAll()

	const paths = authors.map(author => {
		return {
			params: { slug: author.slug }
		}
	})

	return paths
}

export async function getAuthor(params: TypeParamSlug) {
	const author = await authorService.bySlug(params?.slug as string)
	const books = await booksService.byAuthor(author.id)

	return { author, books }
}

export async function generateMetadata({
	params
}: IPageSlugParam): Promise<Metadata> {
	const { author } = await getAuthor(params)

	return {
		title: author.fullName,
		description: `Random description about ${author.fullName}`,
		openGraph: {
			images: getImageUrl(author.avatarPath) || []
		}
	}
}

export default async function SingleCategoryPage({ params }: IPageSlugParam) {
	const { author, books } = await getAuthor(params)
	return <SingleAuthor author={author} books={books} />
}
