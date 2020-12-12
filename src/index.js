require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const rutas = require('./rutas/routes')
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(rutas);
app.use(express.static(path.join(__dirname, 'public')));;
app.set('puerto', process.env.PUERTO || 3000);

// Starting the server
app.listen(app.get('puerto'), () => {
  console.log(`Estamos en el puerto ${app.get('puerto')}`);
});