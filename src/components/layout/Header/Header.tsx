'use client'

import HeaderButton from './HederButton/HeaderButton'
import { ImBooks } from 'react-icons/im'
import { FaHeadphones } from 'react-icons/fa'
import type { FC } from 'react'
import styles from './Header.module.scss'
import { usePathname } from 'next/navigation'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import { IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import HeaderCart from './HeaderCart/HeaderCart'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import { LuUserPlus } from 'react-icons/lu'
import { useAuth } from '@/hooks/useAuth'
import { getImageUrl } from '@/config/image-url.config'
import cn from 'clsx'

const Header: FC = () => {
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
							className={cn(styles.userIcon, {
								'text-black hover:text-brown': !pathname.startsWith('/auth'),
								'text-brown': pathname.startsWith('/auth')
							})}
						/>
					</Link>
				) : (
					<Link href="/profile" aria-label="profile">
						<Image
							src={getImageUrl(user.avatarPath)}
							width={30}
							height={30}
							alt="Picture of the author"
							className={styles.img}
						/>
					</Link>
				)}
				<HeaderMenu />
			</div>
		</header>
	)
}

export default Header
