'use client'
import { QueryClientProvider, useMutation, useQuery } from '@tanstack/react-query'

import { getQueryClient } from '@/constants'

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
	const query = getQueryClient()

	return <QueryClientProvider client={query}>{children}</QueryClientProvider>
}

export { useMutation, useQuery }
