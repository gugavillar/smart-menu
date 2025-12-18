'use client'
import { Search } from 'lucide-react'
import { useState } from 'react'

import { Categories, FoodsList, Input, TitleWithLink } from '@/components'
import { URLS } from '@/utils'

export const SearchHome = () => {
	const [search, setSearch] = useState('')
	return (
		<>
			<Input
				icon={<Search className='text-grey-600' />}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Qual comida você está procurando?'
				type='search'
				value={search}
			/>
			<div className='flex flex-col w-full mt-8 space-y-8 pb-28 overflow-y-auto'>
				<Categories />
				<div className='flex flex-col space-y-4'>
					<TitleWithLink href={URLS.menu} title='Cardápio' />
					<FoodsList className='pb-0 mt-0' search={search} showTitle={false} />
				</div>
			</div>
		</>
	)
}
