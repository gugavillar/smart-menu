import { TitleWithLink } from '@/components'
import { URLS } from '@/utils'

import { CategoriesList } from './CategoriesList'

export const Categories = () => {
	return (
		<div className='flex flex-col space-y-4'>
			<TitleWithLink href={URLS.category()} title='Categorias' />
			<CategoriesList />
		</div>
	)
}
