import { createContext,useContext,useEffect,useState } from "react";
import React from "react";
import {auth} from '../firebaseApp.js'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { Unsubscribe } from "@mui/icons-material";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth ,email,password);
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth ,email,password);
    }
    function logOut(){
        return signOut(auth);
    }
    function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    return <userAuthContext.Provider value={{user, signUp, logIn,logOut,signInWithGoogle}}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}