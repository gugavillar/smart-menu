'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Header } from '@/components'

type BackHeaderProps = {
	title: string
}

export const BackHeader = ({ title }: BackHeaderProps) => {
	const { back } = useRouter()
	return (
		<Header
			className='py-24 flex flex-row items-center justify-between'
			overTitle={
				<button className='inline-flex items-center text-white-300 text-lg font-secondary' onClick={back} type='button'>
					<ChevronLeft className='text-white-300' size={32} />
					Voltar
				</button>
			}
			title={title}
			titleClassName='text-2xl text-center first-letter:uppercase'
		/>
	)
}
