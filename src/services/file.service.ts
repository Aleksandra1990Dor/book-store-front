import { axiosClassic } from '@/api/api.interceptor'
import { getFilesServerUrl } from '@/config/server-url.config'
import { IFileResponse } from '@/types/file.types'

export class FileService {
	upload(file: FormData, folder?: string) {
		return axiosClassic.post<IFileResponse[]>(getFilesServerUrl(), file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}

const fileService = new FileService()

export default fileService
