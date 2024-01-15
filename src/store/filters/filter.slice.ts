import {
	ENUM_SEARCH,
	IFiltersActionsPayload,
	IFiltersState
} from './../../types/sort.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IFiltersState = {
	isFilterUpdated: false,
	queryParams: {
		sort: ENUM_SEARCH.BOOKS,
		searchTerm: ''
	}
}

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParams: (
			state,
			action: PayloadAction<IFiltersActionsPayload>
		) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		}
	}
})
