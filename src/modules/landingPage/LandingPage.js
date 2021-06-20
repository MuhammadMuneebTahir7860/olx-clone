import bannerImage from '../../assets/banner-1.jpg';
import AllProducts from './products/AllProducts'; 

export default function LandingPage(){
    return(
        <div>
            <img src={bannerImage} width="100%" alt="banner" />
           <AllProducts />
        </div>
    )
}