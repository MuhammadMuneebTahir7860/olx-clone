import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {UserProductsData,getUid} from '../../redux/actions/UserActions';
import {useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
export default function UseSelling(){
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
    const history=useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getUid(setUserId));
        setNumber(Math.random()*100000000);
    },[]);

    
    function handleChange (e){
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name+number)
    }

    const push= () =>{
        history.push('/');
    }
    const notify = () =>toast.success('🦄 Successfully Posted!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });;
       
    
        const dataPostHandler = () =>{
            if(title!='' && description!='' && price!='' && category!='' && location!='' && file!=""){
            let  productData={
                title,
                description,
                price,
                location,
                category,
                userId,
            }
          dispatch(UserProductsData(fileName,notify,push,productData,setPostLoading,file,setFile,setImage,image,postLoading));

        }
        else{
            alert("Please fill all fields")
        }
        }


    return[setTitle,setDescription,setPrice,setLocation,setCategory,title,description,location,category,price,dataPostHandler,postLoading,userId,setUserId,handleChange]
}