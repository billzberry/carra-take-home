
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import Layout from '../Layout'


afterEach(() => {
    cleanup()
})


describe('Testing of Layout Component', () => {

    test('Layout component should have testid and text content of Hello Carra', async () => {
        render(<Layout> <h1 data-testid="carra-1" className='carra'>Hello Carra</h1> </Layout>)
        const elementChild = await screen.findByTestId('carra-1')
        expect(elementChild).toBeInTheDocument()
        expect(elementChild).toHaveTextContent('Hello Carra')
    })

})

