import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
const paths =  createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'shop/:id',
                element:<ProductDetails/>
            },
            {
                path:'checkout',
                element:<Checkout/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<Signup/>
            }
        ]
    }
])
const AppRouter = () => {
  return (
    <div>
        <RouterProvider router={paths}/>
    </div>
  )
}

export default AppRouter