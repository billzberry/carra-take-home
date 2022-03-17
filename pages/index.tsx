import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'
import Meta from '../components/Meta'
import ProductList from '../components/ProductList'
import { Favorite, ProductDetails } from '../modules/SystemTypes'


/**
 * Home Page is the second main entry point to render all components needed
 * @param param0 - { products } -> the prop needed for the Home page to run successfully
 * @returns - JSX
 */
const Home:NextPage = ( { products }:any ) => {
	//Initialized favorites array to hold the favorites data in state
	const [favorites, setFavorites] = useState([])

	//Initialized productList array to hold the productList data in state
	const [productList, setProductList] = useState(products)

	/**
	 * removeFavorite - this method is used to remove product from favorites with an ID
	 * @param id - product ID that is passed to remove a specific product from favorites state
	 */
	const removeFavorite = (id:string) => {
		//Remove product from favorites state by filtering out with the product ID
		setFavorites(favorites.filter((item:Favorite) => item.id != id))
		//Update the products state by product ID
		updateProductList(id)
	}


	/**
	 * setProductAsFavorite - this method is used to set set product as favorite
	 * @param id - product ID that is passed to set a specific product as favorite
	 */
	const setProductAsFavorite = (id:string) => {
		//Update product state by product ID
		updateProductList(id)
		//Filter to favorites by product ID to check if it exist
		const checkIsFav = favorites.filter((item:Favorite) => item.id == id)
		if (checkIsFav.length > 0) {
			//Remove from favorites if product exists in it
			removeFavorite(id)
		} else {
			//Get product details by product ID
			let data:any = getProduct(id)
			//Add product to favorites
			data = [...favorites, data]
			//update favorites state with the updated data
			setFavorites(data)
		}
	}

	/**
	 * getProduct - this method is used to get specific product details
	 * @param id - product ID that is passed to get a specific product details
	 * @returns - ProductDetails - { id, name }
	 */
	const getProduct = (id:string):Favorite => {
		const data:ProductDetails[] = productList.filter((item:Favorite) => item.id == id)
		return data.length > 0 ? {id: id, name: data[0].name} : {id: '', name: ''}
	}

	/**
	 * updateProductList - this method is used to update the products state
	 * @param id - product ID that is passed to update the favorite key or field of specific product details in the products state
	 */
	const updateProductList = (id:string) => {
		//Update the favorite field of a particular product details
		setProductList(productList.map((product:ProductDetails) => product.id === id ? { ...product, favorite: !product.favorite } : product))
	}

	/**
	 * getMetaDetails - this methods collects all product names as keywords
	 * @returns - { title, keywords, description }
	 */
	const getMetaDetails = () => {
		//Initialize a keyword string
		let keywords = ''
		//Check if productList is an array and has data
		if (Array.isArray(productList) && productList.length > 0) {
			for (let i = 0; i < productList.length; i++) {
				//Get single product details of ProductDetails type
				const item:ProductDetails = productList[i]
				//This checks to make sure the first item doesn't include a comma (,)
				if (i === 0) {
					keywords = item.name
				} else {
					//Add comma to the next item name
					keywords += `, ${item.name}`
				}
			}
		}

		return {
			title: 'Carra Take Home Assignment',
			keywords: keywords,
			description: `We're creating a joy-filled future for textured hair. We believe that all it takes is the right tools and knowledge. Product recommendations tailored to your needs. Unbiased, expert advice whatever your style and support when you need it. Start the journey and fall in love with your hair!`
		}
	}
	
	return (
		<>
			<Meta metaDetails={getMetaDetails()} />
			<Header favorites={favorites} onRemoveFavorite={removeFavorite} />
			<Breadcrumb />
			<ProductList products={productList} onSetProductFavorite={setProductAsFavorite} />
		</>
	)
}

/**
 * getStaticProps - is a next.js default method used to fetch data from API at build time
 * @returns props - products
 */
export const getStaticProps:GetStaticProps = async () => {
	const result = await fetch('https://62153783cdb9d09717b21f66.mockapi.io/api/v1/catalogue')
	let products:any = await result.json()
	products = Array.isArray(products) ? products : []

	return {
		props: {
			products
		}
	}
}

export default Home
