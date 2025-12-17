'use client'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Card, Title } from '@/components/atoms'
import { useOrders } from '@/contexts'

type CommandsListProps = ComponentProps<'div'>

export const CommandsList = ({ className, ...props }: CommandsListProps) => {
	const { orders, handleRemoveOrder } = useOrders()

	if (!orders.length) {
		return (
			<div className='flex items-center justify-center h-[calc(100dvh-220px)]'>
				<Title className='text-grey-800 text-2xl'>Nenhum pedido encontrado</Title>
			</div>
		)
	}

	return (
		<div
			className={twMerge('columns-1 md:columns-2 lg:columns-3 space-y-4 overflow-y-auto mt-4 pb-28', className)}
			{...props}
		>
			{orders.map((order) => (
				<div className='flex flex-col space-y-2' key={order.id}>
					<Card {...order} disabled handleRemove={() => handleRemoveOrder(order.id)} price={order.total} />
				</div>
			))}
		</div>
	)
}
