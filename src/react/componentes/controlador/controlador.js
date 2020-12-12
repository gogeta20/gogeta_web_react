import React from 'react';

import Footer from '../footer/footer'
import Home from '../home/home'
import Main from '../main/main'
import Navegacion from '../navegacion/navegacion'

class Controlador extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			presentar:"",
		};
		this.home = this.home.bind(this)
		this.blog = this.blog.bind(this)
		this.noticias = this.noticias.bind(this)
		this.notas = this.notas.bind(this)
	}
	// this.mifuncion = this.mifuncion.bind(this);
	componentDidMount(){
		this.setState({
			presentar : <React.Fragment> 
										<Home />
										<h3>Articulos recientes</h3>
										<Main />
										<Footer />
									</React.Fragment>
		})
	}

	home(){
		this.setState({
			presentar : <React.Fragment> 
										<Main />
									</React.Fragment>
		})
	}
	blog(){
		this.setState({
			presentar : <React.Fragment> 
										<Home />
									</React.Fragment>
		})
	}
	noticias(){
		this.setState({
			presentar : <React.Fragment> 
										<Footer />
									</React.Fragment>
		})
	}
	notas(){
		this.setState({
			presentar : <React.Fragment> 
										<Main />
										<Footer />
									</React.Fragment>
		})
	}

	render(){

		return(
			<Navegacion presen={this.state.presentar} ihome={this.home} iblog={this.blog} inoticias={this.noticias} inotas={this.notas}/>
		)
	}

}// fin de la clase Navegacion

export default Controlador;
