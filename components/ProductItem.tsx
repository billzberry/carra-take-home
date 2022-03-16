/* eslint-disable @next/next/no-img-element */
import { ProductItemComponent } from '../modules/SystemTypes'
import styles from '../styles/ProductItem.module.css'

const ProductItem:ProductItemComponent = ( { product, onSetFavorite } ) => {
    return (
        <>
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
        </>
    )
}

export default ProductItem