import { type ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type TextareaProps = ComponentProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<div className='w-full'>
			<textarea
				className={twMerge(
					'py-2 px-3 block w-full border-grey-400 border bg-white-300 rounded-lg resize-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none drop-shadow-lg',
					className
				)}
				rows={3}
				{...props}
				ref={ref}
			/>
		</div>
	)
})
