import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../../redux/actions/AuthActions';
import { fecthProducts} from '../../../redux/actions/ProductsAction';
import { currentUserId } from '../../../redux/actions/AuthActions';
import { GetFavProductAction } from '../../../redux/actions/FavProductAction';
export function FetchProducts(){
const dispatch =useDispatch();
const productsData= useSelector(state =>state.ProdcutsReducer.FetchedProductsArray);
const getFavProducts=useSelector(state => state.FavProductsReducer.favProducts);
    const[loading,setLoading]=useState(false);
    const[userId,setUserId]=useState("");
    const[pending,setPending]=useState('');

    useEffect(()=>{
        dispatch(currentUserId(setUserId));
        dispatch(GetFavProductAction());
        dispatch(fecthProducts(setLoading));
        dispatch(get(setPending,setUserId));
    },[])
    return([productsData,getFavProducts,loading,userId]);
}