'use client'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import type { UUID } from 'node:crypto'

import { currencyValue, URLS } from '@/utils'

import { Title } from './Title'

type CardProps = {
	name: string
	price: number
	description?: string
	image: string
	id: UUID
	disabled?: boolean
	handleRemove?: VoidFunction
	quantity?: number
	observation?: string
	added?: string
}

export const Card = ({
	name,
	price,
	description,
	image,
	id,
	disabled,
	handleRemove,
	quantity,
	observation,
	added,
}: CardProps) => {
	const [imageError, setImageError] = useState(false)
	return (
		<Link
			className='bg-white-300 border border-grey-400 rounded-xl shadow-2xs flex h-[136px]'
			href={disabled ? '' : URLS.order(id)}
		>
			<div className='relative w-full rounded-tl-lg rounded-bl-lg overflow-hidden min-w-[136px] max-w-[136px] h-full'>
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
					<div className='flex items-center justify-between gap-4'>
						<Title className='font-primary text-black'>{name}</Title>
						{handleRemove && (
							<button onClick={handleRemove} type='button'>
								<Trash className='text-primary-500' />
							</button>
						)}
					</div>
					<div className='flex flex-col space-y-0.5'>
						{description && (
							<p className='font-secondary text-xs text-grey-800 line-clamp-2 wrap-anywhere'> {description}</p>
						)}
						{added && <p className='font-secondary text-xs text-grey-800 line-clamp-2 wrap-anywhere'>{added}</p>}
						{observation && (
							<p className='font-secondary text-xs text-grey-800 line-clamp-2 wrap-anywhere'>{observation}</p>
						)}
					</div>
					<div className='mt-auto flex items-center gap-2'>
						{quantity && <p className='font-primary font-semibold'>Qtd. {quantity}</p>}
						<p className='font-primary text-lg text-secondary-500 ml-auto font-semibold'>{currencyValue(price)}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
