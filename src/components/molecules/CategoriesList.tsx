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
		return 3.1
	}
	if (width >= 640 && width < 1024) {
		return 5.4
	}
	if (width >= 1024 && width < 1440) {
		return 7.4
	}
	return 10.4
}

export const CategoriesList = () => {
	const screen = useScreen()
	return (
		<Swiper className='flex overflow-hidden w-full' slidesPerView={slidesPerView(screen?.width ?? 375)}>
			{categories?.map((category, index) => (
				<SwiperSlide key={`${index}-${category.label}`}>
					<CategoryButton icon={category.icon} label={category.label} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
