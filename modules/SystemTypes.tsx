import * as React from 'react'

/**
 * This type handles any component or element passed to the Layout Component
 */
export type LayoutProp = {
    children: any
}

export type LayoutComponent = React.FC<LayoutProp>

export type ProductDetails = {
    createdAt:string
    name:string
    image:string
    price:string|number
    offers:any[]
    discontinued:boolean
    id:string|number
    favorite?:boolean
}

export type ProductItemProp = {
    product:ProductDetails
    onSetFavorite:any
}

export type ProductItemComponent = React.FC<ProductItemProp>

export type ProductListProp = {
    products: ProductDetails[]
    onSetProductFavorite:any
}

export type ProductListComponent = React.FC<ProductListProp>

export type Favorite = {
    name:string
    id:string
}

export type HeaderProp = {
    favorites:Favorite[]
    onRemoveFavorite:any
}

export type HeaderComponent = React.FC<HeaderProp>

export type MetaProp = {
    metaDetails: {
        title:string
        keywords:string
        description:string
    }
}

export type MetaComponent = React.FC<MetaProp>