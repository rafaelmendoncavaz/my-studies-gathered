# 📘 Aula - Tipos de Joins

## Introdução

Nesta aula, exploraremos as operações de JOIN em bancos de dados, incluindo INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL JOIN. Essas operações são fundamentais para combinar dados de múltiplas tabelas e realizar consultas complexas.

## INNER JOIN

O INNER JOIN é usado para combinar registros de duas tabelas com base em uma condição de igualdade entre colunas. Ele retorna apenas os registros com correspondências em ambas as tabelas.

### Exemplo:

Suponha que temos duas tabelas, "Pedidos" e "Clientes", e queremos obter uma lista de pedidos juntamente com os nomes dos clientes que fizeram esses pedidos:
```sql
SELECT Pedidos.ID, Pedidos.Data, Clientes.Nome
FROM Pedidos
INNER JOIN Clientes ON Pedidos.Cliente_ID = Clientes.ID;
```

## LEFT JOIN

O LEFT JOIN retorna todos os registros da tabela da esquerda (tabela principal) e os registros correspondentes da tabela da direita (tabela relacionada). Se não houver correspondência na tabela da direita, ele retorna valores nulos.

### Exemplo:

Suponha que queremos uma lista de todos os clientes e, se eles tiverem feito algum pedido, também exibiremos informações sobre esses pedidos:
```sql
SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID, Pedidos.Data
FROM Clientes
LEFT JOIN Pedidos ON Clientes.ID = Pedidos.Cliente_ID;
```

## RIGHT JOIN

O RIGHT JOIN é semelhante ao LEFT JOIN, mas retorna todos os registros da tabela da direita (tabela relacionada) e os registros correspondentes da tabela da esquerda (tabela principal).

### Exemplo:

Suponha que queremos uma lista de todos os pedidos e, se eles estiverem associados a um cliente, também exibiremos informações sobre esses clientes:
```sql
SELECT Pedidos.ID AS Pedido_ID, Pedidos.Data, Clientes.ID, Clientes.Nome
FROM Pedidos
RIGHT JOIN Clientes ON Pedidos.Cliente_ID = Clientes.ID;
```

## FULL JOIN

O FULL JOIN retorna todos os registros de ambas as tabelas, combinando registros quando houver correspondências e preenchendo com valores nulos onde não houver correspondência.

### Exemplo:

Suponha que queremos uma lista de todos os clientes e todos os pedidos, combinando as informações quando houver correspondência:
```sql
SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID, Pedidos.Data
FROM Clientes
FULL JOIN Pedidos ON Clientes.ID = Pedidos.Cliente_ID;
```

## Conclusão

As operações de JOIN, como INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL JOIN, são poderosas ferramentas para combinar dados de várias tabelas em consultas SQL. A escolha do tipo de JOIN depende dos requisitos específicos da consulta e das relações entre as tabelas envolvidas. Dominar essas operações é essencial para realizar consultas complexas em bancos de dados relacionais.