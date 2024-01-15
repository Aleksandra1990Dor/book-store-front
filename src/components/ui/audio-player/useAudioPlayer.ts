import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const useAudioPlayer = () => {
	const [play, setPlay] = useState(false)
	const [isChangedInput, setIsChangedInput] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [audioTime, setAudioTime] = useState(0)
	const [progress, setProgress] = useState(35)
	const audioRef = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		const originDuration = audioRef.current?.duration
		if (originDuration) {
			setAudioTime(originDuration)
		}
	}, [audioRef.current?.duration])

	const toggleAudio = (): void => {
		if (play) {
			audioRef.current?.pause()
			setPlay(false)
		} else {
			audioRef.current?.play()
			setPlay(true)
		}
	}

	const forward = () => {
		if (audioRef.current) audioRef.current.currentTime += 10
	}

	const revert = () => {
		if (audioRef.current) audioRef.current.currentTime -= 10
	}

	useEffect(() => {
		const audio = audioRef.current

		if (!audio) return

		const updateProgress = () => {
			setCurrentTime(audio.currentTime)
			setProgress((audio.currentTime / audioTime) * 100)
		}

		audio.addEventListener('timeupdate', updateProgress)

		return () => {
			audio.removeEventListener('timeupdate', updateProgress)
		}
	}, [audioTime])

	useEffect(() => {
		const audio = audioRef.current

		if (!audio) return

		if (isChangedInput === true) {
			const timeValue = (audioTime * progress) / 100

			setCurrentTime(timeValue)
			audio.currentTime = timeValue
		}

		setIsChangedInput(false)
	}, [isChangedInput])

	return useMemo(
		() => ({
			audioRef,
			audio: {
				play,
				progress
			},
			actions: {
				forward,
				revert,
				toggleAudio,
				setIsChangedInput,
				setProgress
			}
		}),
		[play, progress, audioRef]
	)
}
