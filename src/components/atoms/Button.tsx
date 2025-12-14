import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'> & {
	label: string
	icon?: ReactNode
}

export const Button = ({ label, icon, className, ...props }: ButtonProps) => {
	return (
		<button
			className={twMerge(
				'w-full p-4 inline-flex items-center justify-center gap-x-4 text-sm font-medium rounded-xl border border-transparent bg-primary-500 text-white hover:bg-primary-900 focus:outline-hidden focus:bg-primary-900 disabled:opacity-50 disabled:pointer-events-none drop-shadow-lg',
				className
			)}
			{...props}
		>
			{icon}
			{label}
		</button>
	)
}
