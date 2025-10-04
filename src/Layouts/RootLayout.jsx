
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSippner/LoadingSpinner';

const RootLayout = () => {
    const navigate=useNavigation();
    console.log(navigate);
    
    return (
        <div>
            <Navbar></Navbar>

            {
         navigate.state==="loading"?
          <LoadingSpinner></LoadingSpinner>:
           <main className='min-h-[calc(100vh-289px)]'>

              <Outlet></Outlet>
              
            </main>
            }
           
            
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;

