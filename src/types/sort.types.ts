export enum ENUM_SEARCH {
	BOOKS = 'name',
	AUTHORS = 'author',
	AUDIO = 'isAudioAvailable'
}

export interface ISearchParams {
	sort?: string
	searchTerm?: string
}

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: ISearchParams
}

export interface IFiltersActionsPayload {
	key: keyof ISearchParams
	value: string
}
