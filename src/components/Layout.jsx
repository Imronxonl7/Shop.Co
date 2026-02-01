import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='lg:mt-36 mt-24  '>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
