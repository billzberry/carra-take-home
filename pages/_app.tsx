import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from '../components/Layout'

/**
 * CarraApp - Is the main entry point of the application
 * @param param0 {Component, pageProps} - These are passed components and page props to be display or executed
 * @returns 
 */
function CarraApp({ Component, pageProps }: AppProps) {
	return (
		<Layouts>
			<Component {...pageProps} />
		</Layouts>
	)
}

export default CarraApp
