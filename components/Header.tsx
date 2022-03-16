import styles from '../styles/Header.module.css'


const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.favorite}>
                    <span className="material-icons"> favorite </span>
                    <div className={styles.badge}>2</div>
                </div>
            </div>
        </>
    )
}

export default Header