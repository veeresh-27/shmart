import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Item.css'
import info from '../info.json'

 

function Item() {
    const {id} = useParams();
    
    const [photoNum,setPhotoNum] = useState(0);
    const photoActive = (index) => {
        setPhotoNum(index);
        
    }
    
  return (
   <div className='itemContainer'>
        <div className="itemLeft">
            <div className="leftImage">
            <img src={info[id].photos[photoNum]} alt="preview images" />
            </div>
        </div>
        <div className="itemRight">
            <div className="mobileview">
            <div className="mobileviewC1">
            <div className="rightHead">
            <h2>{info[id].name}</h2>
            </div>
            <div className="rightBrand">
            <h3>{info[id].brand}</h3>
            </div>
            
            <div className="rightDesc">
            <p>{info[id].description}</p>
            </div>
            </div>
            
            <div className="photos">
            {info[id].photos.map((photo,index)=>(
                <div className={photoNum==index?"photoActive":"photo"} key={index}>
                    <img src={photo} alt="photos" key={index} onClick={()=>photoActive(index)}/>
                </div>
                
            ))}
            </div>
            </div>
            <div className="rightPrice">
            <h4>Price: <span>{info[id].price}</span>/-</h4>
            </div>
            <div className="addToCart">
            <button>Buy Now</button>
            <button>Add to Cart</button>
            </div>
            
        </div>
    </div>
  )
}

export default Item