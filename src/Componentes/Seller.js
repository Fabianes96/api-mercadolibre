import {getSeller} from '../Servicios/seller'
import React, { useState, useEffect }from 'react'

function Seller(props){
    
    const sellerState={
        s:props.sel,
        sellerName:''
    }
    const[selle,setSeller] = useState(sellerState);

    const handleSeller=async()=>{
        const resJson = await getSeller(sellerState.s)
        const nuevo={
            sellerName:resJson.nickname
        }
        setSeller(nuevo)
    }
    
    return(
        <div>
            <button onClick={handleSeller}>Ver seller</button>
            <p>{selle.sellerName}</p>
        </div>
        

        
        
        
    )

}


export default Seller;