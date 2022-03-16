import { ProductListComponent, ProductListProp } from '../modules/SystemTypes'
import styles from '../styles/Products.module.css'
import ProductItem from './ProductItem'

const ProductList:ProductListComponent = ( { products } ) => {
    // console.log('products..: ', products)
    return (
        <>
            <div className={styles.row}>
                {products.map((product) => (
                    <div className={styles.col} key={product.id}>
                        <ProductItem label={product.name} price={product.price} img={product.image} discontinued={product.discontinued} favorite={false} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList