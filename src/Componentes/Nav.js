import React from 'react';

const Nav=(props)=>{
    return(        
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">{props.name}            
        </a>
        </nav>
    )                
}
export default Nav;