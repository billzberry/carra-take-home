import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { ProductDetails } from '../../modules/SystemTypes'
import ProductItem from '../ProductItem'


afterEach(() => {
    cleanup()
})


describe('Testing of ProductItem Component', () => {

    test('ProductItem component should have testid and text content of Carra First Product', async () => {
        const product:ProductDetails = {
            id: '1',
            createdAt: '',
            name: 'Carra First Product',
            image: '',
            price: '20',
            offers: [],
            discontinued: false,
            favorite:false
        }

        render(<ProductItem product={product} onSetFavorite />)
        const elementChild = await screen.findByTestId('product-item-1')
        expect(elementChild).toBeInTheDocument()
        expect(elementChild).toHaveTextContent('Carra First Product')
    })

})

