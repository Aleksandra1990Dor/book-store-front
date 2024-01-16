import { Fragment, type FC } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { IBreadCrumbsItem } from './bread-crumbs.interface'
import Link from 'next/link'
import styles from './BreadCrumbs.module.scss'

const BreadCrumbs: FC<{ items: IBreadCrumbsItem[] }> = ({ items }) => {
	return (
		<div className={styles.wrapper}>
			{items.map((item, index) =>
				index !== items.length - 1 ? (
					<Fragment key={index}>
						<Link href={item.href} className={styles.link}>
							{item.text}
						</Link>
						<FaChevronRight className="fill-brown text-0.5sm" />
					</Fragment>
				) : (
					<div key={index} className={styles.link}>
						{item.text}
					</div>
				)
			)}
		</div>
	)
}

export default BreadCrumbs
