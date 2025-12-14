'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Header } from '@/components'

type BackHeaderProps = ComponentProps<'div'> & {
	title: string
}

export const BackHeader = ({ title, className, ...props }: BackHeaderProps) => {
	const { back } = useRouter()
	return (
		<Header
			className={twMerge('py-24 flex flex-row items-center justify-between', className)}
			overTitle={
				<button className='inline-flex items-center text-white-300 text-lg font-secondary' onClick={back} type='button'>
					<ChevronLeft className='text-white-300' size={32} />
					Voltar
				</button>
			}
			title={title}
			titleClassName='text-2xl text-center first-letter:uppercase'
			{...props}
		/>
	)
}
