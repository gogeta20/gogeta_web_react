import React from 'react';
import '../../../css/footer.css';
class Footer extends React.Component{
	constructor(props){
		super(props)
		this.state = []
		this.mensaje = this.mensaje.bind(this)
	}
	mensaje(){
		alert("hola esto funciona")
	}
	render(){
		return(
			<footer>
				<div>
					<h3>Temas</h3>
					<ul>
						<li>Html</li>
						<li>Css</li>
						<li>Javascript</li>
						<li>Mysql</li>
						<li>Php</li>
						<li>Node</li>
						<li>React</li>
						<li>Java</li>
					</ul>
				</div>
				<div>
					<h3>Redes Sociales</h3>
					<ul>
						<li onClick={this.mensaje}>Github</li>
						<li>linkedIn</li>
						<li>Instagram</li>
						<li>Facebook</li>
					</ul>
				</div>
			</footer>
		)
	}	
}

export default Footer;