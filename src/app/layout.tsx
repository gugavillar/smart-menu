import type { Metadata } from 'next'
import { Lato, Roboto } from 'next/font/google'
import './globals.css'

import { Toaster } from 'react-hot-toast'

import { OrdersProvider } from '@/contexts'

const lato = Lato({
	subsets: ['latin'],
	variable: '--font-lato',
	weight: ['400'],
})

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-roboto',
	weight: ['400', '500'],
})

export const metadata: Metadata = {
	description: 'Smart Menu',
	title: 'Smart Menu',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={`${lato.variable} ${roboto.variable}`} lang='pt-BR'>
			<body className='h-dvh w-dvw antialiased background overflow-hidden'>
				<OrdersProvider>{children}</OrdersProvider>
				<Toaster position='top-center' toastOptions={{ duration: 3000 }} />
			</body>
		</html>
	)
}
