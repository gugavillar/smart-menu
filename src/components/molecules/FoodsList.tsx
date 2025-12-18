import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Card, Title } from '@/components'
import { foodsMock } from '@/mocks'

type FoodsListProps = ComponentProps<'div'> & {
	category?: string
	showTitle?: boolean
	search?: string
}

export const FoodsList = ({ category, className, showTitle = true, search = '', ...props }: FoodsListProps) => {
	const groupedFoods = Object.groupBy(foodsMock, (food) => food.categories)
	const categoriesFoods = Object.entries(groupedFoods).map(([key, value]) => ({
		foodCategory: key,
		foods: value,
	}))

	const filteredCategories = category
		? categoriesFoods.filter((item) => item.foodCategory.toLocaleLowerCase().includes(category))
		: categoriesFoods

	return (
		<div className={twMerge('overflow-y-auto space-y-4 mt-4 pb-28', className)}>
			{!showTitle
				? foodsMock.map((food) => <Card {...food} key={food.name} />)
				: filteredCategories.map((category) => (
						<div key={category.foodCategory}>
							<Title className='text-2xl font-secondary text-grey-800 mb-1'>{category.foodCategory}</Title>
							<div className='columns-1 md:columns-2 lg:columns-3' {...props}>
								<div className='flex flex-col max-sm:space-y-2' key={category.foodCategory}>
									{category.foods?.map((food) => (
										<Card key={food.name} {...food} />
									))}
								</div>
							</div>
						</div>
					))}
		</div>
	)
}
