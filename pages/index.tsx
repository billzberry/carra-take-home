import type { NextPage } from 'next'
import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'
import Products from '../components/Products'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Products />
    </>
  )
}

export default Home
