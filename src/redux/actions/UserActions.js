import { db,auth ,storage} from "../../config/Firebase";


export const UserProductsData = (productData,setPostLoading,file,setFile,setImage,image) => async (dispatch,previousState)=>{
    try{
        setPostLoading(true)
        const ref=storage.ref(`/images/${file.name}`);
            const uploadTask=ref.put(file);
            uploadTask.on("state_changed",console.log,console.error,()=>{
                ref
                .getDownloadURL()
                .then((url)=>{
                    setFile('');
                    setImage(url);
                    console.log(url);
                    db.collection("products").add({...productData,image:url});
                });
            }); 
        // let fetchUserData=await db.collection("products").add(newData);
        // dispatch(
        //     {
        //         type:'USER_PRODUCTS_DATA',
        //         payload:productData,
        //     }
        // );
    }
    catch (error){
        console.log(error.message);
    }
    finally{
        setPostLoading(false)
    }
}
// export const uploadProductImage =(file,setFile,setImage,image,setPictureLoading)=>async(dispatch,previousState)=>{
//     try{
//             setPictureLoading(true)
//             const ref=storage.ref(`/images/${file.name}`);
//             const uploadTask=ref.put(file);
//             uploadTask.on("state_changed",console.log,console.error,()=>{
//                 ref
//                 .getDownloadURL()
//                 .then((url)=>{
//                     setFile('');
//                     setImage(url);
//                     console.log(url);
//                 });
//             });            
//     }
//     catch(error){
//         console.log(error.message);
        
//     }
//     finally{
//         setPictureLoading(false)
//     }
// }

export const getUserId =(setUid) => async(dispatch)=>{
    try{
        const user =await auth.currentUser;
        if (user) {
            var uid = user.uid;
            setUid(uid);
        } 
  }
            
  catch (error){
        console.log(error.message);
    }
  }
  export const getUid =(setUserId) => async(dispatch)=>{
    try{
        const user =await auth.currentUser;
        if (user) {
            var uid = user.uid;
            setUserId(uid)
        } 
  }
            
  catch (error){
        console.log(error.message);
    }
  }


  export const fecthUserData = () => async (dispatch,previousState)=>{
    try{
        let fetchUserData=await db.collection("users").get();
        const usersArray=[];
        fetchUserData.forEach(doc => {
            usersArray.push({...doc.data()});
        });
        dispatch(
            {
                type:'FETCH_USER_DATA',
                payload:usersArray,
            }
        );
    }
    catch (error){
        console.log(error.message);
    }
}

