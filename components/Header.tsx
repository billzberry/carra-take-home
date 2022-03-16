import { useState } from 'react'
import { HeaderComponent, HeaderProp } from '../modules/SystemTypes'
import styles from '../styles/Header.module.css'


const Header:HeaderComponent = ( { favorites, onRemoveFavorite } ) => {
    const [dropdownChecker, setDropdownChecker] = useState(false)

    const showDropdown = () => {
        setDropdownChecker(!dropdownChecker)
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.favorite}>
                    <span className="material-icons" onClick={showDropdown}> favorite </span>
                    <div className={styles.badge}>{favorites.length}</div>
                    <div className={styles.dropdownContent} style={ { display: `${dropdownChecker ? 'block' : 'none'}`} }>
                        {favorites.map((favorite) => (
                            <a href="#" key={favorite.id}>
                                <span className={styles.dropdownContentItem}>{favorite.name}</span>
                                <span className={styles.dropdownContentRemoveBtn} onClick={() => onRemoveFavorite(favorite.id)}>x</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header