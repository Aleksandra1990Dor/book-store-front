'use client'
import type { FC } from 'react'
import { FaAnglesDown } from 'react-icons/fa6'

interface IPagination {
	isPaginated: boolean
	onClick: () => void
}

const Pagination: FC<IPagination> = ({ isPaginated, onClick }) => {
	return (
		<div>
			{isPaginated && (
				<div className="flex w-full justify-center">
					<FaAnglesDown
						className="cursor-pointer text-xl text-light-brown opacity-60 hover:opacity-100 hover:text-brown hover:translate-y-translate"
						onClick={onClick}
					/>
				</div>
			)}
		</div>
	)
}

export default Pagination
