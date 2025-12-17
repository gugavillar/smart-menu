'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import type { foodsMock } from '@/mocks'
import { currencyValue, URLS } from '@/utils'

import { Title } from './Title'

type CardProps = (typeof foodsMock)[number]

export const Card = ({ name, price, description, image, id }: CardProps) => {
	const [imageError, setImageError] = useState(false)
	return (
		<Link className='bg-white-300 border border-grey-400 rounded-xl shadow-2xs flex h-[136px]' href={URLS.order(id)}>
			<div className='relative w-full rounded-tl-lg rounded-bl-lg overflow-hidden max-w-[136px] h-full'>
				<Image
					alt={name}
					className='size-full absolute top-0 start-0 object-cover'
					height={136}
					onError={() => setImageError(true)}
					src={imageError ? '/fallback-img.png' : image}
					width={560}
				/>
			</div>
			<div className='flex flex-wrap w-full'>
				<div className='p-4 flex flex-col size-full space-y-2'>
					<Title className='font-primary text-black'>{name}</Title>
					<p className='font-secondary text-xs text-grey-800 line-clamp-2'>{description}</p>
					<div className='mt-auto'>
						<p className='font-primary text-lg text-secondary-500 text-end font-semibold'>{currencyValue(price)}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
