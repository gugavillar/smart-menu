'use client'
import Link, { type LinkProps } from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Bell } from '@/assets'
import { useOrders } from '@/contexts'

export const OrderButton = ({ className, ...props }: LinkProps & { className: string }) => {
	const { orders } = useOrders()
	const count = orders.length

	return (
		<Link
			className={twMerge(
				'relative flex items-center justify-center rounded-full bg-primary-500 min-h-18 min-w-18 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		>
			<Bell className='size-10 text-white' />
			{count > 0 && (
				<span className='absolute top-2 end-2 inline-flex items-center py-0.5 px-2 text-sm font-medium transform -translate-y-1/2 translate-x-1/2 text-white bg-secondary-500 rounded-full font-secondary'>
					{count}
				</span>
			)}
		</Link>
	)
}
