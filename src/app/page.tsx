import { Plate } from '@/assets'
import { Header, LoginForm } from '@/components'

export default function Home() {
	return (
		<div className='flex flex-col px-4 w-full justify-between h-full'>
			<Header
				className='w-full'
				overTitle={<Plate className='mx-auto stroke-white' height={48} width={48} />}
				title='Smart menu'
				titleClassName='text-4xl text-center'
				underTitle={<span className='text-white text-lg text-center font-secondary'>Realize o seu login</span>}
			/>
			<LoginForm />
		</div>
	)
}
