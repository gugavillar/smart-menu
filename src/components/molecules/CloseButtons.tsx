'use client'

import { useRouter } from 'next/navigation'

import { Title } from '@/components'
import { useOrders } from '@/contexts'
import { currencyValue, URLS } from '@/utils'

export const CloseButtons = () => {
	const { orders, handleCreateOrder } = useOrders()
	const { push } = useRouter()

	const total = orders.reduce((acc, order) => acc + order.total, 0)
	const isButtonDisabled = !orders.length

	const handleCloseCommand = () => {
		handleCreateOrder()
		push(URLS.home)
	}

	return (
		<div className='w-full flex items-end px-4 pb-4 h-32 bg-white-300 absolute bottom-0 z-10'>
			<div className='flex flex-col w-full gap-4 items-center justify-center'>
				<div className='flex items-center justify-between w-full text-2xl'>
					<Title className='font-primary text-grey-800'>Total</Title>
					<Title className='font-secondary text-secondary-500'>{currencyValue(total)}</Title>
				</div>
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
	)
}
