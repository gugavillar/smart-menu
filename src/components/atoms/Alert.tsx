import { CheckCircle, X } from 'lucide-react'
import toast from 'react-hot-toast'

import { Title } from './Title'

export const Alert = ({ id }: { id: string }) => {
	return (
		<div className='flex flex-col relative items-center justify-center p-4 bg-white-300 rounded-xl space-y-2'>
			<X className='absolute top-2 right-2 size-5 text-grey-800 cursor-pointer' onClick={() => toast.remove(id)} />
			<CheckCircle className='size-9 text-secondary-500 text-center' />
			<Title className='font-primary text-grey-800 text-xl'>Pedido confirmado!</Title>
			<p className='font-secondary text-sm text-grey-700 text-center'>O seu pedido foi enviado para a cozinha.</p>
		</div>
	)
}
