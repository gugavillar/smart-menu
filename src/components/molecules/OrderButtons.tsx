'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

import { AddButton, PlusMinusField } from '@/components'
import { type Order, useOrders } from '@/contexts'

import type { FoodFormSchema } from '../organisms/FoodForm/FoodForm.schema'

const calculateTotal = (values: FoodFormSchema) => {
	const { additional, price, quantity } = values
	const additionalTotal = additional?.reduce((acc, values) => {
		return acc + values.quantity * values.price
	}, 0)
	return additionalTotal + price * quantity
}

export const OrderButtons = () => {
	const { handleAddOrder } = useOrders()
	const { back } = useRouter()
	const { watch } = useFormContext<FoodFormSchema>()
	const quantity = watch('quantity')
	const total = calculateTotal(watch())

	const onAddOrder = () => {
		const values = { ...watch(), total }
		handleAddOrder(values as Order)
		back()
	}

	return (
		<div className='w-full flex items-end px-4 pb-4 h-24 bg-white-300 absolute bottom-0 z-10'>
			<div className='flex w-full gap-x-4 items-center justify-between'>
				<PlusMinusField
					className='border border-primary-500 rounded-xl h-12 w-3xs justify-evenly'
					disabledValue={1}
					fieldName='quantity'
					initialCount={quantity}
				/>
				<AddButton onClick={onAddOrder} total={total} />
			</div>
		</div>
	)
}
