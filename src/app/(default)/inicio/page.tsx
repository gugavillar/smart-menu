import { Plate } from '@/assets'
import { Header } from '@/components'
import { SearchHome } from '@/components/organisms/SeachHome/SearchHome'

export default function HomePage() {
	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<Header
				className='pb-14'
				overTitle={<Plate className='mx-auto stroke-white' height={48} width={48} />}
				title='Smart menu'
				titleClassName='text-4xl text-center'
			/>
			<SearchHome />
		</div>
	)
}
