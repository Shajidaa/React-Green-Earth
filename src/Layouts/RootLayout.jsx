import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-289px)]'>

              <Outlet></Outlet>
              
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;

