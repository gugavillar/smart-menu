import { type ComponentProps, useId } from 'react'

export const Bell = (props: ComponentProps<'svg'>) => {
	const id = useId()
	return (
		<svg fill='none' height={24} viewBox='0 0 24 24' width={24} xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M6.615 10.923c.954-1.745 1.66-2.584 3.462-3.462' stroke='currentColor' strokeLinecap='round' />
			<path
				d='M5.077 12.577h13.846c1.252 0 2.294.893 2.527 2.077H2.55a2.577 2.577 0 012.527-2.077z'
				stroke='currentColor'
			/>
			<mask fill='#fff' id={id}>
				<path d='M19.308 12.846c0-1.06-.194-2.11-.571-3.09a8.143 8.143 0 00-1.626-2.621 7.488 7.488 0 00-2.433-1.75 7.037 7.037 0 00-2.87-.616c-.985 0-1.96.21-2.87.615a7.49 7.49 0 00-2.434 1.751 8.144 8.144 0 00-1.625 2.62c-.377.98-.571 2.03-.571 3.091h15z' />
			</mask>
			<path
				d='M19.308 12.846c0-1.06-.194-2.11-.571-3.09a8.143 8.143 0 00-1.626-2.621 7.488 7.488 0 00-2.433-1.75 7.037 7.037 0 00-2.87-.616c-.985 0-1.96.21-2.87.615a7.49 7.49 0 00-2.434 1.751 8.144 8.144 0 00-1.625 2.62c-.377.98-.571 2.03-.571 3.091h15z'
				mask={`url(#${id})`}
				stroke='currentColor'
				strokeWidth={2}
			/>
			<circle cx={11.9999} cy={4.76923} fill='currentColor' r={0.5} stroke='currentColor' strokeWidth={0.538462} />
		</svg>
	)
}
