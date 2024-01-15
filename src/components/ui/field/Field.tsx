'use client'
import { forwardRef, type FC } from 'react'
import styles from './Field.module.scss'
import cn from 'clsx'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { useFieldType } from './useFieldType'

interface IField {
	type?: string
	label: string
	placeholder: string
	className?: string
	error?: string
}

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type = 'text', className, error, label, ...rest }, ref) => {
		const { ariaLabel, currentType, togglePassword } = useFieldType(type)

		return (
			<div className={cn(className, styles.field)}>
				<label>
					<span>{label}</span>
					<input
						type={currentType}
						placeholder={placeholder}
						{...rest}
						ref={ref}
					/>
					{type === 'password' && (
						<button
							aria-label={ariaLabel}
							onClick={e => togglePassword(e)}
							className="absolute right-0.75 top-2"
						>
							{currentType === type ? <LuEyeOff /> : <LuEye />}
						</button>
					)}
				</label>
				{error && <div className={styles.error}>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
