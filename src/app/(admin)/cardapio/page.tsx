import { Search } from 'lucide-react'

import { BackHeader, Card, Input, Title } from '@/components'
import { foodsMock } from '@/mocks'

export default function MenuPage() {
	const groupedFoods = Object.groupBy(foodsMock, (food) => food.categories)
	const categoriesFoods = Object.entries(groupedFoods).map(([key, value]) => ({
		category: key,
		foods: value,
	}))

	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<BackHeader className='pt-24 pb-16' title='Cardápio' />
			<Input
				icon={<Search className='text-grey-600' />}
				placeholder='Qual comida você está procurando?'
				type='search'
			/>
			<div className='columns-1 md:columns-2 lg:columns-3 space-y-4 overflow-y-auto mt-4 pb-28'>
				{categoriesFoods.map((category) => (
					<div className='flex flex-col space-y-2' key={category.category}>
						<Title className='text-2xl font-secondary text-grey-800'>{category.category}</Title>
						{category.foods?.map((food) => (
							<Card key={food.title} {...food} />
						))}
					</div>
				))}
			</div>
		</div>
	)
}
