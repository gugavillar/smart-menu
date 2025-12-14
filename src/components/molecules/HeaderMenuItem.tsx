'use client'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type HeaderMenuItemProps = {
	title: string
	image: string
}

export const HeaderMenuItem = ({ title, image }: HeaderMenuItemProps) => {
	const [imageError, setImageError] = useState(false)
	const { back } = useRouter()
	return (
		<div className='relative overflow-hidden w-full h-[220px]'>
			<Image
				alt={title}
				className='size-full absolute top-0 start-0 object-cover'
				height={220}
				onError={() => setImageError(true)}
				src={imageError ? '/fallback-img.png' : image}
				width={560}
			/>
			<button
				className='size-14 rounded-xl bg-primary-500 text-white-500 absolute inline-flex items-center justify-center top-6 left-4'
				onClick={back}
				type='button'
			>
				<ChevronLeft />
			</button>
		</div>
	)
}
