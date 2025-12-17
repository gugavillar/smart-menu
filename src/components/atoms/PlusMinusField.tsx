'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import type { FoodFormSchema } from '../organisms/FoodForm/FoodForm.schema'

type PlusMinusFieldProps = ComponentProps<'div'> & {
	initialCount?: number
	fieldName: 'quantity' | `additional.${number}.quantity`
	disabledValue?: number
}

export const PlusMinusField = ({
	initialCount = 0,
	fieldName,
	disabledValue = 0,
	className,
	...props
}: PlusMinusFieldProps) => {
	const { control, watch } = useFormContext<FoodFormSchema>()
	const quantity = watch(fieldName)

	return (
		<div className={twMerge('flex items-center justify-center gap-2', className)} {...props}>
			<Controller
				control={control}
				name={fieldName}
				render={({ field }) => (
					<button
						className='text-primary-500 disabled:text-grey-800 p-2'
						disabled={field.value === disabledValue}
						onClick={() => field.onChange(field.value - 1)}
						type='button'
					>
						<MinusIcon />
					</button>
				)}
			/>
			<span className='text-xl'>{quantity}</span>
			<Controller
				control={control}
				name={fieldName}
				render={({ field }) => (
					<button className='text-primary-500 p-2' onClick={() => field.onChange(field.value + 1)} type='button'>
						<PlusIcon />
					</button>
				)}
			/>
		</div>
	)
}
