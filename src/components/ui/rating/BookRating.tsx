'use client'

import { useState, type FC } from 'react'
import { Rating } from 'react-simple-star-rating'

const BookRating: FC = () => {
	return (
		<div className="text-xs flex flex-row items-center">
			<Rating
				readonly
				initialValue={3}
				SVGstyle={{
					fill: '#ddb476',
					display: 'inline-block'
				}}
				size={10}
				allowFraction
				transition
			/>
		</div>
	)
}

export default BookRating
