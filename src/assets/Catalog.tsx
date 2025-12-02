import type { ComponentProps } from 'react'

export const Catalog = (props: ComponentProps<'svg'>) => {
	return (
		<svg fill='none' height={24} viewBox='0 0 24 24' width={24} xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect height={18} rx={3} stroke='currentColor' strokeWidth={2} width={14} x={5} y={3} />
			<path d='M8 8L16 8' stroke='currentColor' strokeLinecap='round' strokeWidth={2} />
			<path d='M8 12L13 12' stroke='currentColor' strokeLinecap='round' strokeWidth={2} />
		</svg>
	)
}
