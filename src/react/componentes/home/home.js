import React from 'react';
import '../../../css/home.css';
class Home extends React.Component{
	
	render(){
		return(
			<div className="banerHome">
			<div className="presentacion">
				<div>
					<p>Hola muy buenas, mientras me preparo el café numero ? del dia te comento</p>
					<p>en este espacio me dedico a escribir sobre programación, subire un post cada semana</p>
					<p>mis temas favoritos son javascript y sus librerías, en fin espero que te diviertas leyendo y que te sea útil.</p>
				</div>
				<div className="loader">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<div className="cup"><span></span></div>
				</div>
			</div>
			<div className="techPresentacion">
				<div className="tecnologias">
					<h2>Html5</h2>
					<h2>Css3</h2>
					<h2>ReactJS</h2>
					<h2>NodeJS</h2>
					<h2>javascript</h2>
					<h2>Mysql</h2>
					<h2>Php</h2>
				</div>
				<div className="tecnologias">
					<i class="fab fa-html5 moverHtml"></i>
					<i class="fab fa-css3 moverCss"></i>
					<i class="fab fa-react moverReact"></i>
					<i class="fab fa-node-js moverNode"></i>
					<i class="fab fa-js moverJs"></i>
					<i class="fas fa-database moverMysql"></i>
					<i class="fab fa-php moverPhp"></i>
				</div>
				<div class="frasePerpetuo">
					<p>y en perpetuo aprendizaje ...</p>
				</div>
			</div>
		
			</div>
		)
	}
}

export default Home;