'use client'
import { OctagonAlert } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Card, Title } from '@/components'
import { useOrders } from '@/contexts'
import { URLS } from '@/utils'

type CommandsListProps = ComponentProps<'div'>

export const CommandsList = ({ className, ...props }: CommandsListProps) => {
	const { orders, handleRemoveOrder } = useOrders()

	if (!orders.length) {
		return (
			<div className='flex flex-col gap-4 items-center justify-center h-[calc(80dvh-220px)]'>
				<OctagonAlert className='text-primary-500 size-12' />
				<Title className='text-grey-800 text-2xl'>Nenhum pedido encontrado</Title>
			</div>
		)
	}

	return (
		<div
			className={twMerge('columns-1 md:columns-2 lg:columns-3 space-y-4 overflow-y-auto mt-4 pb-28', className)}
			{...props}
		>
			{orders.map((order) => {
				const additional = order.additional
					?.map((item) => {
						if (item.quantity) {
							return `${item.product} - ${item.quantity}`
						}
						return false
					})
					.filter(Boolean)
				return (
					<div className='flex flex-col space-y-2' key={order.id}>
						<Card
							{...order}
							added={additional?.join(', ')}
							disabled
							handleRemove={() => handleRemoveOrder(order.id)}
							observation={order.observation}
							price={order.total}
						/>
					</div>
				)
			})}
			<Link
				className='font-secondary border border-primary-500 rounded-xl w-full inline-flex items-center justify-center px-6 py-3.5 mt-6'
				href={URLS.menu}
			>
				Adicionar mais itens
			</Link>
		</div>
	)
}
