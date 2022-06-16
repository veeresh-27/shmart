import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from '../../assets/logo1.png'
import { useNavigate } from 'react-router-dom';
import {useUserAuth} from  '../../context/UserAuthContext'

function Navbar({onClickNavTitile}) {
  const {logOut} = useUserAuth();
  const handleLogOut = async () => {
    // try{
    //     await logOut();
    //     navigate('/');
    // }catch(error){
    //     alert(error.message)
    // }
    navigate('/my-profile')
  }
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const onClickBurger = () => {
    setShowNavbar(!showNavbar);
  }
  const navbarScroll = () => {
    if (window.scrollY > 100 )
      setShow(true) // show navbar Effect when scroll down
    else 
      setShow(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', navbarScroll);
    return () => {
      window.removeEventListener('scroll', navbarScroll);
    };
  }, []);

  return (
    <div className={show?(showNavbar?"navbar open":"navbar"):(showNavbar?"unScrolledNavbar open":"unScrolledNavbar")}>
      <div className="navbarLeftItems">
      <div className="navbarTitle" onClick={()=>navigate('/home')}>
        <img src={logo} alt='Logo'/>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <div className="searchIconContainer">
        <SearchIcon className='searchicon'/>
        </div>
       
      </div>
      </div>
      <div className="navbarRightItems">
      <div className="nav-links">
      <ul>
          <li className="nav-link" onClick={onClickBurger}>
            Accessories
          </li>
          <li className='nav-link' onClick={onClickBurger}>
            Clothing
          </li>
          <>
          
          </>
          <li>
            <div className="profileIcon"  onClick={handleLogOut}>
            <Avatar className='avatar' />
            </div>
          
          </li>
          
        </ul>
      </div>
      <div className="cartIcon">
        <ShoppingCartRoundedIcon className='icon' fontSize="large"/>
        </div>
      
      <div className="burger" onClick={onClickBurger}>
        <MenuRoundedIcon className='icon' fontSize="large"/>
      </div>
      
      </div>
    </div>
  )
}

export default Navbar