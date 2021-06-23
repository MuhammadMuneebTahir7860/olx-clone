import { db,auth ,storage} from "../../config/Firebase"; 
export const UserProductsData = (fileName,notify,push,productData,setPostLoading,file,setFile,setImage,image) => async (dispatch,previousState)=>{

        const ref=storage.ref(`/images/${fileName}`);
            const uploadTask=ref.put(file);
            setPostLoading(true)
            uploadTask.on("state_changed",console.log,console.error,()=>{
                ref
                .getDownloadURL().
                then((url)=>{
                setPostLoading(false)
                db.collection("products").add({...productData,image:url});
                notify();
                push();
                })
            }); 
}
export const UpdateProductDataWithoutImageFile =(productData,docId,push,notify,setPostLoading,file) =>async(dispatch)=>{
    try{
        setPostLoading(true)
        await db.collection("products").doc(docId).update(productData);
        notify();
        push();
    }
    catch(error){
        console.log(error.message);
    }   
    finally{
        setPostLoading(false)
    }
}
export const UpdateProductsData = (fileName,notify,push,productData,setPostLoading,file,setFile,setImage,image,docId) => async (dispatch,previousState)=>{

    const ref=storage.ref(`/images/${fileName}`);
        const uploadTask=ref.put(file);
        setPostLoading(true)
        uploadTask.on("state_changed",console.log,console.error,()=>{
            ref
            .getDownloadURL().
            then((url)=>{
            setPostLoading(false)
            db.collection("products").doc(docId).update(({...productData,image:url}));
            notify();
            push();
            })
        }); 
}
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

