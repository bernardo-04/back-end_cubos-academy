-- 01
select count(medicamento) from farmacia;

-- 02
select MIN(idade) from usuarios;

-- 03
select MAX(idade) from usuarios;

-- 04
select avg(idade) from usuarios where idade >= 18;

-- 05
select sum(estoque) from farmacia where categoria = 'blue' or categoria = 'black' group by categoria;

-- 06
select categoria, sum(estoque) from farmacia where categoria IS NOT NULL group by categoria;

-- 07
select sum(estoque) from farmacia where categoria IS NULL group by categoria;

-- 08
select count(medicamento) from farmacia where categoria IS NULL group by categoria;

-- 09
select concat(medicamento, ' (', categoria, ')') from farmacia where categoria IS NOT NULL;

-- 10
select concat(id, ' - ', medicamento, ' (', coalesce(categoria, 'sem categoria'), ')') from farmacia order by id asc;

-- 11
select nome, idade, cast(cadastro as date) from usuarios where cadastro ilike '2020%';

-- 12
select nome, idade, email, age(cast(cadastro as timestamp)) as tempo from usuarios where idade < 18;

-- 13
select nome, idade, email, age(cast(cadastro as timestamp)) as tempo from usuarios where idade >= 60;

-- 14
select categoria, count(medicamento) from farmacia where categoria IS NOT NULL group by categoria;

-- 15
select idade, count(idade) from usuarios where idade >= 18 group by idade;

-- 16
select categoria, sum(estoque) from farmacia group by categoria limit 3;