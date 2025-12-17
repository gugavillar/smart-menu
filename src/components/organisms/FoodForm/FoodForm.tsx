'use client'

import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { AddField, Textarea, Title } from '@/components'
import type { foodsMock } from '@/mocks'
import { currencyValue } from '@/utils'

import type { FoodFormSchema } from './FoodForm.schema'

type FoodFormProps = {
	food: (typeof foodsMock)[number]
}

export const FoodForm = ({ food }: FoodFormProps) => {
	const { register, reset, control } = useFormContext<FoodFormSchema>()
	const { fields } = useFieldArray({
		control,
		name: 'additional',
	})
	const hasAdditional = !!food?.additional?.length

	const price = hasAdditional ? `A partir de ${currencyValue(food.price)}` : currencyValue(food.price)

	useEffect(() => {
		if (!food) return
		reset((prev) => ({
			...prev,
			additional:
				food?.additional?.map((add) => ({
					id: add.id,
					price: add.price,
					product: add.product,
					quantity: 0,
				})) ?? [],
			id: food.id,
			image: food.image,
			name: food.name,
			price: food.price,
		}))
	}, [food, reset])

	return (
		<div className='flex flex-col space-y-6 mt-6 px-4 overflow-y-auto pb-40'>
			<div className='flex flex-col space-y-2'>
				<div className='flex flex-col space-y-0.5'>
					<Title className='font-primary text-3xl font-semibold text-black'>{food.name}</Title>
					<p className='text-grey-800 font-secondary'>{price}</p>
				</div>
				<p className='text-grey-800 font-secondary text-lg'> {food.description}</p>
			</div>
			{hasAdditional && (
				<div className='flex flex-col space-y-4'>
					<Title className='font-primary text-xl font-semibold text-grey-800'>Adicionais</Title>
					{fields?.map((add, index) => (
						<AddField
							fieldName={`additional.${index}.quantity`}
							key={add?.product}
							price={add?.price}
							product={add?.product}
						/>
					))}
				</div>
			)}
			<div className='flex flex-col space-y-2'>
				<Title className='font-primary text-xl font-semibold text-grey-800'>Observações</Title>
				<Textarea {...register('observation')} />
			</div>
		</div>
	)
}
