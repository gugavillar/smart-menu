import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Bell } from '@/assets'

export const OrderButton = ({ className, ...props }: ComponentProps<'button'>) => {
	return (
		<button
			className={twMerge(
				'flex items-center justify-center rounded-full bg-primary-500 min-h-18 min-w-18 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		>
			<Bell className='size-10 text-white' />
		</button>
	)
}
