/* eslint-disable @next/next/no-img-element */
import { ProductItemComponent } from '../modules/SystemTypes'
import styles from '../styles/ProductItem.module.css'


/**
 * ProductItem component handles or returns a single catalog item
 * @param param0 - { product, onSetFavorite } -> the props needed for the component to work properly
 * @returns - JSX
 */
const ProductItem:ProductItemComponent = ( { product, onSetFavorite } ) => {
    return (
        <div className={styles.cardMain} data-testid={`product-item-${product.id}`}>
            <div className={styles.card}>
                <div className={styles.productImg}>
                    <img className={styles.img} src={product.image} alt="product image" />
                </div>
                <div className={styles.favoriteIcon}>
                    {product.favorite ? <span className="material-icons" onClick={() => onSetFavorite(product.id)}> favorite </span> : <span className="material-icons" onClick={() => onSetFavorite(product.id)}> favorite_border </span>}
                </div>
                {product.discontinued && <div className={styles.discontinued}></div>}
            </div>
            <div className={styles.productLabelDescription}>
                <span className={styles.productLabel}> {product.name} </span>
                <span className={styles.productPrice}> {Number(product.price).toFixed(2)}$</span>
            </div>
        </div>
    )
}

export default ProductItem