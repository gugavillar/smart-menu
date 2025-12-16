'use client'
import { usePathname } from 'next/navigation'

import { Catalog, ShoppingBag } from '@/assets'
import { LinkButton } from '@/components'
import { URLS } from '@/utils'

export const FooterButtons = () => {
	const path = usePathname()

	return (
		<div className='w-full flex items-end px-4 py-6 bg-white-300 absolute bottom-0 z-10'>
			<div className='flex w-full items-center justify-between'>
				<LinkButton href={URLS.home} icon={<Catalog key='catalog' />} label='Início' path={path} />
				<LinkButton href={URLS.orders} icon={<ShoppingBag key='orders' />} label='Pedidos' path={path} />
			</div>
		</div>
	)
}
