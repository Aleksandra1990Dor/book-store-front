'use client'

import type { ChangeEvent, FC } from 'react'
import { MdHistory, MdPause, MdPlayArrow, MdUpdate } from 'react-icons/md'
import { useAudioPlayer } from './useAudioPlayer'
import { getImageUrl } from '@/config/image-url.config'
import styles from './AudioPlayer.module.scss'

const AudioPlayer: FC<{ audioUrl: string }> = ({ audioUrl }) => {
	const { actions, audio, audioRef } = useAudioPlayer()

	return (
		<>
			<audio src={getImageUrl(audioUrl)} ref={audioRef} />
			<div className={styles.progressBarContainer}>
				<div
					style={{ width: `${audio.progress}%` }}
					className={styles.progressBar}
				></div>
				<input
					type="range"
					min={0}
					max={100}
					value={audio.progress}
					onMouseUp={() => actions.setIsChangedInput(true)}
					onInput={(e: ChangeEvent<HTMLInputElement>) => {
						actions.setProgress(+e.target.value)
					}}
					className="w-full"
					aria-label="progress bar"
				/>
			</div>
			<div className={styles.iconsWrapper}>
				<button
					className={styles.icons}
					onClick={actions.revert}
					aria-label="revert"
				>
					<MdHistory />
					<div className={styles.disk}>10</div>
				</button>
				<button
					className={styles.playIcon}
					onClick={actions.toggleAudio}
					aria-label="play/pause"
				>
					{audio.play ? <MdPause /> : <MdPlayArrow />}
				</button>
				<button
					className={styles.icons}
					onClick={actions.forward}
					aria-label="forward"
				>
					<MdUpdate />
					<div className={styles.disk}>10</div>
				</button>
			</div>
		</>
	)
}

export default AudioPlayer
