import { useDispatch} from 'react-redux';
import { FavProductAction,UnFavProductAction } from '../../redux/actions/FavProductAction';
import { FetchProducts } from '../landingPage/products/UseAllProducts';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { useState } from 'react';
export function UseMyFavourities(){
    const dispatch=useDispatch();
    const history =useHistory();
    const[favLoading,setFavLoading]=useState(false);
    const[unFavLoading,setUnFavLoading]=useState(false);
    const[productsData,getFavProducts,loading,userId]=FetchProducts();

    const favNotify = () =>toast.success('🦄 Favourited!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });;
        const UnFavNotify = () =>toast.info('🦄 Unfavourited!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });;
    const favBtn = (products) =>{
        dispatch(FavProductAction(products,userId,favNotify,setFavLoading));
    }
    const UnFavBtn = (favDocId)=>{
        dispatch(UnFavProductAction(favDocId,UnFavNotify,setUnFavLoading));
    }


    return([favBtn,UnFavBtn,favLoading,unFavLoading])
}