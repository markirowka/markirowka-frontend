import { FC, PropsWithChildren, useEffect } from 'react'
import styles from './Layout.module.scss'
import '../../assets/style.css'
import { Header, Footer } from '@/components/ui'
import { Toaster } from '@/components/ui/sonner'
import { useParams } from 'react-router-dom'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const params = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [params])

	return (
		<>
			<Header />
			<div className={styles.container}>
				{children}
			</div>
			<Footer />
			<Toaster />
		</>
	)
}