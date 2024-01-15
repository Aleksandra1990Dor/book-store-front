'use client'

import { useState, type FC, MouseEvent, KeyboardEvent } from 'react'
import { IoSearch } from 'react-icons/io5'
import styles from './SearchField.module.scss'
import { useRouter } from 'next/navigation'

const SearchField: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const { push } = useRouter()
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			push(`/explorer?searchTerm=${searchTerm}`)
		}
	}

	return (
		<div className={styles.wrapper}>
			<IoSearch className={styles.icon} />
			<label>
				<input
					className={styles.input}
					type="search"
					placeholder="Поиск"
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
			</label>
		</div>
	)
}

export default SearchField
