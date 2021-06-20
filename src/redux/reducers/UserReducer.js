

let initialState={
    usersArray:[],
    Userproducts:[],
}

function UserReducer(state=initialState,action){
    switch(action.type){
        case 'USER_PRODUCTS_DATA':
            return{
                ...state,
                Userproducts:action.payload,
            }
            case 'FETCH_USER_DATA':
             return{
                 ...state,
                 usersArray:action.payload,
             }
            default: 
            return state;
    }
}
export default UserReducer;
