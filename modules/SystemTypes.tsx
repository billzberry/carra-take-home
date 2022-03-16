import * as React from 'react'

/**
 * This type handles any component or element passed to the Layout Component
 */
export type LayoutProp = {
    children: any
}

export type LayoutComponent = React.FC<LayoutProp>