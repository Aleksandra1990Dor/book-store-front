import { Suspense, type FC } from 'react'
import Card from './CardWrapper'
import styles from './Card.module.scss'
import Image from 'next/image'
import { IBook } from '@/types/books.types'
import { getImageUrl } from '@/config/image-url.config'
import AudioPlayer from '../audio-player/AudioPlayer'
import SkeletonLoader from '../design-elements/skeleton/SkeletonLoader'
import Loader from '../Loader'
import Disc from '../design-elements/disc/Disc'

interface IAudioCard {
	audioBook: IBook
	title?: string
}

const AudioCard: FC<IAudioCard> = ({ audioBook, title }) => {
	return (
		<Card
			className="bg-[#fdfdfd]"
			title={title}
			name={audioBook.name}
			text={audioBook.author.fullName}
			isAudio
		>
			<div className="max-lg:hidden">
				<Disc src={audioBook.images[0]} />
			</div>
			<Suspense fallback={<Loader />}>
				<AudioPlayer audioUrl={audioBook.audioUrl} />
			</Suspense>
		</Card>
	)
}

export default AudioCard
