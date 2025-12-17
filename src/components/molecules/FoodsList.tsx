import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Card, Title } from '@/components/atoms'
import { foodsMock } from '@/mocks'

type FoodsListProps = ComponentProps<'div'> & {
	category?: string
}

export const FoodsList = ({ category, className, ...props }: FoodsListProps) => {
	const groupedFoods = Object.groupBy(foodsMock, (food) => food.categories)
	const categoriesFoods = Object.entries(groupedFoods).map(([key, value]) => ({
		foodCategory: key,
		foods: value,
	}))

	const filteredCategories = category
		? categoriesFoods.filter((item) => item.foodCategory.toLocaleLowerCase().includes(category))
		: categoriesFoods

	return (
		<div
			className={twMerge('columns-1 md:columns-2 lg:columns-3 space-y-4 overflow-y-auto mt-4 pb-28', className)}
			{...props}
		>
			{filteredCategories.map((category) => (
				<div className='flex flex-col space-y-2' key={category.foodCategory}>
					<Title className='text-2xl font-secondary text-grey-800'>{category.foodCategory}</Title>
					{category.foods?.map((food) => (
						<Card key={food.name} {...food} />
					))}
				</div>
			))}
		</div>
	)
}
