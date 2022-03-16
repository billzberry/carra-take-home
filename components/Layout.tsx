import * as React from 'react'
import { LayoutProp } from "../modules/SystemTypes"


/**
 * Layouts - Is the initial or fundamental element or component which wraps around all components
 * @param param0 - children -> This param accept any component or element passed as props
 * @returns - JSX
 */
const Layouts: React.FC<LayoutProp> = ( { children } ) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layouts