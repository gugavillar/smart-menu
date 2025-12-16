import type { ComponentProps } from 'react'

import { currencyValue } from '@/utils'

type AddButtonProps = ComponentProps<'button'>

export const AddButton = ({ ...props }: AddButtonProps) => {
	return (
		<button
			className='inline-flex items-center justify-between text-white-300 bg-primary-500 disabled:bg-gray-200 disabled:text-grey-700 rounded-xl h-12 w-full px-4'
			type='button'
			{...props}
		>
			<span>Adicionar</span>
			<span>{currencyValue(10)}</span>
		</button>
	)
}
