import styles from '../styles/Products.module.css'
import ProductItem from './ProductItem'

const Products = () => {
    return (
        <>
            <div className={styles.row}>
                <div className={styles.col}>
                    <ProductItem />
                </div>
                <div className={styles.col}>
                    <ProductItem />
                </div>
                <div className={styles.col}>
                    <ProductItem />
                </div>
                <div className={styles.col}>
                    <ProductItem />
                </div>
            </div>
        </>
    )
}

export default Products