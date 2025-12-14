import { Plus } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Title } from './Title'

type TitleWithLinkProps = ComponentProps<'div'> & {
	title: string
	href: string
}

export const TitleWithLink = ({ title, href, className, ...props }: TitleWithLinkProps) => {
	return (
		<div className={twMerge('flex items-center justify-between', className)} {...props}>
			<Title as='h2' className='text-2xl font-primary text-grey-800'>
				{title}
			</Title>
			<Link className='flex items-center gap-2.5 font-secondary text-base text-grey-700' href={href}>
				Ver mais
				<Plus />
			</Link>
		</div>
	)
}
