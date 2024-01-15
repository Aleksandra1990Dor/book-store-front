import type { Metadata } from 'next'
import './globals.scss'
import { SITE_NAME } from '../constants/constants'
import MainProvider from '@/providers/MainProvider'
import favicon from './assets/icons8-book-30.png'
import { montserrat } from './assets/fonts'
import Header from '@/components/layout/Header/Header'
import MainWrapper from '@/components/layout/MainWrapper/MainWrapper'
import { Toaster } from 'react-hot-toast'
import { Suspense } from 'react'
import Loader from '@/components/ui/Loader'
import Footer from '@/components/layout/Footer/Footer'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Read and listen fresh and classic books online',
	icons: {
		icon: favicon.src
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={montserrat.className} suppressHydrationWarning={true}>
				<MainProvider>
					<Toaster position="top-right" />
					<div className="layout">
						<Header />
						<div className="content">
							<Suspense
								fallback={
									<Loader className="h-15 w-full flex justify-center items-center" />
								}
							>
								<MainWrapper>{children}</MainWrapper>
							</Suspense>
						</div>
						<Footer />
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
