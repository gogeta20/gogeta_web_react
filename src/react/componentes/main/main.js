import React from 'react';
import Article from '../article/article';
import Single from '../single/single';
import '../../../css/main.css';
let img = 'img/'

class Main extends React.Component{

	constructor(props){
		super(props);
		this.state={
			post : [],
			cambioCss : false
		}
		this.verMas = this.verMas.bind(this);
		this.traerDatos = this.traerDatos.bind(this);
		this.recargaDatos = this.recargaDatos.bind(this);
	}

	componentDidMount() { /* despues de montar */
		this.traerDatos();
	}

	async traerDatos(urlParam = "http://localhost:3000/mau"){
		const url = urlParam;
		await fetch(url)
		.then(result => result.json())
		.then(resultJson => {
			this.setState({
				post : resultJson
			})
			console.log(this.state.post)
		});
		// let single = this.state.cambioCss ? this.setState({cambioCss : false}):this.setState({cambioCss:true});
	}
	
	verMas(e) {
		let url =`http://localhost:3000/mau/${e.target.id}`;
		this.traerDatos(url);
		this.setState({cambioCss: true})
	}
	recargaDatos(){
		this.traerDatos();
		this.setState({cambioCss: false})
	}
	render(){
		const datos = this.state.post;
		const ciclo = datos.map( (item,key)=>{
			if(this.state.cambioCss){
				return <Single datos={item} change2={this.recargaDatos} cambioCss={this.state.cambioCss} />
			}else{
				return  <Article datos={item} change={this.verMas} cambioCss={this.state.cambioCss}/>
			}
		})

		return <div className="contenedorPosts">{ciclo}</div>;
	}
}

export default Main;