import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (

    <div>
      <nav className="bg-orange-500 p-3 sm:grid sm:grid-cols-12 flex justify-between">
        <div className='sm:col-span-1'></div>
        <div className='sm:col-span-9'>
          <h1 className=' py-1 text-xl italic font-bold'>Foodie We</h1>
        </div>
        <div className='sm:col-span-1'>
          <ul className='flex space-x-4'>
            <li className=' py-1 hover:text-white'>  <Link to={'/'}> Home </Link></li> 
            <li className=' bg-black px-3 py-1 rounded-2xl text-white'><Link to={'login'}> Login </Link></li>
          </ul>
        </div>


      </nav>
    </div>

  )
}
