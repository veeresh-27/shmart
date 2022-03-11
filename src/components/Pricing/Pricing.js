import React from 'react'
import './Pricing.css'
// import { useState } from 'react'
import info from '../info.json'
import Pricingcards from '../Pricingcards/Pricingcards'
// import Navbar from '../Navbar/Navbar'

function Pricing({onClickPriceCard}) {
  
  
 
  return <div>
    
    <div className='layout'>
      <div className="nonAccessories">
        <div className="nonAccessoriesHead">
          <h2>Men And Women</h2>
        </div>
        <div className="pricing">
          {

            info.map(({ name, preview, brand, price, id, isAccessory }, index) => (

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
            info.map(({ name, preview, brand, price, id, isAccessory }, index) => (

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