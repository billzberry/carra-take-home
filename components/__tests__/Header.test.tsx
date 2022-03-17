import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import Header from '../Header'


afterEach(() => {
    cleanup()
})


describe('Testing of Header Component', () => {

    test('Header component should have testid of header-component', async () => {
        render(<Header favorites={[]} onRemoveFavorite />)
        const elementChild = await screen.findByTestId('header-component')
        expect(elementChild).toBeInTheDocument()
    })

})

