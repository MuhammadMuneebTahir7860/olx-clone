import bannerImage from '../../assets/banner-1.jpg';
import AllProducts from './products/AllProducts'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function LandingPage(){
    return(
        <div>
                     <div>
        <ToastContainer
        style={{marginTop:100}}
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
/>
      </div>
            <img src={bannerImage} width="100%" alt="banner" />
           <AllProducts />
        </div>
    )
}