'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { useScreen } from 'usehooks-ts'

import { Mass, Meat, Pizza, Snack } from '@/assets'

import { CategoryButton } from '../atoms'

const categories = [
	{
		icon: <Mass />,
		label: 'Massas',
	},
	{
		icon: <Meat />,
		label: 'Carnes',
	},
	{
		icon: <Pizza />,
		label: 'Pizzas',
	},
	{
		icon: <Snack />,
		label: 'Lanches',
	},
]

const slidesPerView = (width: number) => {
	if (width <= 375) {
		return 2.4
	}
	if (width > 375 && width < 640) {
		return 2.8
	}
	if (width >= 640) {
		return 5.6
	}
	return 10
}

export const CategoriesList = () => {
	const screen = useScreen()
	return (
		<Swiper className='flex overflow-hidden w-full' slidesPerView={slidesPerView(screen.width)}>
			{categories?.map((category) => (
				<SwiperSlide key={category.label}>
					<CategoryButton icon={category.icon} label={category.label} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
