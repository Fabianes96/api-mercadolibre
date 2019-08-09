import React from 'react'
import Card from './Card.js'
import {getItem} from '../Servicios/items'

import Buscar from './Busqueda'


class ItemContainer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            items: [],
            seller:'',
            isFetch: true,
            initial:false,
        }
        
    }
    
    async componentDidMount(){        
        this.setState({isFetch:false})                
    }    

    handleSearch=async(e)=>{
        
        const resJson = await getItem(e)
        this.setState({items: resJson.results, initial:true})
             
    }   

    render(){
        const {isFetch, items,initial} = this.state          
        
        return (
            <div className= "container">                 
                
                <div className="text-center">                    
                    <Buscar handleSearch={this.handleSearch}/>                              
                </div>               
                                                     
                {
                    isFetch && 'Cargando...'                    
                }            
                {
                    (!isFetch && !items.length && initial) && 'No se encontraron resultados'
                }                
                
             <div className="row mt-4">      
                <div className="col-md-14">
                <div className="row">
                {                    
                    items.map((item)=> <Card 
                    name={item.title} 
                    image={item.thumbnail}
                    condition={item.condition}
                    price={item.price}  
                    seller={item.seller.id}                                              
                    key={item.id}/>)                    
                }
                
                </div>
                </div>        
             </div>    
            </div> 
            
        )
    }
}
export default ItemContainer;