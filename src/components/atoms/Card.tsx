import Image from 'next/image'

import { currencyValue } from '@/utils'

import { Title } from './Title'

type CardProps = {
	title: string
	price: number
	description: string
	image: string
}

export const Card = ({ title, price, description, image }: CardProps) => {
	return (
		<div className='bg-white-300 border border-grey-400 rounded-xl shadow-2xs flex h-[136px]'>
			<div className='relative w-full rounded-tl-lg rounded-bl-lg overflow-hidden max-w-[136px] h-full'>
				<Image
					alt='Card Image'
					className='size-full absolute top-0 start-0 object-cover'
					height={136}
					src={image}
					width={560}
				/>
			</div>
			<div className='flex flex-wrap w-full'>
				<div className='p-4 flex flex-col size-full space-y-2'>
					<Title className='font-primary text-lg text-black'>{title}</Title>
					<p className='font-secondary text-xs text-grey-800 line-clamp-2'>{description}</p>
					<div className='mt-auto'>
						<p className='font-primary text-lg text-secondary-500 text-end font-semibold'>{currencyValue(price)}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
