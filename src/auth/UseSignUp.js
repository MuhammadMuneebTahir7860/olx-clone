import { useState} from "react";
import {AuthActionSignUp} from '../redux/actions/AuthActions'; 
import {useDispatch} from 'react-redux';
export default function UseSignUp(){
    const dispatch=useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[signUpLoading,setSignUpLoading]=useState(false);

    const signUpHandler = () =>{
        if(firstName!='' && lastName!=''){
        let user ={
            email,
            password,
            firstName,
            lastName,
        }
        dispatch(AuthActionSignUp(user,setSignUpLoading));
    }
    else{
        alert("Please fill all fields")
    }
    }

    return[setEmail,setPassword,setFirstName,setLastName,firstName,lastName,signUpHandler,signUpLoading]
}