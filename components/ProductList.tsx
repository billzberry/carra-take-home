import { ProductListComponent, ProductListProp } from '../modules/SystemTypes'
import styles from '../styles/Products.module.css'
import ProductItem from './ProductItem'

/**
 * ProductItem component handles or returns a list of ProductItems depending on the products prop passed
 * @param param0 - { products, onSetProductFavorite } -> the props needed for the component to work properly
 * @returns - JSX
 */
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