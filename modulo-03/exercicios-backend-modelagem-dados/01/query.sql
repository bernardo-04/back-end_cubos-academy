create database ecommerce;

create table clientes (
    cpf char(11) unique,
    nome varchar(150) not null
);

create table vendedores (
    cpf char(11) unique,
    nome varchar(150) not null
);

create table pedidos (
    id serial primary key,
    valor integer not null,
    cliente_cpf char(11) references clientes(cpf),
    vendedor_cpf char(11) references vendedores(cpf)
);

create table categorias (
    id serial primary key,
    nome varchar(50) not null
);

create table produtos (
    id serial primary key,
    nome varchar(100) not null,
    descricao text,
    preco integer not null,
    quantidade_em_estoque integer,
    categoria_id integer references categorias(id)
);

create table itens_do_pedido (
    id serial primary key,
    pedido_id integer references pedidos(id),
    quantidade integer,
    produto_id integer references produtos(id)
);

-- 01
insert into categorias
(nome)
values
('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');

-- 02
insert into produtos
(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values
('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras', 90, 34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Água mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN', 420, 90, 1);

-- 03
insert into clientes
(cpf, nome)
values
('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

-- 04
insert into vendedores
(cpf, nome)
values
('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

-- 05
-- a)
insert into pedidos
(valor, cliente_cpf, vendedor_cpf)
values
(300 + 700 + 6*1200 + 1000 + 5*90, '80371350042', '28007155023');

insert into itens_do_pedido
(pedido_id, quantidade, produto_id)
values
(1, 1, 1),
(1, 1, 10),
(1, 6, 11),
(1, 1, 15),
(1, 5, 2);

-- b)
insert into pedidos
(valor, cliente_cpf, vendedor_cpf)
values
(10*198 + 3*420 + 5*300 + 10*125 + 2*235, '63193310034', '23262546003');

insert into itens_do_pedido
(pedido_id, quantidade, produto_id)
values
(2, 10, 17),
(2, 3, 18),
(2, 5, 1),
(2, 10, 5),
(2, 2, 6);

-- c)
insert into pedidos
(valor, cliente_cpf, vendedor_cpf)
values
(2350 + 6*130 + 5*198, '75670505018', '23262546003');

insert into itens_do_pedido
(pedido_id, quantidade, produto_id)
values
(3, 1, 13),
(3, 6, 12),
(3, 5, 17);

-- d)
insert into pedidos
(valor, cliente_cpf, vendedor_cpf)
values
(2290 + 6*420 + 690 + 3*300 + 20*125 + 2*235, '75670505018', '82539841031');

insert into itens_do_pedido
(pedido_id, quantidade, produto_id)
values
(4, 1, 16),
(4, 6, 18),
(4, 3, 1),
(4, 20, 5),
(4, 2, 6);

-- e)
insert into pedidos
(valor, cliente_cpf, vendedor_cpf)
values
(8*420 + 875 + 3*198 + 8*125 + 2*1200, '67642869061', '82539841031');

insert into itens_do_pedido
(pedido_id, quantidade, produto_id)
values
(5, 8, 18),
(5, 1, 8),
(5, 8, 5),
(5, 2, 11);