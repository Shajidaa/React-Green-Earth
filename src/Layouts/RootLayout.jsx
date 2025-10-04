
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSippner/LoadingSpinner';
import { createContext, useState } from 'react';

export const CartContext=createContext({})
const RootLayout = () => {
    const [cart,setCart]=useState([])
    const navigate=useNavigation();
    // console.log(navigate);
    
    return (
        <CartContext.Provider value={{cart,setCart}}>
            <Navbar></Navbar>

            {
         navigate.state==="loading"?
          <LoadingSpinner></LoadingSpinner>:
           <main className='min-h-[calc(100vh-289px)]'>

              <Outlet></Outlet>
              
            </main>
            }
           
            
            <Footer></Footer>
        </CartContext.Provider>
    );
};

export default RootLayout;

