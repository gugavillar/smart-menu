import { redirect } from 'next/navigation'

import { BackHeader, FoodsList } from '@/components'
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

	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<BackHeader title={category} />
			<FoodsList category={category} />
		</div>
	)
}
