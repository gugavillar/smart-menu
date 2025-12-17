import { redirect } from 'next/navigation'

import { FoodForm, HeaderMenuItem } from '@/components'
import { foodsMock } from '@/mocks'
import { URLS } from '@/utils'

type Params = {
	params: Promise<{
		id: string
	}>
}

export default async function MenuItemPage({ params }: Params) {
	const { id } = await params

	if (!id) {
		return redirect(URLS.menu)
	}

	const food = foodsMock.find((food) => food.id === id)

	if (!food) {
		return redirect(URLS.menu)
	}

	return (
		<div className='flex flex-col overflow-y-hidden'>
			<HeaderMenuItem image={food.image} title={food.name} />
			<FoodForm food={food} />
		</div>
	)
}
