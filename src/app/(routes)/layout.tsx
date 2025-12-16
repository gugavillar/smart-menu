import { FooterButtons, OrderButton } from '@/components'

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex size-full flex-col'>
			{children}
			<OrderButton className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20' />
			<FooterButtons />
		</div>
	)
}
