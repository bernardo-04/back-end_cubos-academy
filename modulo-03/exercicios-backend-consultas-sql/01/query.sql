-- EXERCÍCIOS BACK-END CONSULTAS SQL

-- Exercício 01
select compositor, id from musicas;

--Exercício 02
select composicao, tempo from musicas where tempo > 60*4;

--Exercício 03
select compositor, composicao from musicas where id between 47 AND 123;

--Exercício 04
select * from musicas where compositor IS NOT NULL AND tempo < 60*5 AND compositor != 'Bach';

--Exercício 05
select composicao, tempo from musicas where compositor = 'Mozart' OR compositor = 'Bach';

--Exercício 06
select * from musicas order by id desc;

--Exercício 07
select * from musicas order by tempo desc;

--Exercício 08
select * from musicas order by tempo asc limit 5;

--Exercício 09
select * from musicas order by tempo desc limit 10;

--Exercício 10
select * from musicas order by tempo asc limit 10 offset 5;

--Exercício 11
select * from musicas limit 10 offset 10*3;

--Exercício 12
select * from musicas limit 12 offset 12*5;

-- Exercício 13
select distinct compositor from musicas where compositor IS NOT NULL;

--Exercício 14
select distinct compositor, composicao from musicas;

--Exercício 15
select * from musicas where compositor like 'Bra%';

--Exercício 16
select * from musicas where ritmo like '%troppo';

--Exercício 17
select * from musicas where composicao ilike '%quartet%';

--Exercício 18
select * from musicas where composicao NOT ilike '%quintet%';