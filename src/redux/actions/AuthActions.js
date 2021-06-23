import {auth,db} from '../../config/Firebase';

export const AuthActionLogin=(email,password,setLoginLoading)=> async (dispatch)=>{
    try{
      setLoginLoading(true);
        const userCredential= await auth.signInWithEmailAndPassword(email,password);
        const user=userCredential.user;
        dispatch(
            {
                type:"LOGIN",
                payload:user,
            }
        )
      }
      catch (error){
        alert(JSON.stringify(error.message))
      }  
      finally{
        setLoginLoading(false)
      } 
}
export const AuthActionLogout = () => async (dispatch) => {
  try {
    const res = await auth.signOut();
    window.location.reload(true)
    dispatch({
      type: "LOGOUT",
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const get= (setPending)=>async(dispatch)=>{
  try{
  await auth.onAuthStateChanged((user) => {
  if (user) {
    const uid=user.uid;
      dispatch({
        type:'GET',
        payload:user,
      })
      setPending(false)
}
else{
  setPending(false)
}
  });
}
catch(error){
    console.log(error.message);
}
}
export const currentUserId =(setUserId)=>async (dispatch)=>{
  await auth.onAuthStateChanged((user)=>{
    if(user){
      const uid=user.uid;
      setUserId(uid)
    }
  })
}

export const AuthActionSignUp=(user,setSignUpLoading)=> async (dispatch)=>{
  try{
      setSignUpLoading(true)
      const userCredential= await auth.createUserWithEmailAndPassword(user.email,user.password);
      const userData=userCredential.user;
      db.collection('users').add(user);
      dispatch(
          {
              type:"LOGIN",
              payload:userData,
          }
      )
    }
    catch (error){
      alert(JSON.stringify(error.message))
    }  
    finally{
      setSignUpLoading(false)
    } 
}

