import React from 'react'

class Busqueda extends React.Component{

    constructor(props){
        super(props)

        this.state= {busqueda:''}
    }
    handleChange=(e)=>{
        this.setState({busqueda:e.target.value})
    }

    render(){
        const {handleSearch} = this.props
        const {busqueda}= this.state
        return(
            <div className="card">
                <form className="card-body">
                <div className="form-group">
                <input
                    value={busqueda}
                    onChange ={this.handleChange}
                    className="form-control"
                    type="text"
                />
                </div>
                </form>
                <div>
                    <button className="btn btn-primary" type="submit" onClick={()=>handleSearch(busqueda)} >
                    Buscar
                </button>              
                </div>                 
            </div>
        )
    }
}

export default Busqueda;