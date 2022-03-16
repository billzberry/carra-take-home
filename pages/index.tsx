import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { Favorite, ProductDetails, ProductListProp } from '../modules/SystemTypes'

const Home:NextPage = ( { products }:any ) => {
	const [favorites, setFavorites] = useState([])
	const [productList, setProductList] = useState(products)

	const removeFavorite = (id:string) => {
		setFavorites(favorites.filter((item:Favorite) => item.id != id))
		updateProductList(id)
	}

	const setProductAsFavorite = (id:string) => {
		updateProductList(id)
		const checkIsFav = favorites.filter((item:Favorite) => item.id == id)
		if (checkIsFav.length > 0) {
			removeFavorite(id)
		} else {
			let data:any = getProduct(id)
			data = [...favorites, data]
			setFavorites(data)
		}
	}

	const getProduct = (id:string):Favorite => {
		const data:ProductDetails[] = productList.filter((item:Favorite) => item.id == id)
		return data.length > 0 ? {id: id, name: data[0].name} : {id: '', name: ''}
	}

	const updateProductList = (id:string) => {
		setProductList(productList.map((product:ProductDetails) => product.id === id ? { ...product, favorite: !product.favorite } : product))
	}
	
	return (
		<>
			<Header favorites={favorites} onRemoveFavorite={removeFavorite} />
			<Breadcrumb />
			<ProductList products={productList} onSetProductFavorite={setProductAsFavorite} />
		</>
	)
}

export const getStaticProps:GetStaticProps = async () => {
	const result = await fetch('https://62153783cdb9d09717b21f66.mockapi.io/api/v1/catalogue')
	const products:any = await result.json()

	return {
		props: {
			products
		}
	}
}

export default Home
