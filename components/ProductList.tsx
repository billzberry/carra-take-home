import { ProductListComponent, ProductListProp } from '../modules/SystemTypes'
import styles from '../styles/Products.module.css'
import ProductItem from './ProductItem'

const ProductList:ProductListComponent = ( { products, onSetProductFavorite } ) => {
    return (
        <>
            <div className={styles.row} data-testid="product-list">
                {products.map((product) => (
                    <div className={styles.col} key={product.id}>
                        <ProductItem product={product} onSetFavorite={onSetProductFavorite} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList