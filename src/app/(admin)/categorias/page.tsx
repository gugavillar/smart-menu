import { BackHeader, CategoryButton } from '@/components'
import { categories } from '@/mocks'

export default function CategoriesPage() {
	return (
		<div className='flex flex-col px-4 overflow-y-hidden'>
			<BackHeader title='Categorias' />
			<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
				{categories.map((category) => (
					<CategoryButton className='w-full' icon={category.icon} key={category.label} label={category.label} />
				))}
			</div>
		</div>
	)
}
