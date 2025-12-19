import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const foodFormSchema = z.object({
	additional: z.array(
		z.object({
			id: z.uuidv4(),
			price: z.number(),
			product: z.string(),
			quantity: z.number(),
		})
	),
	id: z.uuidv4(),
	image: z.string(),
	name: z.string(),
	observation: z
		.string()
		.transform((value) => value.trim())
		.optional(),
	orderMode: z.enum(['delivery', 'takeaway', 'table']).nullable(),
	price: z.number(),
	quantity: z.number(),
})

export type FoodFormSchema = z.infer<typeof foodFormSchema>

export const foodFormSchemaResolver = zodResolver(foodFormSchema)
