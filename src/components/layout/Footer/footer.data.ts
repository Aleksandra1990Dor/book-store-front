import { FaHeadphones } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { IoIosPeople } from 'react-icons/io'
import { PiNotebookDuotone } from 'react-icons/pi'
import { IconType } from 'react-icons'
import { TfiHeadphone } from 'react-icons/tfi'
import { GiBookshelf } from 'react-icons/gi'
import { GoPeople } from 'react-icons/go'

interface IDataItem {
	href: string
	Icon: IconType
	ariaLabel: string
}

export const footerMenuData: IDataItem[] = [
	{ href: '/books', Icon: GiBookshelf, ariaLabel: 'Книги' },
	{ href: '/categories', Icon: PiNotebookDuotone, ariaLabel: 'Категории' },
	{ href: '/audio', Icon: TfiHeadphone, ariaLabel: 'АудиоКниги' },
	{ href: '/authors', Icon: GoPeople, ariaLabel: 'Авторы' }
]
