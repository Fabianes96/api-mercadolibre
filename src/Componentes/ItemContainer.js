import React from 'react'
import Card from './Card.js'
import {getItem} from '../Servicios/items'
import Buscar from './Busqueda'


class ItemContainer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            items: [],
            isFetch: true,
            initial:false,
        }
    }
    
    async componentDidMount(){

        const res = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=ipod`)
        const resJson = await res.json() 
        this.setState({items:resJson.results, isFetch:false})         
        
    }

    handleSearch=async(e)=>{
        const resJson = await getItem(e)
        this.setState({items: resJson.results, initial:true})
               
    }

    render(){
        const {isFetch, items,initial} = this.state
            
        
        return (
            <div>
            <Buscar handleSearch={this.handleSearch}/> 
            {
                isFetch && 'Cargando...'
                
            }            
            {
                (!isFetch && !items.length && initial) && 'No se encontraron resultados'
            }
            <section className="item-container">
                {
                    items.map((item)=> <Card 
                    name={item.title} 
                    image={item.thumbnail}
                    condition={item.condition}
                    price={item.price} 
                    key={item.id}/>)
                }
            </section>
            </div> 
            
        )
    }
}
export default ItemContainer;