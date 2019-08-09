import React from 'react';
import {getSeller} from '../Servicios/seller'
import Seller from './Seller'

const Card=({name,image,price,sell})=>
 ( 
   
  <div className="col-md-4 ">
  <div className="card mt-4">    
    <div className="card-header bg-warning mb-3">      
    <div className="card-title text-center">
      <h6>{name}</h6>          
    </div>
    </div>    
    <div className="card-body text-center ">
      <img src={image} alt={name}/>
    </div>
    <div className="card-footer bg-warning mb-3">
    
     <p>Precio: {price}</p>
      <p><Seller sel={sell}/></p>
    </div>   
  </div>
  </div>
 )
export default Card;