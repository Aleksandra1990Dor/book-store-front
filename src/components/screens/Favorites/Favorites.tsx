'use client'
import { gentium } from '@/app/assets/fonts'
import { useProfile } from '@/hooks/useProfile'
import type { FC } from 'react'
import cn from 'clsx'
import BooksList from '@/components/ui/books-list/BooksList'
import { getFavoritesBreadCrumbs } from '@/utils/get-bread-crumbs'
import BreadCrumbs from '@/components/ui/bread-crumbs/BreadCrumbs'
import Loader from '@/components/ui/Loader'

const Favorites: FC = () => {
	const { favoriteBooks, isLoading } = useProfile()
	return (
		<div className={cn('pb-3 px-2', gentium.className)}>
			<BreadCrumbs items={getFavoritesBreadCrumbs()} />
			<div className="lg:px-2">
				<h2 className="font-bold text-black text-xl leading-none mb-2">
					Избранное:
				</h2>
				<div className="flex items-center text-gray text-base">
					{isLoading ? (
						<div className="p-2">
							<Loader />
						</div>
					) : !!favoriteBooks?.length ? (
						<BooksList books={favoriteBooks} />
					) : (
						<div className="mb-4">
							Добавьте в избранное книги, которые вас заинтересовали...
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Favorites
