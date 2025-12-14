import { Search } from 'lucide-react'

import { Categories, Input } from '@/components'

export default function CatalogPage() {
	return (
		<div className='flex flex-col px-4 mt-22'>
			<Input icon={<Search />} placeholder='Qual comida você está procurando?' type='search' />
			<Categories />
		</div>
	)
}
