import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import './index.css'
import RootLayout from './Layouts/RootLayout';
import { createBrowserRouter } from 'react-router';

const router=createBrowserRouter([
  {
    path:'/',
 Component: RootLayout,
 Children:[

 ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>

  </RouterProvider>
  </StrictMode>,
)
