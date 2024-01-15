import { useEffect } from 'react'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const useAuth = () => {
	const { user, isLoading } = useTypedSelector(state => state.user)
	const { getUser } = useActions()

	useEffect(() => {
		if (!user) {
			getUser()
		}
	}, [user])

	return { user, isLoading }
}
