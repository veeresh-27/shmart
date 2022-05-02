import React from 'react'
import './Login.css'
import logo from '../../assets/logo1.png'
import {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useUserAuth} from  '../../context/UserAuthContext'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {logIn} = useUserAuth();
    const {signInWithGoogle} = useUserAuth();

    const handleClick = async () => {
        try{
            await signInWithGoogle();
            navigate('/home');
        }catch(error){
            alert(error.message)
        }
    }

    let navigate =useNavigate();

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try{
            await logIn(email,password);
            navigate('/home')
        }
        catch(error){
            alert(error.message)
        }
        setEmail('')
        setPassword('')

    }

  return (
    <div className='login-container'>
        <div className="login">
            <div className="login-head">
                <img src={logo} alt="logo" />
            </div>
            <div className="login-body">
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email Id' onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" >Login</button>
                </form>
                <hr className='login-hr' />
                
                <button onClick={handleClick} className='gsbtn'>Signup with Google</button>
                <div className="signup-btn">
                    <p>Don't have an account?</p>
                    <button onClick={()=>navigate('/registration')}>SignUp</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login