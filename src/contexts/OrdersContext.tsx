'use client'

import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import type { UUID } from 'node:crypto'

import { Alert } from '@/components'
import type { FoodFormSchema } from '@/components/organisms/FoodForm/FoodForm.schema'
import { getOrdersFromLocalStorage, removeOrdersFromLocalStorage, saveOrdersToLocalStorage } from '@/utils'

type Additional = {
	id: UUID
	price: number
	product: string
	quantity?: number
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
	handleCreateOrder: VoidFunction
}

export const OrdersContext = createContext({} as OrdersContextType)

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
	const [orders, setOrders] = useState<Array<Order>>([])

	const methods = useForm<FoodFormSchema>({
		defaultValues: {
			additional: [],
			id: '',
			image: '',
			name: '',
			observation: '',
			price: 0,
			quantity: 1,
		},
	})

	const handleAddOrder = useCallback(
		(order: Order) => {
			setOrders((prevOrders) => {
				const newOrders = [...prevOrders, order]
				saveOrdersToLocalStorage(newOrders)
				return newOrders
			})
			methods.reset()
			toast.custom(({ id }) => <Alert id={id} message='O prato foi incluído na comanda.' title='Tudo certo!' />)
		},
		[methods.reset]
	)

	const handleRemoveOrder = useCallback((orderId: Order['id']) => {
		setOrders((prevOrders) => {
			const newOrders = prevOrders.filter((oldOrder) => oldOrder.id !== orderId)
			saveOrdersToLocalStorage(newOrders)
			return newOrders
		})
		toast.custom(({ id }) => <Alert id={id} message='O prato foi retirado da comanda.' title='Tudo certo!' />)
	}, [])

	const handleCreateOrder = useCallback(() => {
		toast.custom(({ id }) => <Alert id={id} message='A cozinha já começou o preparo.' title='Pedido confirmado!' />)
		methods.reset()
		removeOrdersFromLocalStorage()
		setOrders([])
	}, [methods.reset])

	useEffect(() => {
		const ordersFromLocalStorage = getOrdersFromLocalStorage()
		setOrders(ordersFromLocalStorage)
	}, [])

	const values = useMemo(
		() => ({
			handleAddOrder,
			handleCreateOrder,
			handleRemoveOrder,
			orders,
		}),
		[orders, handleAddOrder, handleRemoveOrder, handleCreateOrder]
	)

	return (
		<OrdersContext value={values}>
			<FormProvider {...methods}>{children}</FormProvider>
		</OrdersContext>
	)
}

export const useOrders = () => {
	const context = useContext(OrdersContext)
	if (!context) {
		throw new Error('useOrders must be used within an OrdersProvider')
	}
	return context
}
