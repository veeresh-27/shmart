
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export default function ProtectedRoute({children}){
    let {user} =  useUserAuth();
    localStorage.setItem('user',JSON.stringify(user));
    let User = async () => {
        let user = await JSON.parse(localStorage.getItem('user'));
        return user;
    }
    let user1 = User();
    if(user1.email){ 
       return <Navigate to='/'/>
    }else
        return children;
}