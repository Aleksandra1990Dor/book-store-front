import { useProfile } from '@/hooks/useProfile'
import type { FC } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import cn from 'clsx'
import toast from 'react-hot-toast'
import { toastSuccess } from '@/app/assets/toast-styles'

interface IFavoriteButton {
	bookId: number
	className: string
}

const FavoriteButton: FC<IFavoriteButton> = ({ bookId, className }) => {
	const { favoriteBooks, mutateAsync, isPending } = useProfile()
	const isFavorite = favoriteBooks?.some(book => book.id === bookId)

	return (
		<button
			className={cn('absolute', className)}
			aria-label="add to favorites"
			onClick={() =>
				toast.promise(
					mutateAsync(bookId),
					{
						loading: 'Сохряняем изменения...',
						success: 'Изменения сохранены.',
						error: 'Что-то пошло не так!'
					},
					toastSuccess
				)
			}
		>
			{isFavorite ? (
				<IoMdHeart className="fill-brown text-lg lg:text-base" />
			) : (
				<IoMdHeartEmpty className="fill-brown text-lg lg:text-base" />
			)}
		</button>
	)
}

export default FavoriteButton
