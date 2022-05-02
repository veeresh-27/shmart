// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWTFApDXxFoPnhrEVUURhGKed7EdAf-a4",
  authDomain: "shmart-369a9.firebaseapp.com",
  projectId: "shmart-369a9",
  storageBucket: "shmart-369a9.appspot.com",
  messagingSenderId: "921146828193",
  appId: "1:921146828193:web:36fbfb659b7f53e08a57e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export const signInWithGoogle = () => signInWithPopup(auth,provider);
const getUser = () =>{
    return auth.currentUser;
}



const login = () =>{
    signInWithGoogle().then((result) => {
        console.log(result);
    })

}

const logout = () =>{
    auth.signOut().then(()=>{
        console.log('logged out');
        
    })
}

export {login,getUser,logout,auth};