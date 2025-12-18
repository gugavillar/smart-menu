import { CloseButtons } from '@/components'

export default function CommandsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex size-full flex-col'>
			{children}
			<CloseButtons />
		</div>
	)
}
