import Favorites from '@/components/screens/Favorites/Favorites'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Избранное'
}

export default function FavoritesPage() {
	return <Favorites />
}
