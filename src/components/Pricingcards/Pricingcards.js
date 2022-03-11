import React from 'react'
import './Pricingcards.css'
// import { useState } from 'react'
// import info from '../info.json'

const Pricingcards = ({ title, preview, brand, price, id,onClick }) => {
    
    return (<div className = 'card'
        id = { id } onClick={onClick} >
        <div className = 'card-image' >
        <img src = { preview } alt = "" />
        </div> 
        <h3 >  { brand } </h3> 
        <h4 > { title }</h4>
        <p> Rs { price } /-</p>
    </div> 
    )
}

export default Pricingcards