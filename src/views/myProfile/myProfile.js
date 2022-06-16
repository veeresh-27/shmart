import { Avatar } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import  './myProfile.css'
import moment from "moment";

export default function MyProfile(){
   const {user} = useUserAuth();
   const {logOut} = useUserAuth();
   let navigate = useNavigate();
   const handleLogOut = async () => {
    try{
        await logOut();
        navigate('/');
    }catch(error){
        alert(error.message)
    }
  }
    return(
        <>
        <Navbar/>
        <div className="myProfileContainer">
            <div className="profilePicCard">
                <Avatar className='avatar' sx={{bgcolor:'primary.light'}}>{user?.email[0]}</Avatar>
                <h3>{user?.displayName?.toUpperCase()}</h3>
                <p >{user?.email}</p>
                {/* <p >Last Login: {moment(user?.metadata?.lastSignInTime).format("MMM Do YY")}</p> */}
            </div>
            <div className="logoutBtn">
                <button onClick={handleLogOut}>Logout</button>
            </div>
        </div>
        </>
    )
}