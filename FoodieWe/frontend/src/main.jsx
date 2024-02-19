import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './screens/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './screens/Login.jsx'
import Layout from './Layout.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='login' element={<Login />}/>
    </Route>
  )
)

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>,
  )
