import { Search } from 'lucide-react'

import { Categories, Input } from '@/components'
import { Foods } from '@/components/molecules/Foods'

export default function CatalogPage() {
	return (
		<div className='flex flex-col px-4 mt-14 overflow-y-hidden'>
			<Input icon={<Search />} placeholder='Qual comida você está procurando?' type='search' />
			<div className='flex flex-col w-full mt-8 space-y-8 pb-28 overflow-y-auto'>
				<Categories />
				<Foods />
			</div>
		</div>
	)
}
