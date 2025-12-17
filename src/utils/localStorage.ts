import type { Order } from '@/contexts'

const KEY = 'orders'

export const saveOrdersToLocalStorage = (orders: Array<Order>) => {
	localStorage.setItem(KEY, JSON.stringify(orders))
}

export const getOrdersFromLocalStorage = () => {
	const orders = localStorage.getItem(KEY)
	return orders ? JSON.parse(orders) : []
}

export const removeOrdersFromLocalStorage = () => {
	localStorage.removeItem(KEY)
}
