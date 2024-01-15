'use client'
import { useMemo, useState } from 'react'

export const usePagination = (
	perPage: number,
	initialPage: number,
	data: any[]
) => {
	const [page, setPage] = useState(initialPage)
	const items = data.slice(0, page)
	const isPaginated = page < data.length
	const onClick = () => setPage(page + perPage)

	return useMemo(() => ({ items, isPaginated, onClick }), [items, isPaginated])
}
