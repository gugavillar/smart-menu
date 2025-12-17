import { currencyValue } from '@/utils'

import { PlusMinusField } from '../atoms'

type AddFieldProps = {
	product: string
	price: number
	fieldName: 'quantity' | `additional.${number}.quantity`
}

export const AddField = ({ product, price, fieldName }: AddFieldProps) => {
	return (
		<div className='bg-white-300 border border-grey-400 rounded-lg flex items-center justify-between h-16 px-4 drop-shadow-lg'>
			<div className='flex flex-col'>
				<p className='font-secondary text-lg text-grey-800'>{product}</p>
				<p className='font-secondary text-xs text-grey-700'>+ {currencyValue(price)}</p>
			</div>
			<PlusMinusField fieldName={fieldName} />
		</div>
	)
}
