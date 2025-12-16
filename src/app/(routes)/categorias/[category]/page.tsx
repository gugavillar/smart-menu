import { redirect } from 'next/navigation'

import { BackHeader, Card, Title } from '@/components'
import { foodsMock } from '@/mocks'
import { URLS } from '@/utils'

type Params = {
	params: Promise<{
		category: string
	}>
}

export default async function FilteredCategoryPage({ params }: Params) {
	const { category } = await params

	if (!category) {
		return redirect(URLS.category())
	}

	const groupedFoods = Object.groupBy(foodsMock, (food) => food.categories)
	const categoriesFoods = Object.entries(groupedFoods).map(([key, value]) => ({
		foodCategory: key,
		foods: value,
	}))

	const filteredCategories = categoriesFoods.filter((item) => item.foodCategory.toLocaleLowerCase().includes(category))

	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<BackHeader title={category} />
			<div className='columns-1 md:columns-2 lg:columns-3 space-y-4 overflow-y-auto mt-4 pb-28'>
				{filteredCategories.map((category) => (
					<div className='flex flex-col space-y-2' key={category.foodCategory}>
						<Title className='text-2xl font-secondary text-grey-800'>{category.foodCategory}</Title>
						{category.foods?.map((food) => (
							<Card key={food.title} {...food} />
						))}
					</div>
				))}
			</div>
		</div>
	)
}
