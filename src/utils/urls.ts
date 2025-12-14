export const URLS = {
	category: (category?: string) => (category ? `/categorias/${category}` : '/categorias'),
	home: '/inicio',
	login: '/',
	menu: (id?: string) => (id ? `/cardapio/${id}` : '/cardapio'),
	orders: '/pedidos',
}
