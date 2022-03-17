import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import Breadcrumb from '../Breadcrumb'


afterEach(() => {
    cleanup()
})


describe('Testing of Breadcrumb Component', () => {

    test('Breadcrumb component should have testid of breadcrumb and text content of Product Catalogue 2022', async () => {
        render(<Breadcrumb />)
        const elementChild = await screen.findByTestId('breadcrumb')
        expect(elementChild).toBeInTheDocument()
        expect(elementChild).toHaveTextContent('Product Catalogue 2022')
    })

})

