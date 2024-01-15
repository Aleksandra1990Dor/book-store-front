import { IBreadCrumbsItem } from '@/components/ui/bread-crumbs/bread-crumbs.interface'
import {
	getAudioUrl,
	getAuthorsUrl,
	getCategoryUrl,
	getProfileUrl
} from '@/config/url.config'
import { IAuthor, IBook } from '@/types/books.types'

export const getBookBreadCrumbs = (book: IBook): IBreadCrumbsItem[] => {
	return [
		{
			href: getCategoryUrl(`/${book.category.slug}`),
			text: book.category.name
		},
		{ href: getAuthorsUrl(`/${book.author.slug}`), text: book.author.fullName },
		{ href: '', text: book.name }
	]
}

export const getCategoryBreadCrumbs = (book: IBook): IBreadCrumbsItem[] => {
	return [
		{
			href: getCategoryUrl(''),
			text: 'Категории'
		},
		{
			href: '',
			text: book.category.name
		}
	]
}

export const getFavoritesBreadCrumbs = (): IBreadCrumbsItem[] => {
	return [
		{
			href: getProfileUrl(''),
			text: 'Профиль пользователя'
		},
		{
			href: '',
			text: 'Избранное'
		}
	]
}

export const getAudioBreadCrumbs = (book: IBook): IBreadCrumbsItem[] => {
	return [
		{
			href: getAudioUrl(''),
			text: 'Аудио Книги'
		},
		{
			href: '',
			text: book.name
		}
	]
}

export const getAuthorBreadCrumbs = (author: IAuthor): IBreadCrumbsItem[] => {
	return [
		{
			href: getAuthorsUrl(''),
			text: 'Авторы'
		},
		{
			href: '',
			text: author.fullName
		}
	]
}
