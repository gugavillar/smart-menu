'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Header } from '@/components/organisms'

type BackHeaderProps = {
	title: string
}

export const BackHeader = ({ title }: BackHeaderProps) => {
	const { back } = useRouter()
	return (
		<Header
			className='py-24 flex flex-row items-center justify-between'
			overTitle={
				<button className='p-2 inline-flex items-center text-white-300 text-lg font-secondary' type='button'>
					<ChevronLeft className='text-white-300' onClick={back} size={32} />
					Voltar
				</button>
			}
			title={title}
			titleClassName='text-2xl text-center'
		/>
	)
}
