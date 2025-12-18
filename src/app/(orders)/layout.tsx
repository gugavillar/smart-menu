import { OrderButton, OrderButtons } from '@/components'
import { URLS } from '@/utils'

export default function OrdersLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex size-full flex-col'>
			{children}
			<OrderButton className='absolute bottom-18 left-1/2 transform -translate-x-1/2 z-20' href={URLS.command} />
			<OrderButtons />
		</div>
	)
}
