import { useUpload } from '@/hooks/useUpload'
import type { FC } from 'react'
import styles from './FileField.module.scss'

interface IFileField {
	placeholder: string
	value: string
	error?: string
	folder: string
	onChange: (...event: any[]) => void
}

const FileField: FC<IFileField> = ({
	onChange,
	placeholder,
	value,
	error,
	folder
}) => {
	const { uploadFile } = useUpload(onChange, folder)
	return (
		<div className={styles.fileField}>
			<span>{placeholder}</span>
			<label>
				{value ? value : 'Выберите фото...'}
				<input type="file" onChange={uploadFile} />
			</label>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default FileField
