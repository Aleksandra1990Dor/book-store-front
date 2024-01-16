import type { FC } from 'react'
import { footerMenuData } from './footer.data'
import Link from 'next/link'

const Footer: FC = () => {
	return (
		<footer className="footer">
			<nav className="flex justify-between items-center w-full px-2">
				{footerMenuData.map(({ Icon, ...item }) => (
					<Link
						href={item.href}
						key={item.href}
						aria-label={item.ariaLabel}
						className="block text-4xl"
					>
						<Icon />
					</Link>
				))}
			</nav>
		</footer>
	)
}

export default Footer
