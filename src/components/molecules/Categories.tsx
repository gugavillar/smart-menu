import { TitleWithLink } from '../atoms'
import { CategoriesList } from './CategoriesList'

export const Categories = () => {
	return (
		<div className='flex flex-col w-full mt-8 space-y-4'>
			<TitleWithLink href='/categorias' title='Categorias' />
			<CategoriesList />
		</div>
	)
}
