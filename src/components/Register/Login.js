import React from 'react'
import './register.css'
import {useNavigate} from 'react-router-dom'
import { signInWithGoogle } from '../../firebaseApp'
import { useState } from 'react'
import { useUserAuth} from '../../context/UserAuthContext'



export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signUp} = useUserAuth();

    let navigate =useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signUp(email,password);
            navigate('/home')
        }
        catch(error){
            alert(error.message)
        }

    }
  return (
    <div className='register-container'>
        <div className="register">
            
            <div className="register-body">
                <h2>Register In</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email Id' onChange={(e)=>setEmail(e.target.value)} />
                    {/* <input type='name' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}/> */}
                    <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">Signup</button>
                </form>
                <hr className='register-hr' />
                <button  onClick={signInWithGoogle}>
  Sign in with Google
</button>
                <div className="signup-btn">
                    <p>Already have an account?</p>
                    <button onClick={()=>navigate('/')}>SignIn</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

