import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Title } from '@/components/atoms'

type HeaderProps = ComponentProps<'div'> & {
	title: string
	titleClassName?: string
	overTitle?: ReactNode
	underTitle?: ReactNode
}

export const Header = ({ className, title, titleClassName, overTitle, underTitle, ...props }: HeaderProps) => {
	return (
		<div className={twMerge('px-4 pt-12 flex flex-col font-primary', className)} {...props}>
			{overTitle}
			<Title className={titleClassName}>{title}</Title>
			{underTitle}
		</div>
	)
}
