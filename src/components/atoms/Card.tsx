'use client'
import type { UUID } from 'crypto'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { currencyValue, URLS } from '@/utils'

import { Title } from './Title'

type CardProps = {
	title: string
	price: number
	description: string
	image: string
	id: UUID
}

export const Card = ({ title, price, description, image, id }: CardProps) => {
	const [imageError, setImageError] = useState(false)
	return (
		<Link className='bg-white-300 border border-grey-400 rounded-xl shadow-2xs flex h-[136px]' href={URLS.menu(id)}>
			<div className='relative w-full rounded-tl-lg rounded-bl-lg overflow-hidden max-w-[136px] h-full'>
				<Image
					alt={title}
					className='size-full absolute top-0 start-0 object-cover'
					height={136}
					onError={() => setImageError(true)}
					src={imageError ? '/fallback-img.png' : image}
					width={560}
				/>
			</div>
			<div className='flex flex-wrap w-full'>
				<div className='p-4 flex flex-col size-full space-y-2'>
					<Title className='font-primary text-black'>{title}</Title>
					<p className='font-secondary text-xs text-grey-800 line-clamp-2'>{description}</p>
					<div className='mt-auto'>
						<p className='font-primary text-lg text-secondary-500 text-end font-semibold'>{currencyValue(price)}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
