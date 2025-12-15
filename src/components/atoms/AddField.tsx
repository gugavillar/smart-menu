'use client'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

import { currencyValue } from '@/utils'

type AddFieldProps = {
	product: string
	price: number
}

export const AddField = ({ product, price }: AddFieldProps) => {
	const [count, setCount] = useState(0)
	return (
		<div className='bg-white-300 border border-grey-400 rounded-lg flex items-center justify-between h-16 px-4 drop-shadow-lg'>
			<div className='flex flex-col'>
				<p className='font-secondary text-lg text-grey-800'>{product}</p>
				<p className='font-secondary text-xs text-grey-700'>+ {currencyValue(price)}</p>
			</div>
			<div className='flex items-center justify-center gap-2'>
				<button
					className='text-primary-500 disabled:text-grey-800 p-2'
					disabled={count === 0}
					onClick={() => setCount(count - 1)}
					type='button'
				>
					<MinusIcon />
				</button>
				<span>{count}</span>
				<button className='text-primary-500 p-2' onClick={() => setCount(count + 1)} type='button'>
					<PlusIcon />
				</button>
			</div>
		</div>
	)
}
