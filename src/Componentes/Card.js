import React from 'react';

const Card=({name,image,condition,price})=>
 ( <div className="single-item">
   <h5>{name}</h5>
   <img src={image} alt={name}/>
   <p>Condicion: {condition}</p>
   <p>Precio: {price}</p>
 </div> 
 
 )

export default Card;