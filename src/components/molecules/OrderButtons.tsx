'use client'

import { AddButton, PlusMinusField } from '@/components'

export const OrderButtons = () => {
	return (
		<div className='w-full flex items-end px-4 pb-4 h-24 bg-white-300 absolute bottom-0 z-10'>
			<div className='flex w-full gap-x-4 items-center justify-between'>
				<PlusMinusField className='border border-primary-500 rounded-xl h-12 w-3xs justify-evenly' initialCount={1} />
				<AddButton />
			</div>
		</div>
	)
}
