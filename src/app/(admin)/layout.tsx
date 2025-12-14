import { FooterButtons, Header, OrderButton } from '@/components'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex size-full flex-col'>
			<Header title='Smart menu' titleClassName='text-4xl text-center' />
			{children}
			<OrderButton className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20' />
			<FooterButtons />
		</div>
	)
}
