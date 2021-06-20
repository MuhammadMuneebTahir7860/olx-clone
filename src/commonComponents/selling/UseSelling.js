import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {UserProductsData} from '../../redux/actions/UserActions';
import {useHistory,useParams} from 'react-router-dom';
import { getUid ,uploadProductImage} from '../../redux/actions/UserActions';
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
    const[pictureLoading,setPictureLoading]=useState(false);
    const {docId}=useParams();
    const history=useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getUid(setUserId));
    },[]);
    // console.log(docId);

    
    function handleChange (e){
        setFile(e.target.files[0])
    }

    function UploadPhoto(){
        // if(file !=''){
        // dispatch(uploadProductImage(file,setFile,setImage,image,setPictureLoading))
        // }
        // else{
        //     alert("Please Upload Picture")
        // }
    }

    
        const dataPostHandler = () =>{
        // console.log(image);
            // if(title!='' && description!='' && price!='' && category!='' && location!='' ){
            let  productData={
                title,
                description,
                price,
                location,
                category,
                userId,
            }
          dispatch(UserProductsData(productData,setPostLoading,file,setFile,setImage,image));
        // alert("Successfully Uploaded");
            // history.push('/')
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setCategory('');
        // }
        // else if(file!='' && image==''){
        //         alert("Please click on 'UPLOAD PHOTO' button for Uploading Photo");
        // }
        // else{
        //     alert("Please fill all fields")
        // }
        }


    return[pictureLoading,UploadPhoto,setTitle,setDescription,setPrice,setLocation,setCategory,title,description,location,category,price,dataPostHandler,postLoading,userId,setUserId,handleChange]
}