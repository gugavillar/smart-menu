import { BackHeader, CommandsList } from '@/components'

export default function CommandPage() {
	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<BackHeader title='Comanda' />
			<CommandsList />
		</div>
	)
}
