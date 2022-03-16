import { LayoutComponent } from "../modules/SystemTypes"


/**
 * Layouts - Is the initial or fundamental element or component which wraps around all components
 * @param param0 - children -> This param accept any component or element passed as props
 * @returns - JSX
 */
const Layouts: LayoutComponent = ( { children } ) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layouts