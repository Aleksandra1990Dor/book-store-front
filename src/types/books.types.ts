import { ICategory } from './category.types'

export interface IAuthor {
	fullName: string
	id: number
	slug: string
	avatarPath: string
	_count: {
		books: number
	}
	books: IBook[]
}

export interface IBook {
	images: string[]
	id: number
	name: string
	description: string
	price: number
	createdAt: string
	slug: string
	author: IAuthor
	isAudioAvailable: boolean
	audioUrl: string
	category: ICategory
}
