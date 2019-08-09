import React from 'react';
import './App.css';
import ItemContainer from './Componentes/ItemContainer'
import Nav from './Componentes/Nav'


const App=()=>(
  <div className="App">
    <Nav name="Fabián Esteban Higuita Álvarez - Mercadolibre"/> 
    <img className="img-logo" src="https://res.cloudinary.com/hp20rcdax/image/upload/favicons/jol0wrk7bghmw5zhldgg" alt="mercado-logo" />
    <ItemContainer/>    
</div>   
  
)


export default App;
