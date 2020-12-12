import React, { Component } from 'react';
import { render } from 'react-dom';
import Controlador from './componentes/controlador/controlador';
// ---- recursos imagenes
// --- css
import '../css/global.css';

class App extends Component {

  render() {
    return (
      <div>
				<Controlador />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
/**
 	<Navegacion />
	<Home />
	<Main />				
	<Footer />	
 */