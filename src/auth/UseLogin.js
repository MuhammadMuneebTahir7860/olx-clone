import { useState} from "react";
import {AuthActionLogin} from '../redux/actions/AuthActions'; 
import {useDispatch} from 'react-redux';

export default function UseLogin(){
    const dispatch=useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[loginLoading,setLoginLoading]=useState(false);

    const loginHandler = () =>{
        dispatch(AuthActionLogin(email,password,setLoginLoading));
    }
    return[setEmail,setPassword,loginHandler,loginLoading]
}