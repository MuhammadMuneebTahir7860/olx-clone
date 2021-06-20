import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthProducts } from '../../../redux/actions/ProductsAction';
export function FetchProducts(){
const dispatch =useDispatch();


const productsData= useSelector(state =>state.ProdcutsReducer.FetchedProductsArray);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        dispatch(fecthProducts(setLoading));
    },[])





    return([productsData,loading])
}