import { db } from "../../config/Firebase";


export const fecthProducts = (setLoading) => async (dispatch,previousState)=>{
    try{
        setLoading(true);
        let fetchRes=await db.collection("products").get();
        const productsArray=[];
        fetchRes.forEach(doc => {
            productsArray.push({docId:doc.id,...doc.data()});
        });
        dispatch(
            {
                type:'FETCH_PRODUCTS',
                payload:productsArray,
            }
        );
    }
    catch (error){
        console.log(error.message);
    }
    finally{
        setLoading(false)
    }
}

export const deleteProduct = (docId) => async (dispatch)=>{
    try{
        await db.collection('products').doc(docId).delete();
        dispatch({
            type:"DELETE_PRODUCT",
            payload:docId,
        })
    }
    catch(error){
        console.log(error.message);
        
    }
}