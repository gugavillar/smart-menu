import { Card, TitleWithLink } from '@/components/atoms'
import { foodsMock } from '@/mocks'

export const Foods = () => {
	return (
		<div className='flex flex-col space-y-4'>
			<TitleWithLink href='/cardapio' title='Cardápio' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{foodsMock.map((food) => (
					<Card {...food} key={food.title} />
				))}
			</div>
		</div>
	)
}
