

let initialState={
    isUserLoggedIn:false,
    user:null,
 }
 
 function AuthReducer (state=initialState, action){
     switch(action.type){
         case 'LOGIN':
             return{
                 ...state,
                 isUserLoggedIn:  true,
                 user:action.payload,
             }
             case "LOGOUT":{
                     return {
                         ...state,
                        isUserLoggedIn:  false,
                        user:null
                     };
                 }
                 case "GET":{
                     return{
                         ...state,
                         isUserLoggedIn:true,
                         user:action.payload,
                     }
                 }
                 
             default: 
             return state;
     }
 }
 
 export default AuthReducer;