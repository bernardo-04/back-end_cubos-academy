create table autores (
    id serial primary key,
    nome text not null,
    idade integer
);

create table livros (
    id serial primary key,
    nome text not null,
    genero text,
    editora text,
    publicacao date,
    autor_id integer references autores(id)
);