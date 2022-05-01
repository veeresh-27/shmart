import React from 'react'
import './Login.css'
import logo from '../../assets/logo1.png'
import {useNavigate} from 'react-router-dom'

function Login() {
    const onClickLogin = (e) => {
        e.preventDefault();
        console.log('login');
    }
    let navigate =useNavigate();
  return (
    <div className='login-container'>
        <div className="login">
            <div className="login-head">
                <img src={logo} alt="logo" />
            </div>
            <div className="login-body">
                <form >
                    <input type="email" placeholder='Email Id' />
                    <input type="password" placeholder='Password' />
                    <button type="submit" onClick={onClickLogin}>Login</button>
                </form>
                <hr className='login-hr' />
                <div className="signup-btn">
                    <p>Don't have an account?</p>
                    <button onClick={()=>navigate('/auth/registration')}>SignUp</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login