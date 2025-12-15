'use client'

import { AddField, Textarea, Title } from '@/components'
import type { foodsMock } from '@/mocks'
import { currencyValue } from '@/utils'

type FoodFormProps = {
	food: (typeof foodsMock)[number]
}

export const FoodForm = ({ food }: FoodFormProps) => {
	const hasAdditional = !!food?.additional?.length

	const price = hasAdditional ? `A partir de ${currencyValue(food.price)}` : currencyValue(food.price)

	return (
		<div className='flex flex-col space-y-6 mt-6 px-4 overflow-y-auto pb-28'>
			<div className='flex flex-col space-y-2'>
				<div className='flex flex-col space-y-0.5'>
					<Title className='font-primary text-3xl font-semibold text-black'>{food.title}</Title>
					<p className='text-grey-800 font-secondary'>{price}</p>
				</div>
				<p className='text-grey-800 font-secondary text-lg'> {food.description}</p>
			</div>
			{hasAdditional && (
				<div className='flex flex-col space-y-4'>
					<Title className='font-primary text-xl font-semibold text-grey-800'>Adicionais</Title>
					{food?.additional?.map((add) => (
						<AddField key={add?.product} price={add?.price} product={add?.product} />
					))}
				</div>
			)}
			<div className='flex flex-col space-y-2'>
				<Title className='font-primary text-xl font-semibold text-grey-800'>Observações</Title>
				<Textarea />
			</div>
		</div>
	)
}
