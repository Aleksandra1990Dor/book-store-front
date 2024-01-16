import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'clsx'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#eae1d4"
			highlightColor="#f8f3ed"
			className={cn('rounded-lg z-3 block', className)}
		/>
	)
}
export default SkeletonLoader
