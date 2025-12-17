'use client'
import { FormProvider, useForm } from 'react-hook-form'

import { OrderButton, OrderButtons } from '@/components'
import type { FoodFormSchema } from '@/components/organisms/FoodForm/FoodForm.schema'
import { URLS } from '@/utils'

export default function OrdersLayout({ children }: { children: React.ReactNode }) {
	const methods = useForm<FoodFormSchema>({
		defaultValues: {
			id: '',
			name: '',
			price: 0,
			quantity: 1,
		},
	})
	return (
		<FormProvider {...methods}>
			<div className='flex size-full flex-col'>
				{children}
				<OrderButton className='absolute bottom-18 left-1/2 transform -translate-x-1/2 z-20' href={URLS.command} />
				<OrderButtons />
			</div>
		</FormProvider>
	)
}
