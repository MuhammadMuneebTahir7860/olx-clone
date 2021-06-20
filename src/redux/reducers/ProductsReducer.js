

let initialState={
   error:'',
   FetchedProductsArray:[],
}

function ProdcutsReducer (state=initialState, action){
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return{
                ...state,
                FetchedProductsArray:action.payload,
            }
            case "DELETE_PRODUCT":{
                let filterProducts =state.FetchedProductsArray.filter((item)=>item.docId !=action.payload);
                return{
                    ...state,
                    FetchedProductsArray:filterProducts,
                }
            }
            default: 
            return state;
    }
}

export default ProdcutsReducer;