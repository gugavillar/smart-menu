import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type LinkButtonProps = LinkProps & {
	className?: string
	path: string
	label: string
	icon: ReactNode
}

export const LinkButton = ({ className, path, label, href, icon }: LinkButtonProps) => {
	return (
		<Link
			className={twMerge('flex items-center gap-2 text-grey-700', path === href && 'text-primary-500', className)}
			href={href}
			type='button'
		>
			{icon}
			{label}
		</Link>
	)
}
