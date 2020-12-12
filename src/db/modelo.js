const   conexion = require('./conexion'),
        modelo = () =>{};

modelo.traerTodo = (c) =>{
    console.log('estamos en modelo.traerTodo');
    conexion.query('select categorias.nombre_cat,post.contenido, post.id_post, post.titulo ,post.descripcion, post.foto, post.creado,usuarios.nombre,categorias.claseFa from usuarios RIGHT join post on post.autor = usuarios.id	join categorias on  categorias.id_cat = post.categoria',c);
};
modelo.traerUno = (id_post,c) =>{
	id_post = Number.parseInt(id_post);
	console.log('estamos en modelo.traerUno',id_post);

	let q = 'select categorias.nombre_cat,post.contenido, post.id_post, post.titulo ,post.descripcion, post.foto, post.creado,usuarios.nombre,categorias.claseFa from usuarios RIGHT join post on post.autor = usuarios.id	join categorias on  categorias.id_cat = post.categoria where post.id_post = ?';
	conexion.query(q,[id_post],c);
};
	
module.exports = modelo;

//conexion.query('select * from productos limit 20',callback);
//conexion.query('select * from prueba_app_csv limit 20',callback);