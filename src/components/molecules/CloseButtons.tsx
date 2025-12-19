'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { Title } from '@/components'
import { useOrders } from '@/contexts'
import { currencyValue, URLS } from '@/utils'

import type { FoodFormSchema } from '../organisms/FoodForm/FoodForm.schema'

export const CloseButtons = () => {
	const { setValue, watch } = useFormContext<FoodFormSchema>()
	const { orders, handleCreateOrder } = useOrders()
	const { push } = useRouter()

	const orderModeSelect = watch('orderMode')
	const total = orders.reduce((acc, order) => acc + order.total, 0)
	const isButtonDisabled = !orders.length

	const handleCloseCommand = () => {
		handleCreateOrder()
		push(URLS.home)
	}

	const handleSetOrderModeSelect = (mode: 'delivery' | 'takeaway' | 'table' | null) => {
		setValue('orderMode', mode)
	}

	return (
		<div
			className={twMerge(
				'w-full flex items-end px-4 pb-4 bg-white-300 absolute bottom-0 z-10',
				!orderModeSelect ? 'h-20' : 'h-32'
			)}
		>
			{!orderModeSelect ? (
				<div className='flex items-center justify-between gap-x-4 w-full'>
					<button
						className='inline-flex items-center justify-center text-white-300 bg-secondary-500 disabled:bg-gray-200 disabled:text-grey-700 rounded-xl h-12 w-full px-4'
						disabled={isButtonDisabled}
						onClick={() => handleSetOrderModeSelect('delivery')}
						type='button'
					>
						Entrega
					</button>
					<button
						className='inline-flex items-center justify-center text-white-300 bg-secondary-500 disabled:bg-gray-200 disabled:text-grey-700 rounded-xl h-12 w-full px-4'
						disabled={isButtonDisabled}
						onClick={() => handleSetOrderModeSelect('takeaway')}
						type='button'
					>
						Retirada
					</button>
					<button
						className='inline-flex items-center justify-center text-white-300 bg-secondary-500 disabled:bg-gray-200 disabled:text-grey-700 rounded-xl h-12 w-full px-4'
						disabled={isButtonDisabled}
						onClick={() => handleSetOrderModeSelect('table')}
						type='button'
					>
						Mesa
					</button>
				</div>
			) : (
				<div className='flex flex-col w-full gap-4 items-center justify-center'>
					<div className='flex items-center justify-between w-full text-2xl'>
						<Title className='font-primary text-grey-800'>Total</Title>
						<Title className='font-secondary text-secondary-500'>{currencyValue(total)}</Title>
					</div>
					<div className='flex items-center justify-between w-full gap-x-4'>
						<button
							className='inline-flex items-center justify-center text-white-300 bg-primary-500 disabled:bg-gray-200 disabled:text-grey-700 rounded-xl h-12 w-full px-4'
							disabled={isButtonDisabled}
							onClick={() => handleSetOrderModeSelect(null)}
							type='button'
						>
							Voltar
						</button>
						<button
							className='inline-flex items-center justify-center text-white-300 bg-primary-500 disabled:bg-gray-200 disabled:text-grey-700 rounded-xl h-12 w-full px-4'
							disabled={isButtonDisabled}
							onClick={handleCloseCommand}
							type='button'
						>
							Finalizar
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
