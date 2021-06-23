import { db } from "../../config/Firebase";
export const FavProductAction=(products,userId,favNotify,setFavLoading)=>async(dispatch)=>{
    try{
        setFavLoading(true)
    await db.collection('Favourities').add({...products,favUid:userId});
    favNotify();
    dispatch(
        {
            type:"ADD_FAVOURITE",
            payload:products,
        }
    )
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        setFavLoading(false)
    }
}

export const GetFavProductAction=()=>async(dispatch)=>{
    try{
    let allFavProducts=await db.collection('Favourities').get();
    const favProducts=[];
    allFavProducts.forEach(doc => {
        favProducts.push({favDocId:doc.id,...doc.data()});
    });
    dispatch(
        {
            type:"GET_FAVOURITIES",
            payload:favProducts,
        }
    )
    }
    catch(error){
        console.log(error.message);
    }
}

export const UnFavProductAction= (favDocId,UnFavNotify,setUnFavLoading) => async (dispatch)=>{
    try{
        setUnFavLoading(true)
        await db.collection('Favourities').doc(favDocId).delete();
        UnFavNotify();
        dispatch({
            type:"UNFAV_PRODUCT",
            payload:favDocId,
        })
    }
    catch(error){
        console.log(error.message);
        
    }
    finally{
        setUnFavLoading(false)
    }
}

