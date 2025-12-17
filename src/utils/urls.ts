export const URLS = {
	category: (category?: string) => (category ? `/categorias/${category}` : '/categorias'),
	command: '/comanda',
	home: '/inicio',
	login: '/',
	menu: '/cardapio',
	order: (id: string) => `/pedido/${id}`,
}
