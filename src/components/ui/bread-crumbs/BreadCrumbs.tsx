import { Fragment, type FC } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { IBreadCrumbsItem } from './bread-crumbs.interface'
import Link from 'next/link'

const BreadCrumbs: FC<{ items: IBreadCrumbsItem[] }> = ({ items }) => {
	return (
		<div className="flex items-center text-0.5-base text-gray gap-0.3 my-1">
			{items.map((item, index) =>
				index !== items.length - 1 ? (
					<Fragment key={index}>
						<Link href={item.href} className="hover:text-brown">
							{item.text}
						</Link>
						<FaChevronRight className="fill-brown text-0.5sm" />
					</Fragment>
				) : (
					<div key={index}>{item.text}</div>
				)
			)}
		</div>
	)
}

export default BreadCrumbs
