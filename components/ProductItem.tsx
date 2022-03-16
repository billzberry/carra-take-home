/* eslint-disable @next/next/no-img-element */
import styles from '../styles/ProductItem.module.css'

const ProductItem = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.productImg}>
                    <img className={styles.img} src="https://placeimg.com/640/480/nature" alt="product image" />
                </div>
                <div className={styles.favoriteIcon}>
                    <span className="material-icons"> favorite_border </span>
                </div>
            </div>
            <div className={styles.productLabelDescription}>
                <span className={styles.productLabel}> Awesome Steel Pants </span>
                <span className={styles.productPrice}> 10.00$</span>
            </div>
        </>
    )
}

export default ProductItem