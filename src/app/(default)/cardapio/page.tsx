import { Search } from 'lucide-react'

import { BackHeader, FoodsList, Input } from '@/components'

export default function MenuPage() {
	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<BackHeader className='pt-24 pb-16' title='Cardápio' />
			<Input
				icon={<Search className='text-grey-600' />}
				placeholder='Qual comida você está procurando?'
				type='search'
			/>
			<FoodsList />
		</div>
	)
}
