import { FC, PropsWithChildren, useEffect } from 'react'
import '../../assets/style.css'
import { Header, Footer } from '@/components/ui'
import { Toaster } from '@/components/ui/sonner'
import { useParams } from 'react-router-dom'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const params = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [params])

	return (
		<>
			<Header />
			{children}
			<Footer />
			<Toaster />
		</>
	)
}