'use client'
import { usePathname } from 'next/navigation'

import { Catalog, ShoppingBag } from '@/assets'
import { LinkButton } from '@/components/atoms'

export const FooterButtons = () => {
	const path = usePathname()

	return (
		<div className='w-full flex items-center px-8 py-6 bg-white-300 absolute bottom-0 z-10'>
			<div className='flex w-full items-center justify-between'>
				<LinkButton href='/cardapio' icon={<Catalog key='catalog' />} label='Cardápio' path={path} />
				<LinkButton href='/pedidos' icon={<ShoppingBag key='orders' />} label='Pedidos' path={path} />
			</div>
		</div>
	)
}
