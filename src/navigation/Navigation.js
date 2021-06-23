import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LandingPage from '../modules/landingPage/LandingPage';
import Header from '../commonComponents/Header/Header';
import NavBar from '../commonComponents/navbar/NavBar';
import NavBarMobile from '../commonComponents/navBarMobile/NavBarMobile';
import MobilePhones from "../modules/AllcategoriesPages/MobilePhones";
import Cars from "../modules/AllcategoriesPages/Cars";
import Motorcycles from "../modules/AllcategoriesPages/Motorcycles";
import HomeAppliances from "../modules/AllcategoriesPages/HomeAppliances";
import LandsPlots from "../modules/AllcategoriesPages/LandPlots";
import Tablets from "../modules/AllcategoriesPages/Tablets";
import Animals from "../modules/AllcategoriesPages/Animals";
import KidsToys from "../modules/AllcategoriesPages/KidsToys";
import Clothes from "../modules/AllcategoriesPages/Clothes";
import ProductDetailsPage from "../modules/AllcategoriesPages/productDetailsPage/ProductDetailsPage";
import NotFoundSearch from "../modules/notFoundPage/NotFoundSearch";
import Footer from '../commonComponents/footer/Footer';
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import { useSelector } from "react-redux";
import PublicRoute from "../customDefinedRouting/PublicRouting";
import PrivateRoute from "../customDefinedRouting/PrivateRoute";
import Selling from "../commonComponents/selling/Selling";
import MyAds from "../modules/myadsPage/MyAds";
import ProductEditPage from '../commonComponents/selling/ProductEditPage';
import MyFavourities from "../modules/myFavourities/MyFavourities";
export default function Navigation() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
    return (
        <Router>
            <Header />
            <NavBar />
            <NavBarMobile />
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
                <PublicRoute path="/login" auth={authState}>
                    <Login />
                 </PublicRoute>  
                <PublicRoute path='/sign-up' auth={authState}>
                    <SignUp />
                </PublicRoute>
                <PrivateRoute  path="/selling" auth={authState}>
                    <Selling />
                 </PrivateRoute> 
                 <Route path='/edit/:docId'>
                     <ProductEditPage />
                 </Route>
                <Route path='/mobile-phones'>
                    <MobilePhones />
                </Route>
                <Route path='/cars'>
                    <Cars />
                </Route>
                <Route path='/motorcycles'>
                    <Motorcycles />
                </Route>
                <Route path='/home-appliances'>
                    <HomeAppliances />
                </Route>
                <Route path='/land-plots'>
                    <LandsPlots />
                </Route>
                <Route path='/tablets'>
                    <Tablets />
                </Route>
                <Route path='/animals'>
                    <Animals />
                </Route>
                <Route path='/kids-toys'>
                    <KidsToys />
                </Route>
                <Route path='/clothes'>
                    <Clothes />
                </Route>
                <PrivateRoute path='/my-ads' auth={authState}>
                    <MyAds />
                </PrivateRoute>
                <PrivateRoute path='/my-favourities' auth={authState}>
                    <MyFavourities />
                </PrivateRoute>
                <Route path='/products/:docId'>
                    <ProductDetailsPage />
                </Route>
                <Route path='*'>
                <NotFoundSearch />
                </Route>
            </Switch>
            <Footer />
        </Router>

    )
}