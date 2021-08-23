import { useEffect } from "react";
import {auth, signInWithGoogle} from "./firebase";



let Login=()=> {
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            console.log(user);
        })
    },[])
    return (<>
      <button class="btn btn-primary m-2" onClick={(e)=>{
          signInWithGoogle();
      }}>Login with Google</button>

      <button class= "btn btn-primary" onClick={(e)=>{
          auth.signOut();
      }}>Sign out</button>
    </>
    );
  };
  
  export default Login;