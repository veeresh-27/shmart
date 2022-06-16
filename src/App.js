import React ,{useState}from "react";
import Item from "./components/Item/Item";
import info from './components/info.json'
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import  Login  from './components/Login/Login.js';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from "./context/UserAuthContext";


import Pricingcards from "./components/Pricingcards/Pricingcards";
import Register from "./components/Register/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MyProfile from "./views/myProfile/myProfile";


function App() {
    
    return <div className="app">
        
        <BrowserRouter>
        <UserAuthContextProvider>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/registration' element={<Register />} />
                <Route path='/home' element={<ProtectedRoute><Navbar/><Pricing /></ProtectedRoute> } />
                <Route path='/item/:id' element={<ProtectedRoute><Navbar/><Item  /></ProtectedRoute> } />
                <Route path='my-profile' element={<><MyProfile/></>} />
            </Routes>
            </UserAuthContextProvider>
        </BrowserRouter>
    </div>;

}

export default App;