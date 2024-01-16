import { useTypedSelector } from '@/hooks/useTypedSelector'
import Link from 'next/link'
import type { FC } from 'react'
import { RiShoppingBasketLine } from 'react-icons/ri'
import styles from '../Header.module.scss'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

const HeaderCart: FC = () => {
	const pathname = usePathname()
	const cartItems = useTypedSelector(state => state.cart.items)

	return (
		<Link
			href="/cart"
			className="flex items-center gap-1 relative"
			aria-label="cart"
		>
			{!!cartItems.length && (
				<div className={styles.cartInfo}>{cartItems.length}</div>
			)}
			<RiShoppingBasketLine
				className={cn(styles.icon, {
					'fill-black hover:fill-brown': !pathname.startsWith('/cart'),
					'fill-brown': pathname.startsWith('/cart')
				})}
			/>
		</Link>
	)
}

export default HeaderCart
