import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='mt-36  '>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
