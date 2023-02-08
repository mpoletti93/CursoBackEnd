insert into productos (id, nombre) values (3, "Trapo");

select * from productos;

create database mibase;

create table usuario (id int unsigned not null auto_increment, nombre varchar(50) not null, apellido varchar(50) not null,
edad int unsigned, email varchar(50) not null, primary key(id))


insert into usuario (nombre, apellido, edad, email) values ("Juan","Pere",23, "jp@gmail.com"), 
("Pedro","Mei",21, "pm@gmail.com"), ("Juana","Suarez",25, "js@gmail.com");

select * from usuario;

delete from usuario where id = 2;

update usuario set edad = 24  where id = 1;