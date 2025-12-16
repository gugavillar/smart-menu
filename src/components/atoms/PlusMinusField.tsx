'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import { type ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type PlusMinusFieldProps = ComponentProps<'div'> & {
	initialCount?: number
}

export const PlusMinusField = ({ initialCount = 0, className, ...props }: PlusMinusFieldProps) => {
	const [count, setCount] = useState(initialCount)
	return (
		<div className={twMerge('flex items-center justify-center gap-2', className)} {...props}>
			<button
				className='text-primary-500 disabled:text-grey-800 p-2'
				disabled={count === 0}
				onClick={() => setCount(count - 1)}
				type='button'
			>
				<MinusIcon />
			</button>
			<span className='text-xl'>{count}</span>
			<button className='text-primary-500 p-2' onClick={() => setCount(count + 1)} type='button'>
				<PlusIcon />
			</button>
		</div>
	)
}
