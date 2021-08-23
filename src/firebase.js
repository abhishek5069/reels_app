import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADQlDjWCZJVKnxXOA4eY9SKV2WfPmY0do",
    authDomain: "reels-5ddb9.firebaseapp.com",
    projectId: "reels-5ddb9",
    storageBucket: "reels-5ddb9.appspot.com",
    messagingSenderId: "764007533227",
    appId: "1:764007533227:web:bb95c547b743a08c0945ee"
  };

  firebase.initializeApp(firebaseConfig);
let provider=new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle=()=>{
  auth.signInWithPopup(provider);
};
  export const auth = firebase.auth();

  export default firebase;