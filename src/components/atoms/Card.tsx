import Image from 'next/image'

import { currencyValue } from '@/utils'

import { Title } from './Title'

type CardProps = {
	title: string
	price: number
	description: string
	image: string
}

export const foodsMock = [
	{
		description: 'Hambúrguer artesanal com carne suculenta, queijo cheddar e pão brioche.',
		image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
		price: 29.9,
		title: 'Hambúrguer Artesanal',
	},
	{
		description: 'Pizza clássica italiana com molho de tomate, muçarela e manjericão fresco.',
		image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
		price: 42.5,
		title: 'Pizza Margherita',
	},
	{
		description: 'Seleção de sushis frescos com salmão, atum e arroz temperado.',
		image: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
		price: 55.0,
		title: 'Sushi Variado',
	},
	{
		description: 'Lasanha tradicional com molho bolonhesa, queijo derretido e massa fresca.',
		image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
		price: 38.0,
		title: 'Lasanha Bolonhesa',
	},
	{
		description: 'Salada Caesar com frango grelhado, croutons e molho especial.',
		image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
		price: 26.5,
		title: 'Salada Caesar',
	},
	{
		description: 'Panquecas fofinhas servidas com frutas frescas e mel.',
		image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b',
		price: 22.0,
		title: 'Panquecas com Frutas',
	},
]

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
