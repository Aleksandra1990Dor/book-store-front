import { useMemo, useState } from 'react'

export const useGallery = (defaultLastIndex: number, indexInterval: number) => {
	const [offset, setOffset] = useState(0)
	const [lastIndex, setLastIndex] = useState(defaultLastIndex)

	const forward = () => {
		setOffset(offset + 102)
		setLastIndex(lastIndex + indexInterval)

		if (offset >= 204) {
			setOffset(0)
			setLastIndex(3)
		}
	}

	return useMemo(() => ({ offset, forward, lastIndex }), [offset, lastIndex])
}
