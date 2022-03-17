import { useState } from 'react'
import { HeaderComponent, HeaderProp } from '../modules/SystemTypes'
import styles from '../styles/Header.module.css'

/**
 * Header component handles the shortlist event and drawer
 * @param param0 - { favorites, onRemoveFavorite } -> props needed for the Header component to work properly
 * @returns - JSX
 */
const Header:HeaderComponent = ( { favorites, onRemoveFavorite } ) => {
    //dropdownChecker is initially set to false - making the drawer hidden
    const [dropdownChecker, setDropdownChecker] = useState(false)

    /**
     * showDropdown (Header Component) - this method handles how the drawer opens and closes
     */
    const showDropdown = () => {
        //Set the dropdownChecker to opposite the initial dropdownChecker value (if false, will be set to true)
        setDropdownChecker(!dropdownChecker)
    }

    return (
        <>
            <div className={styles.header} data-testid="header-component">
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