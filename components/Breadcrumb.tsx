import styles from '../styles/Breadcrumb.module.css'

/**
 * Breadcrumb component display the heading or title of a page
 * @returns - JSX
 */
const Breadcrumb = () => {
    return (
        <>
            <div className={styles.breadcrumb} data-testid="breadcrumb">
                <h2>Product Catalogue 2022</h2>
            </div>
        </>
    )
}

export default Breadcrumb