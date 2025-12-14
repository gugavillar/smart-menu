import { zodResolver } from '@hookform/resolvers/zod'
import { validateEmail } from 'validations-br'
import { z } from 'zod'

const formLoginSchema = z.object({
	email: z
		.email({ message: 'Email inválido' })
		.transform((value) => value.trim())
		.refine((value) => validateEmail(value), { error: 'Email inválido' }),
	password: z
		.string({ error: 'Campo obrigatório' })
		.min(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
		.max(12, { message: 'Senha deve ter no máximo 12 caracteres' })
		.refine(
			(value) => {
				if (!value) return false
				if (value.includes(' ')) return false
				return true
			},
			{ message: 'Senha não pode conter espaços' }
		)
		.transform((value) => value.trim()),
})

export type FormLoginSchema = z.infer<typeof formLoginSchema>

export const formLoginSchemaResolver = zodResolver(formLoginSchema)
