import { FooterButtons, OrderButton } from '@/components'
import { URLS } from '@/utils'

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex size-full flex-col'>
			{children}
			<OrderButton className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20' href={URLS.command} />
			<FooterButtons />
		</div>
	)
}
