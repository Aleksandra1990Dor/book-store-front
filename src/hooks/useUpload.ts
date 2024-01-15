import fileService from '@/services/file.service'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)
	const { mutateAsync } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (file: FormData, folder?: string) =>
			fileService.upload(file, folder),
		onError: error => {
			console.log(error.message)
		},
		onSuccess(data, variables, context) {
			onChange(data?.data[0]?.url)
		}
	})

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append('file', files[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync]
	)

	return useMemo(() => ({ isLoading, uploadFile }), [isLoading, uploadFile])
}
