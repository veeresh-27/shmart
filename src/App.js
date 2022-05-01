import React ,{useState}from "react";
import Item from "./components/Item/Item";
import info from './components/info.json'
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import  Login  from './components/Login/Login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Pricingcards from "./components/Pricingcards/Pricingcards";
import Register from "./components/Register/Login";

function App() {
    
    
    return <div className="app">
        
        <BrowserRouter>
            <Routes>
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/registration' element={<Register />} />
                <Route path='/home' element={<><Navbar/><Pricing /></> } />
                <Route path='/item/:id' element={<><Navbar/><Item  /></> } />

            </Routes>
        </BrowserRouter>
    </div>;

}

export default App;