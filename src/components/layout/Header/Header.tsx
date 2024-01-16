'use client'

import HeaderButton from './HederButton/HeaderButton'
import { ImBooks } from 'react-icons/im'
import { FaHeadphones } from 'react-icons/fa'
import { useState, type FC } from 'react'
import styles from './Header.module.scss'
import { usePathname } from 'next/navigation'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import HeaderCart from './HeaderCart/HeaderCart'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import { LuUserPlus } from 'react-icons/lu'
import { useAuth } from '@/hooks/useAuth'
import { getImageUrl } from '@/config/image-url.config'
import cn from 'clsx'
import SkeletonLoader from '@/components/ui/design-elements/skeleton/SkeletonLoader'

const Header: FC = () => {
	const [isImageLoading, setIsImageLoading] = useState(false)
	const pathname = usePathname()
	const { user } = useAuth()
	const isAudio = pathname.startsWith('/audio') ? true : false

	return (
		<header className={styles.header}>
			<div>
				<Link href="/">
					<h2 className={styles.logo}>Books</h2>
				</Link>
			</div>
			<div className={styles.buttons}>
				<HeaderButton href="/" isChecked={!isAudio} title="Книги">
					<ImBooks className="text-lg" />
				</HeaderButton>
				<HeaderButton href="/audio" isChecked={isAudio} title="АудиоКниги">
					<FaHeadphones className="text-lg" />
				</HeaderButton>
			</div>
			<div className="flex items-center gap-0.75">
				{!!user && (
					<Link href="/favorites" aria-label="favorites">
						<MdOutlineBookmarkBorder
							className={cn(styles.icon, {
								'fill-black hover:fill-brown':
									!pathname.startsWith('/favorites'),
								'fill-brown': pathname.startsWith('/favorites')
							})}
						/>
					</Link>
				)}
				<HeaderCart />
				{!user ? (
					<Link href="/auth" aria-label="auth">
						<LuUserPlus
							className={cn(styles.userIcon, 'text-black hover:text-brown')}
						/>
					</Link>
				) : (
					<Link href="/profile" aria-label="profile">
						<div className="w-2.5 h-2.5 relative lg:h-1.3 lg:w-1.3 overflow-hidden rounded-full">
							{isImageLoading && (
								<SkeletonLoader
									containerClassName="absolute top-0 left-0 block w-full h-full"
									className="w-full h-full"
									count={1}
								/>
							)}
							<Image
								src={getImageUrl(user.avatarPath)}
								width={30}
								height={30}
								alt="Picture of the author"
								className={styles.img}
								onLoadStart={() => setIsImageLoading(true)}
								onLoadingComplete={() => setIsImageLoading(false)}
							/>
						</div>
					</Link>
				)}
				<HeaderMenu />
			</div>
		</header>
	)
}

export default Header
