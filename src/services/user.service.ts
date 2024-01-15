import instance from '@/api/api.interceptor'
import { getUsersServerUrl } from '@/config/server-url.config'
import { IUserProfile } from '@/types/user.types'

class UserService {
	async getProfile() {
		const data = await instance.get<IUserProfile>(getUsersServerUrl('/profile'))

		return data.data
	}

	async toggleFavorites(id: number) {
		const data = await instance.patch<string>(
			getUsersServerUrl(`/favorites/${id}`)
		)

		return data.data
	}
}

export default new UserService()
