import { Header, LoginForm } from '@/components'

export default function Home() {
	return (
		<div className='flex flex-col px-4 w-full justify-between h-full'>
			<Header
				className='w-full'
				title='Smart menu'
				titleClassName='text-4xl text-center'
				underTitle={<span className='text-white text-2xl text-center font-secondary'>Realize o seu login</span>}
			/>
			<LoginForm />
		</div>
	)
}
