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

const router=createBrowserRouter([
  {
    path:'/',
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
          Component: PlantDetails
        }
 ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
