import type { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TitleProps<T extends ElementType> = ComponentProps<T> & {
	as?: TitleElement
}

export const Title = <T extends TitleElement>({ as = 'h1', className, children, ...props }: TitleProps<T>) => {
	const Component = as
	return (
		<Component className={twMerge('font-semibold text-white-300', className)} {...props}>
			{children}
		</Component>
	)
}
