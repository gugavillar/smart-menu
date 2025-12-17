import type { ComponentProps } from 'react'

import { currencyValue } from '@/utils'

type AddButtonProps = ComponentProps<'button'> & {
	total: number
}

export const AddButton = ({ total, ...props }: AddButtonProps) => {
	return (
		<button
			className='inline-flex items-center justify-between text-white-300 bg-primary-500 disabled:bg-gray-200 disabled:text-grey-700 rounded-xl h-12 w-full px-4'
			type='button'
			{...props}
		>
			<span>Adicionar</span>
			<span>{currencyValue(total)}</span>
		</button>
	)
}
