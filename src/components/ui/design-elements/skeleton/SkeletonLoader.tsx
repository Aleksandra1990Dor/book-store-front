import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'clsx'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#daaa63"
			highlightColor="#ddb476"
			className={cn('rounded-lg z-3 block', className)}
		/>
	)
}
export default SkeletonLoader
