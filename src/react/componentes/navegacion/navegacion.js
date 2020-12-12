import React from 'react';
import '../../../css/navegacion.css'
class Navegacion extends React.Component{
	constructor(props){
		super(props);
		this.state = [];
	}
	// this.mifuncion = this.mifuncion.bind(this);

	render(){

		return(
			<React.Fragment>
			<header>
				<div className="contentHeader">
					<div className="logo">
						<button onClick={this.props.ihome}>Gogeta</button>
					</div>

					<nav className="navegacion">
						<div className="barra">
							<button className="botonBuscar" id="" ><i className="fas fa-search"></i></button>
							<div className="divBuscar">
								<input className="inputPredeterminado" type="text" id="buscar" placeholder="buscar...."/>
							</div>
						</div>
						<div className="enlacesNav1">
							<ul className="enlacesNav">
								<button onClick={this.props.iblog}>blog</button>
								<button onClick={this.props.inoticias}>noticias</button>
								<button onClick={this.props.inotas}>notas</button>
							</ul>
						</div>
						
					</nav>
				</div>
			</header>
			{this.props.presen}
			</React.Fragment>
		)
	}

}// fin de la clase Navegacion

export default Navegacion;