import { Card, TitleWithLink } from '@/components'
import { foodsMock } from '@/mocks'
import { URLS } from '@/utils'

export const Foods = () => {
	return (
		<div className='flex flex-col space-y-4'>
			<TitleWithLink href={URLS.menu} title='Cardápio' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{foodsMock.map((food) => (
					<Card {...food} key={food.name} />
				))}
			</div>
		</div>
	)
}
