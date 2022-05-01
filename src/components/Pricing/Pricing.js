import React from 'react'
import './Pricing.css'
// import { useState } from 'react'
import info from '../info.json'
import Pricingcards from '../Pricingcards/Pricingcards'
import {useNavigate} from 'react-router-dom'
import useFetch  from '../../hooks/useFetch'
// import Navbar from '../Navbar/Navbar'

function Pricing() {

  const {loading , error,data} = useFetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
  let navigate =useNavigate();

  if(loading){
    console.log('loading')
   return (<div className='layout'><h1>Loading...</h1></div>);
  
  }
  if(error)
    return(<div className='layout'>Error</div>);
  
   console.log(data)
  
  const onClickPriceCard = ({index})=>{
      navigate(`/item/${index}`);
      
  }
 
  return <div>
    
    <div className='layout'>
      <div className="nonAccessories">
        <div className="nonAccessoriesHead">
          <h2>Men And Women</h2>
        </div>
        <div className="pricing">
          {

            data.map(({ name, preview, brand, price, id, isAccessory }, index) => (

              !isAccessory ? < Pricingcards key={index} title={name} preview={preview} brand={brand} price={price}
                id={id} onClick={()=>onClickPriceCard({index})} /> : <></>

            ))
          }
        </div>

      </div>
      <div className="accessories">
        <div className="accessoriesHead">
          <h2>Accessories</h2>
        </div>
        <div className='pricing' >

          {
            data.map(({ name, preview, brand, price, id, isAccessory }, index) => (

              isAccessory ? < Pricingcards key={index} title={name} preview={preview} brand={brand} price={price}
                id={id} onClick={()=>onClickPriceCard({index})} /> : <></>

            ))

          }
        </div>
      </div>

    </div>
  </div>

}

export default Pricing