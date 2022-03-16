import type { NextPage } from 'next'
import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
    </>
  )
}

export default Home
