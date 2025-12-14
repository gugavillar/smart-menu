import { ChefHat, Lock, LogIn, Mail } from 'lucide-react'

import { Button, Input } from '../atoms'

export const LoginForm = () => {
	return (
		<div className='flex flex-col items-center justify-center space-y-4 w-full my-auto'>
			<ChefHat className='text-grey-500' size={96} />
			<Input icon={<Mail />} label='Email' type='email' />
			<Input icon={<Lock />} label='Senha' type='password' />
			<Button className='mt-5' icon={<LogIn />} label='Entrar' type='submit' />
		</div>
	)
}
