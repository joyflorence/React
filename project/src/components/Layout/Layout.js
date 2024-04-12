import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <Layout>
        <h1> {Children}</h1>
        <Header/>
        <Footer/>
    </Layout>
  )
}

export default Layout