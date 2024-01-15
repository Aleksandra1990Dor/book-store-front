import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth } from './useAuth'
import userService from '@/services/user.service'
import { useMemo } from 'react'

export const useProfile = () => {
	const { user } = useAuth()
	const queryCache = useQueryClient()

	const { data, isLoading } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => userService.getProfile(),
		enabled: !!user
	})

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['toggle favorites'],
		mutationFn: (id: number) => userService.toggleFavorites(id),
		onSuccess: data => {
			queryCache.invalidateQueries({ queryKey: ['get profile'] })
		}
	})

	return useMemo(
		() => ({
			mutateAsync,
			favoriteBooks: data?.favorites,
			profile: data,
			isLoading,
			isPending
		}),
		[data, isLoading, isPending]
	)
}
