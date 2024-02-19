import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
       <div> <Navbar /> </div> 
       <div className='flex-grow'>  <Outlet /> </div>
      <div> <Footer /> </div> 
    </div>
  )
}

export default Layout