import React from 'react';
import '../../../css/main.css';

class Single extends React.Component{

	constructor(props){
		super(props);
		this.state={
			post : []
		}
	}
	
	render(){
		//[1] contenido [4] descripcion [3]titulo [2]id [8]class [0]categoria [6]fecha
		let valores = Object.values(this.props.datos);
		let $post = this.props.cambioCss ? "post1 "+ valores[0]: "post "+valores[0];
		// let $button = this.props.cambioCss ? "hidden": "button";
		let $button = "button";
		let $contenido = this.props.cambioCss ? valores[1]: valores[4];

		let ciclo = <article className={$post}>
									<div className="head">
										<h2>{valores[3]}</h2>
									</div>
									<div className="logo">
										<i class={valores[8]}></i>
									</div>
									<div className="author">
										<span>categoria: {valores[0]}</span>
										<span>{valores[6]}</span>
										<span>Autor : {valores[7]}</span>
									</div>
									<div className="cont">
										<p>{$contenido}</p>
									</div>
									<button className={$button} onClick={this.props.change2}>volver</button>
								</article>

		return (
				<div className="contenedorSingle">
					<button className="botonVolver" onClick={this.props.change2}>volver</button>
					{ciclo}
				</div>
			);
	}
}

export default Single;