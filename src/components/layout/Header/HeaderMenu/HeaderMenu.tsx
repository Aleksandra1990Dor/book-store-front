import { type FC } from 'react'
import { headerMenuData } from './header-menu.data'
import HeaderMenuItem from './HeaderMenuItem'
import { MdMoreVert } from 'react-icons/md'
import { useOutside } from '@/hooks/useOutside'
import styles from '../Header.module.scss'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import cn from 'clsx'
import { gentium } from '@/app/assets/fonts'

const HeaderMenu: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const { logout } = useActions()
	const { user } = useAuth()

	return (
		<div
			ref={ref}
			className={cn('relative flex items-center', gentium.className)}
		>
			<button aria-label="open menu">
				<MdMoreVert
					onClick={() => setIsShow(!isShow)}
					className={cn(styles.menuIcon, 'fill-black hover:fill-brown')}
				/>
			</button>
			{isShow && (
				<ul className="absolute top-2 right-0.15 w-max" style={{ zIndex: 5 }}>
					{headerMenuData.map((item, index) => (
						<HeaderMenuItem
							href={item.href}
							title={item.title}
							key={index}
							onClick={() => setIsShow(false)}
						/>
					))}
					{!!user && (
						<HeaderMenuItem
							title={'Выйти'}
							onClick={() => {
								logout()
								setIsShow(false)
							}}
						/>
					)}
				</ul>
			)}
		</div>
	)
}

export default HeaderMenu
