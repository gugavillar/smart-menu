import { type ComponentPropsWithRef, forwardRef, type ReactNode } from 'react'

type InputProps = ComponentPropsWithRef<'input'> & {
	label?: string
	icon: ReactNode
	error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, icon, error, ...props }, ref) => {
	return (
		<div className='w-full space-y-3'>
			<div>
				{label && (
					<label className='block text-xl text-grey-800 font-medium font-primary mb-2' htmlFor={props.id}>
						{label}
					</label>
				)}
				<div className='relative'>
					<input
						className='py-4 px-4 ps-11 font-secondary block w-full border-grey-400 bg-white-300 text-grey-800 rounded-xl disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none drop-shadow-lg'
						ref={ref}
						{...props}
					/>
					<div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>{icon}</div>
				</div>
				{error && <p className='text-red-500 text-sm mt-1.5'>{error}</p>}
			</div>
		</div>
	)
})

Input.displayName = 'Input'
