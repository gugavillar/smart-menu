import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Title } from './Title'

type CategoryButtonProps = ComponentProps<'button'> & {
	icon: ReactNode
	label: string
}

export const CategoryButton = ({ icon, label, className, ...props }: CategoryButtonProps) => {
	return (
		<button
			className={twMerge(
				'bg-white-300 flex flex-col items-center justify-between border-grey-400 size-30 py-4 px-7 rounded-xl border',
				className
			)}
			{...props}
		>
			{icon}
			<Title as='h3' className='text-xl font-primary text-grey-800'>
				{label}
			</Title>
		</button>
	)
}
