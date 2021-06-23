

let initialState={
    usersArray:[],
}

function UserReducer(state=initialState,action){
    switch(action.type){
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
