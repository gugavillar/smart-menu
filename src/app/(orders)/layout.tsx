import { OrderButton, OrderButtons } from '@/components'

export default function OrdersLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex size-full flex-col'>
			{children}
			<OrderButton className='absolute bottom-18 left-1/2 transform -translate-x-1/2 z-20' />
			<OrderButtons />
		</div>
	)
}
