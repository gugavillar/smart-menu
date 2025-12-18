'use client'
import { Lock, LogIn, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button, Input, Title } from '@/components'
import { URLS } from '@/utils'

import { type FormLoginSchema, formLoginSchemaResolver } from './LoginForm.schema'

export const LoginForm = () => {
	const { push } = useRouter()
	const {
		handleSubmit,
		register,
		formState: { errors, isValid, isDirty },
	} = useForm<FormLoginSchema>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: formLoginSchemaResolver,
	})

	const onSubmit = () => {
		push(URLS.home)
	}

	return (
		<form
			className='flex flex-col items-center justify-center space-y-4 w-full my-auto'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='flex flex-col'>
				<Title className='text-center text-grey-900 font-primary text-lg'>Bem vindo</Title>
				<p className='text-center text-grey-800 text-sm'>
					Entre com seu email e senha para acessar o cardápio e atender seus clientes com mais agilidade.
				</p>
			</div>
			<Input
				icon={<Mail className='text-grey-600' />}
				label='Email'
				placeholder='seuemail@email.com'
				type='email'
				{...register('email')}
				error={errors.email?.message}
			/>
			<Input
				icon={<Lock className='text-grey-600' />}
				label='Senha'
				placeholder='********'
				type='password'
				{...register('password')}
				error={errors.password?.message}
			/>
			<Button className='mt-5' disabled={!isValid || !isDirty} icon={<LogIn />} label='Entrar' type='submit' />
		</form>
	)
}
