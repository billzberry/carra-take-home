import type { GetStaticProps, NextPage } from 'next'
import { AppProps } from 'next/app'
import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { ProductListProp } from '../modules/SystemTypes'

const Home:NextPage = ( { products }:any ) => {
	return (
		<>
			<Header />
			<Breadcrumb />
			<ProductList products={products} />
		</>
	)
}

export const getStaticProps:GetStaticProps = async () => {
	const result = await fetch('https://62153783cdb9d09717b21f66.mockapi.io/api/v1/catalogue')
	const products:ProductListProp = await result.json()

	return {
		props: {
			products
		}
	}
}

export default Home
