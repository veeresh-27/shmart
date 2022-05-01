import React from 'react'
import './Login.css'
import logo from '../../assets/logo1.png'
import {useNavigate} from 'react-router-dom'

export default function Register() {
    const onClickLogin = (e) => {
        e.preventDefault();
        navigate('/home');
        console.log('login');
    }
    let navigate =useNavigate();
  return (
    <div className='login-container'>
        <div className="login">
            
            <div className="login-body">
                <form onSubmit={onClickLogin}>
                    <input type="email" placeholder='Email Id' required='yes'/>
                    <input type='name' placeholder='Full Name' required='yes'/>
                    <input type="password" placeholder='Password' required='yes'/>
                    <input type="password" placeholder='Confirm Password' required='yes' />
                    <button type="submit">Signup</button>
                </form>
                <hr className='login-hr' />
                <div className="signup-btn">
                    <p>Already have an account?</p>
                    <button onClick={()=>navigate('/auth/login')}>SignIn</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

