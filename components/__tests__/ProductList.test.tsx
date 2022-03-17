import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { ProductDetails } from '../../modules/SystemTypes'
import ProductList from '../ProductList'


afterEach(() => {
    cleanup()
})


describe('Testing of ProductList Component', () => {

    test('ProductList component should have testid and text content of Carra First Product', async () => {
        const products:ProductDetails[] = [
            {
                id: '1',
                createdAt: '',
                name: 'Carra First Product',
                image: '',
                price: '20',
                offers: [],
                discontinued: false,
                favorite:false
            }
        ]

        render(<ProductList products={products} onSetProductFavorite />)
        const elementChild = await screen.findByTestId('product-list')
        expect(elementChild).toBeInTheDocument()
        expect(elementChild).toHaveTextContent('Carra First Product')
    })

})

