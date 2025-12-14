import { redirect } from 'next/navigation'

import { HeaderMenuItem, Title } from '@/components'
import { foodsMock } from '@/mocks'
import { currencyValue, URLS } from '@/utils'

type Params = {
	params: Promise<{
		id: string
	}>
}

export default async function MenuItemPage({ params }: Params) {
	const { id } = await params

	if (!id) {
		return redirect(URLS.menu())
	}

	const food = foodsMock.find((food) => food.id === id)

	if (!food) {
		return redirect(URLS.menu())
	}

	return (
		<div className='flex flex-col overflow-y-hidden'>
			<HeaderMenuItem image={food.image} title={food.title} />
			<div className='flex flex-col space-y-6 mt-6 px-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex flex-col space-y-0.5'>
						<Title className='font-primary text-3xl font-semibold text-black'>{food.title}</Title>
						<p className='text-grey-800 font-secondary'>A partir de {currencyValue(food.price)}</p>
					</div>
					<p className='text-grey-800 font-secondary text-lg'> {food.description}</p>
				</div>
				<div className='flex flex-col space-y-4'>
					<Title className='font-primary text-xl font-semibold text-grey-800'>Adicionais</Title>
				</div>
			</div>
		</div>
	)
}
