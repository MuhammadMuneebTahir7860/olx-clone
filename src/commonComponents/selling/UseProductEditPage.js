import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {UpdateProductsData,UpdateProductDataWithoutImageFile} from '../../redux/actions/UserActions';
import { toast } from 'react-toastify';

export function UseProductEditPage(){
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[price,setPrice]=useState('');
    const[location,setLocation]=useState('');
    const[userId,setUserId]=useState('');
    const[category,setCategory]=useState('');
    const[postLoading,setPostLoading]=useState(false);
    const[file,setFile]=useState("");
    const[image,setImage]=useState("");
    const[fileName,setFileName]=useState('');
    const[number,setNumber]=useState("");
    const[docId,setdocId]=useState('');
    const history=useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        setNumber(Math.random()*100000000);
    },[]);

    function  changeHandler (e){
        setImage(e.target.files[0])
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name+number);
    }

    const push= () =>{
        history.push('/');
    }
    const notify = () =>toast.success('🦄 Successfully Updated!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });;
       
    
        const dataEditHandler = () =>{
            if(file==''){
            if(title!='' && description!='' && price!='' && category!='' && location!=''){
            let  productData={
                title,
                description,
                price,
                location,
                category,
                userId,
                image,
            }
          dispatch(UpdateProductDataWithoutImageFile(productData,docId,push,notify,setPostLoading,file));
        }
        else{
            alert("Please fill all fields")
        }
        }
        if(file!=''){
            if(title!='' && description!='' && price!='' && category!='' && location!=''){
            let  productData={
                title,
                description,
                price,
                location,
                category,
                userId,
            }
            dispatch(UpdateProductsData(fileName,notify,push,productData,setPostLoading,file,setFile,setImage,image,docId));
        }
        else{
            alert("Please fill all fields")
        }
        }
        }



    return([postLoading,dataEditHandler,setdocId,title,setTitle,description,setDescription,price,setPrice,location,setLocation,category,setCategory,setUserId,image,setImage,changeHandler])
}