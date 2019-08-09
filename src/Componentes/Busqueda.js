import React from 'react'

class Busqueda extends React.Component{

    constructor(props){
        super(props)

        this.state= {busqueda:''}
    }
    handleChange=(e)=>{
        e.preventDefault();    
        this.setState({busqueda:e.target.value})
    }

    render(){
        const {handleSearch} = this.props
        const {busqueda}= this.state
        
        return(            
        <div className="card" onSubmit={this.handleChange} className="card-body">          
          <div className="form-group">
            <input className="search-input"
              type="text"               
              value={busqueda}
              onChange={this.handleChange}              
              />
          </div>
          <button type="submit" className="btn btn-primary" onClick={()=>handleSearch(busqueda)}>
            Buscar
          </button>
      </div>
         
      
        
        )
    }
}

export default Busqueda;