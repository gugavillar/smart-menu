'use client'

import type { UUID } from 'crypto'
import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react'

type Additional = {
	id: UUID
	price: number
	product: string
}

export type Order = {
	id: UUID
	name: string
	price: number
	image: string
	quantity: number
	additional?: Array<Additional>
	observation?: string
	total: number
}

type OrdersContextType = {
	orders: Array<Order>
	handleAddOrder: (order: Order) => void
	handleRemoveOrder: (orderId: Order['id']) => void
}

export const OrdersContext = createContext({} as OrdersContextType)

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
	const [orders, setOrders] = useState<Array<Order>>([])

	const handleAddOrder = useCallback((order: Order) => {
		setOrders((prevOrders) => [...prevOrders, order])
	}, [])

	const handleRemoveOrder = useCallback((orderId: Order['id']) => {
		setOrders((prevOrders) => prevOrders.filter((oldOrder) => oldOrder.id !== orderId))
	}, [])

	const values = useMemo(
		() => ({
			handleAddOrder,
			handleRemoveOrder,
			orders,
		}),
		[orders, handleAddOrder, handleRemoveOrder]
	)

	return <OrdersContext value={values}>{children}</OrdersContext>
}

export const useOrders = () => {
	const context = useContext(OrdersContext)
	if (!context) {
		throw new Error('useOrders must be used within an OrdersProvider')
	}
	return context
}
