import { TitleWithLink } from '@/components'

import { CategoriesList } from './CategoriesList'

export const Categories = () => {
	return (
		<div className='flex flex-col space-y-4'>
			<TitleWithLink href='/categorias' title='Categorias' />
			<CategoriesList />
		</div>
	)
}
