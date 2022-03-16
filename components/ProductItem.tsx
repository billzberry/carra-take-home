/* eslint-disable @next/next/no-img-element */
import { ProductItemComponent } from '../modules/SystemTypes'
import styles from '../styles/ProductItem.module.css'

const ProductItem:ProductItemComponent = ( { img, label, price, discontinued, favorite } ) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.productImg}>
                    <img className={styles.img} src={img} alt="product image" />
                </div>
                <div className={styles.favoriteIcon}>
                    {favorite ? <span className="material-icons"> favorite </span> : <span className="material-icons"> favorite_border </span>}
                </div>
                {discontinued && <div className={styles.discontinued}></div>}
            </div>
            <div className={styles.productLabelDescription}>
                <span className={styles.productLabel}> {label} </span>
                <span className={styles.productPrice}> {Number(price).toFixed(2)}$</span>
            </div>
        </>
    )
}

export default ProductItem