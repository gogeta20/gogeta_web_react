const modelo = require('../db/modelo');
const express = require('express');
const router = express.Router();

router.get('/mau',(req,res,next)=>{

	modelo.traerTodo((err, result, fields) =>{
    if (err) throw err;
		res.json(result);
	});
	
});

router.get('/mau/:id_post',(req,res,next)=>{
	let id_post = req.params.id_post;
	console.log('estamosn en mau/:id_post con el valor = ',id_post);

	modelo.traerUno( id_post,(err, result, fields) => {
    if (err) throw err;
		res.json(result);
  });

});

module.exports = router;

// let filas = controlador.traerTodo();
//console.log('bueno estamos mandando esto, a la consola ',filas);
// res.json(filas);
//router.get('/mau',controlador.traerTodo());