import React from 'react';


const Card=({name,image,condition,price})=>
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
    <p>Condicion: {condition}</p>
     <p>Precio: {price}</p>    
    </div>   
  </div>
  </div>
 )

export default Card;