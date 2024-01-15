import { Metadata } from 'next'
import Link from 'next/link'
import cn from 'clsx'
import { gentium } from './assets/fonts'

export const metadata: Metadata = {
	title: 'Страница не найдена'
}

export default function NotFound() {
	return (
		<div
			className={cn(
				'px-2 py-4 flex flex-col items-center gap-1 text-base text-black',
				gentium.className
			)}
		>
			<h2 className="text-brown font-bold leading-none text-2xl uppercase">
				Not Found
			</h2>
			<p>Страница не найдена.</p>
			<Link href="/" className="text-gray underline">
				Вернуться на главную страницу
			</Link>
		</div>
	)
}
