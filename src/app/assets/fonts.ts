import { Gentium_Book_Plus, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '900'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-montserrat'
})

const gentium = Gentium_Book_Plus({
	weight: ['400', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-gentium'
})

export { montserrat, gentium }
