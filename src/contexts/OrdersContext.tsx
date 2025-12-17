'use client'

import type { UUID } from 'crypto'
import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react'

type Additional = {
	id: UUID
	price: number
	product: string
}

type Order = {
	id: UUID
	name: string
	price: number
	quantity: number
	additional?: Array<Additional>
	observation?: string
}

type OrdersContextType = {
	orders: Array<Order>
	handleAddOrder: (order: Order) => void
	handleRemoveOrder: (orderId: Order['id']) => void
	handleAddAdditional: (orderId: Order['id'], additional: Additional) => void
	handleRemoveAdditional: (orderId: Order['id'], additionalIndex: number) => void
	handleChangeObservation: (orderId: Order['id'], observation: Order['observation']) => void
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

	const handleAddAdditional = useCallback(
		(orderId: Order['id'], additional: Additional) => {
			const orderToAddAdditional = orders.find((oldOrder) => oldOrder.id === orderId)

			if (!orderToAddAdditional) return

			orderToAddAdditional.additional?.push(additional)
			setOrders((prevOrders) =>
				prevOrders.map((oldOrder) => (oldOrder.id === orderId ? orderToAddAdditional : oldOrder))
			)
		},
		[orders.find]
	)

	const handleRemoveAdditional = useCallback(
		(orderId: Order['id'], additionalIndex: number) => {
			const additionalToRemove = orders.find((oldOrder) => oldOrder.id === orderId)?.additional?.[additionalIndex]
			const orderToUpdate = orders.find((oldOrder) => oldOrder.id === orderId)

			if (!additionalToRemove || !orderToUpdate) return

			orderToUpdate.additional?.splice(additionalIndex, 1)
			setOrders((prevOrders) => prevOrders.map((oldOrder) => (oldOrder.id === orderId ? orderToUpdate : oldOrder)))
		},
		[orders.find]
	)

	const handleChangeObservation = useCallback(
		(orderId: Order['id'], observation: Order['observation']) => {
			const orderToUpdate = orders.find((oldOrder) => oldOrder.id === orderId)

			if (!orderToUpdate) return

			orderToUpdate.observation = observation
			setOrders((prevOrders) => prevOrders.map((oldOrder) => (oldOrder.id === orderId ? orderToUpdate : oldOrder)))
		},
		[orders.find]
	)

	const values = useMemo(
		() => ({
			handleAddAdditional,
			handleAddOrder,
			handleChangeObservation,
			handleRemoveAdditional,
			handleRemoveOrder,
			orders,
		}),
		[orders, handleAddOrder, handleRemoveOrder, handleAddAdditional, handleRemoveAdditional, handleChangeObservation]
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
