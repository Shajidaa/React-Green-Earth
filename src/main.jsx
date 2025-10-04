import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import './index.css'
import RootLayout from './Layouts/RootLayout';
import { createBrowserRouter } from 'react-router';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import PlantDetails from './Pages/PlantDetails';
import axios from 'axios';
import LoadingSpinner from './Components/LoadingSippner/LoadingSpinner';
import Cart from './Pages/Cart';

const router=createBrowserRouter([
  {
    path:'/',
    HydrateFallback: LoadingSpinner,
 Component: RootLayout,
 children:[
        {
        index:true,
        element:<Home/>,
        loader:()=>fetch('https://openapi.programming-hero.com/api/plants'),
        },{
          path:'home',
           element:<Home/>,
          //  loader:()=>fetch('https://openapi.programming-hero.com/api/plants'),
        },{
          path:'/contact',
           Component:Contact
        }
        ,{
          path:'/about',
           Component:About
        },{
          path:'/plantDetails/:id',
          Component: PlantDetails,
          loader:({params})=>axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
        } ,{
          path:'/cart',
           Component:Cart
        }
 ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
