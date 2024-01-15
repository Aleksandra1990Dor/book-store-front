import { filterSlice } from './filters/filter.slice'
import * as userActions from './user/user.actions'
import { cartSlice } from './cart/cart.slice'

export const rootActions = {
	...userActions,
	...cartSlice.actions,
	...filterSlice.actions
}
