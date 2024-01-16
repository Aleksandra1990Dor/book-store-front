'use client'

import { gentium } from '@/app/assets/fonts'
import GalleryItem from '@/components/ui/gallery/GalleryItem'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import cn from 'clsx'
import Image from 'next/image'
import Loader from '@/components/ui/Loader'
import { getImageUrl } from '@/config/image-url.config'
import { formatDate } from '@/utils/format-date'

const Profile: FC = () => {
	const { user } = useAuth()
	const { push } = useRouter()
	if (!user) push('/auth')

	const { profile, favoriteBooks, isLoading } = useProfile()

	return (
		<div className={cn('px-0 lg:px-2 mb-1 py-1', gentium.className)}>
			{/* main */}
			{isLoading ? (
				<div className="p-2 mx-auto w-max">
					<Loader />
				</div>
			) : (
				<div
					className="flex flex-col gap-3 lg:grid px-2"
					style={{ gridTemplateColumns: '20% 1fr' }}
				>
					<div className="flex items-center flex-col gap-1 pt-1 mb-2 lg:mb-0">
						<Image
							src={getImageUrl(profile?.avatarPath as string) || ''}
							height={200}
							width={200}
							alt={profile?.name || ''}
							className="rounded-full border border-brown h-7 w-7 object-cover"
						/>
						<h2 className="font-bold text-brown underline text-xl lg:text-lg leading-none mb-0.5">
							{profile?.email}
						</h2>
					</div>
					<div className="ml-0 lg:ml-6">
						<div className="flex flex-col gap-3 lg:gap-1 h-max mb-1">
							<h2 className="font-bold text-black text-xl leading-none">
								Заказы:
							</h2>
							{profile?.orders ? (
								<ul className="mb-2 w-full lg:w-3/4 flex flex-col gap-0.15">
									{profile?.orders.slice(0, 3).map(order => (
										<li
											key={order.id}
											className="flex gap-1 justify-between items-center list-none border border-bg-color rounded-xl px-1 py-0.3 leading-none text-brown text-0.5-base"
										>
											<h4>
												Заказ
												<span className="text-0.5-lg underline px-0.3">
													#{order.id}
												</span>
											</h4>
											<div>{formatDate(order.createdAt)}</div>
										</li>
									))}
								</ul>
							) : (
								<div className="text-gray text-0.5-base ml-0.5">
									У вас еще нет оформленных заказов...
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 lg:gap-1 h-max">
							<h2 className="font-bold text-black text-xl leading-none">
								Избранное:
							</h2>
							{favoriteBooks?.length ? (
								<div className="flex flex-wrap h-max">
									{favoriteBooks.slice(0, 2).map(book => (
										<GalleryItem book={book} key={book.id} className="h-max" />
									))}
								</div>
							) : (
								<div className="text-gray text-0.5-base ml-0.5">
									Добавьте в избранное книги, которые вас заинтересовали...
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Profile
