import type { FC } from 'react'
import styles from './Table.module.scss'

const Table: FC = () => {
	return (
		<>
			<div className={styles.table}></div>
			<div className={styles.tableBorder}></div>
		</>
	)
}

export default Table
