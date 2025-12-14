import { Search } from 'lucide-react'

import { Plate } from '@/assets'
import { Categories, Foods, Header, Input } from '@/components'

export default function HomePage() {
	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<Header
				className='pb-14'
				overTitle={<Plate className='mx-auto stroke-white' height={48} width={48} />}
				title='Smart menu'
				titleClassName='text-4xl text-center'
			/>
			<Input icon={<Search />} placeholder='Qual comida você está procurando?' type='search' />
			<div className='flex flex-col w-full mt-8 space-y-8 pb-28 overflow-y-auto'>
				<Categories />
				<Foods />
			</div>
		</div>
	)
}
