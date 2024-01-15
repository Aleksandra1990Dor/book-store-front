import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart/cart.slice'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import { reducer as userReducer } from './user/user.slice'
import { filterSlice } from './filters/filter.slice'

const isClient = typeof window !== 'undefined'

const combinedReducers = combineReducers({
	cart: cartSlice.reducer,
	user: userReducer,
	filters: filterSlice.reducer
})

let mainReducer = combinedReducers

if (isClient) {
	const { persistReducer } = require('redux-persist')
	const storage = require('redux-persist/lib/storage').default

	const persistConfig = {
		key: 'book-store',
		storage,
		whitelist: ['cart']
	}

	mainReducer = persistReducer(persistConfig, combinedReducers)
}

export const store = configureStore({
	reducer: mainReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persister = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>
