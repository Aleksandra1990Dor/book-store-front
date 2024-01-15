import type { FC } from 'react'

interface ICountButton {
	increment: () => void
	decrement: () => void
	count: number
}

const CountButton: FC<ICountButton> = ({ decrement, increment, count }) => {
	return (
		<div className="bg-brown py-0.15 text-0.5-base leading-none px-0.75 rounded-xl w-max flex gap-0.3 items-center text-shadow-bg font-bold h-max">
			<button
				className="hover:scale-105 transition-transform duration-200 text-base hover:text-white"
				onClick={decrement}
			>
				-
			</button>
			{count}
			<button
				className="hover:scale-105 transition-transform duration-200 text-base hover:text-white"
				onClick={increment}
			>
				+
			</button>
		</div>
	)
}

export default CountButton
