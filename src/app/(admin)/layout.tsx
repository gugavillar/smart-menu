import { OrderButton } from '@/components'
import { FooterButtons } from '@/components/molecules'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex size-full flex-col'>
			{children}
			<OrderButton className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10' />
			<FooterButtons />
		</div>
	)
}
