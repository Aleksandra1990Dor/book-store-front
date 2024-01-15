import { MouseEvent, useState } from 'react'

export const useFieldType = (type: string) => {
	const [currentType, setCurrentType] = useState(type)

	const ariaLabel =
		type === currentType ? 'Показать пароль' : 'Не показывать пароль'

	const togglePassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		return type === currentType ? setCurrentType('text') : setCurrentType(type)
	}

	return { currentType, ariaLabel, togglePassword }
}
