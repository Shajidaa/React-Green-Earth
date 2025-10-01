import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import './index.css'
import RootLayout from './Layouts/RootLayout';
import { createBrowserRouter } from 'react-router';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';

const router=createBrowserRouter([
  {
    path:'/',
 Component: RootLayout,
 children:[
        {
        index:true,
        Component:Home
        },{
          path:'/home',
           Component:Home
        },{
          path:'/contact',
           Component:Contact
        }
        ,{
          path:'/about',
           Component:About
        },{
          path:'/a',
          element: <div>hello element </div>
        }
 ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>

  </RouterProvider>
  </StrictMode>,
)
