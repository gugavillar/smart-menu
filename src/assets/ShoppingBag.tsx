import type { ComponentProps } from 'react'

export const ShoppingBag = (props: ComponentProps<'svg'>) => {
	return (
		<svg fill='none' height={24} viewBox='0 0 24 24' width={24} xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 11-8 0'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
			/>
		</svg>
	)
}
