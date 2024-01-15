interface IBookImage {
	images: string[]
}

export interface ICategory {
	id: number
	name: string
	slug: string
	books: IBookImage[]
	_count: {
		books: number
	}
}
