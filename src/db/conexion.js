const mysql =  require('mysql'),
	configuracion = require('./configuracion.json'),
	paramtroBD = {
			host : configuracion.CASA.host,
			user : configuracion.CASA.user,
			password : configuracion.CASA.pass,
			database : configuracion.CASA.bada,
			port : configuracion.CASA.puerto
	},
	conexion = mysql.createConnection(paramtroBD);

conexion.connect( (error)=>{
    return (error)? console.log('error en la conexion a la base de datos'): console.log('conectados satifactoriamente a la base de datos');
});

module.exports = conexion;