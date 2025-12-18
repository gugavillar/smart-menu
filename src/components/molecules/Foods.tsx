import { FoodsList, TitleWithLink } from '@/components'
import { URLS } from '@/utils'

export const Foods = () => {
	return (
		<div className='flex flex-col space-y-4'>
			<TitleWithLink href={URLS.menu} title='Cardápio' />
			<FoodsList className='pb-0' showTitle={false} />
		</div>
	)
}
