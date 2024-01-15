import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import booksService from '@/services/books.service'
import { IBook } from '@/types/books.types'
import { ISearchParams } from '@/types/sort.types'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export const useExplorer = (books: IBook[]) => {
	const [page, setPage] = useState(6)
	const searchParams = useSearchParams()
	const { updateQueryParams } = useActions()
	const { replace } = useRouter()
	const { isFilterUpdated, queryParams } = useTypedSelector(
		state => state.filters
	)
	const pathName = usePathname()

	const { data, isLoading } = useQuery({
		queryKey: ['search', queryParams],
		queryFn: () => booksService.getAll(queryParams),
		initialData: books,
		enabled: isFilterUpdated
	})

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParams({ key: key as keyof ISearchParams, value })
		})
		setPage(6)
	}, [searchParams])

	const handleUpdateQueryParams = (key: keyof ISearchParams, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		replace(pathName + `?${newParams.toString().replace(/%7C/g, '|')}`)
		updateQueryParams({ key, value })
	}

	return useMemo(
		() => ({
			data,
			handleUpdateQueryParams,
			queryParams,
			isLoading
		}),
		[data, queryParams, isLoading]
	)
}
