import type { FC } from 'react'
import cn from 'clsx'
import { montserrat } from '@/app/assets/fonts'

interface IButton {
	text: string
	size: 'small' | 'large'
	variant: 'color' | 'transparent'
	onClick?: () => void
	disabled?: boolean
}

const Button: FC<IButton> = ({ text, size, variant, onClick, disabled }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(
				'cursor-pointer rounded-full px-0.75 py-0.3 w-max transition-all duration-200 active:opacity-70 lg:hover:-translate-y-translate active:translate-y-0 ',
				montserrat.className,
				{
					'text-base leading-none lg:text-0.5-sm': size === 'small',
					'text-lg lg:text-sm font-semibold px-1 rounded-xl py-0.4':
						size === 'large',
					'border border-light-brown text-light-brown max-lg:active:bg-light-brown lg:hover:bg-light-brown lg:hover:text-white max-lg:active:text-white':
						variant === 'transparent',
					'bg-light-brown text-white lg:hover:bg-brown max-lg:active:bg-brown':
						variant === 'color'
				}
			)}
			aria-label={text}
		>
			{text}
		</button>
	)
}

export default Button
