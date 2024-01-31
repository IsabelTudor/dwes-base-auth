create table usuarios (
	alias varchar(100) primary key,
	password varchar(255)
);

create table cosas (
	id serial primary key,
	nombre varchar(100),
	usuario varchar(100),
	foreign key (usuario) references usuarios(alias)
);