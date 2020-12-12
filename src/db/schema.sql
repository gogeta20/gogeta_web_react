create database gogeta character set utf8 collate utf8_general_ci;

create table usuarios (
	id tinyint not null auto_increment,
	nombre varchar(40),
	email varchar(40),
	pass varchar(40),
	PRIMARY KEY(id)
);

create table categorias(
	id_cat tinyint auto_increment not null,
	nombre_cat varchar(80),
	claseFa varchar(30),
	PRIMARY KEY(id_cat)
);

create table post(
	id_post int not null auto_increment primary key,
	titulo text,
	contenido text,
	descripcion text,
	foto varchar(100),
	creado datetime,
	categoria tinyint not null,
	autor tinyint not null,
	FOREIGN KEY (autor) REFERENCES usuarios(id),
	FOREIGN KEY (categoria) REFERENCES categoria(id_cat)
);

-- alter table post add FOREIGN KEY (categoria) REFERENCES categoria(id_cat)
-- INSERT INTO `categorias`(`nombre_cat`) VALUES ('categoria uno')
-- INSERT INTO `usuarios`(`nombre`, `email`, `pass`) VALUES ('gogeta','linuxlite20@gmail.com','cmauricio2')
	-- INSERT INTO `post`( `titulo`, `contenido`, `descripcion`, `foto`, `categoria`, `autor`,`creado`) VALUES ('titulo uno','este es el contenido','esta es la descripcion','foto.jpg',1,1,now())
	-- INSERT INTO `post`( `titulo`, `contenido`, `descripcion`, `foto`, `categoria`, `autor`) VALUES ('titulo uno','este es el contenido','esta es la descripcion','foto.jpg',)

-- select categorias.nombre_cat,categorias.claseFa, post.id_post, post.titulo ,post.descripcion, post.foto, post.creado,usuarios.nombre from usuarios RIGHT join post on post.autor = usuarios.id 
-- join categorias on  categorias.id_cat = post.categoria