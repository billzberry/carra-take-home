import * as React from 'react'

/**
 * This type handles any component or element passed to the Layout Component
 */
export type LayoutProp = {
    children: any
}

export type LayoutComponent = React.FC<LayoutProp>

export type ProductItemProp = {
    img:string
    label:string
    price:string|number
    discontinued:boolean
    favorite:boolean
}

export type ProductItemComponent = React.FC<ProductItemProp>

export type ProductListProp = {
    products: {
        createdAt:string
        name:string
        image:string
        price:string|number
        offers:any[]
        discontinued:boolean
        id:string|number
    }[]
}

export type ProductListComponent = React.FC<ProductListProp>