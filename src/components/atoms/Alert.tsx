import { CheckCircle, X } from 'lucide-react'
import toast from 'react-hot-toast'

import { Title } from './Title'

type AlertProps = {
	title: string
	message: string
	id: string
}

export const Alert = ({ id, title, message }: AlertProps) => {
	return (
		<div className='flex flex-col relative items-center justify-center p-2.5 bg-white-300 rounded-xl space-y-0.5 w-full'>
			<X className='absolute top-2 right-2 size-5 text-grey-800 cursor-pointer' onClick={() => toast.remove(id)} />
			<div className='flex items-center justify-center space-x-2.5'>
				<CheckCircle className='size-4 text-secondary-500 text-center' />
				<Title className='font-primary text-grey-800 text-xl'>{title}</Title>
			</div>
			<p className='font-secondary text-sm text-grey-700 text-center'>{message}</p>
		</div>
	)
}
