# 📘 Aula - Subconsultas (Subqueries)

## Introdução

Nesta aula, exploraremos o conceito de subconsultas (subqueries) em SQL. Subconsultas são consultas SQL aninhadas dentro de outras consultas e são uma técnica poderosa para recuperar dados específicos de maneira eficiente.

## O que é uma Subconsulta?

Uma subconsulta é uma consulta SQL incorporada em uma consulta principal. Ela é usada para buscar dados com base em condições específicas e pode ser usada em várias cláusulas, como WHERE, FROM, SELECT e outras.

### Exemplo Básico de Subconsulta:

Vamos considerar uma situação em que temos duas tabelas, "Produtos" e "Pedidos". Queremos encontrar todos os produtos pedidos pelo menos uma vez. Uma subconsulta pode ser usada para resolver isso:
```sql
SELECT Nome
FROM Produtos
WHERE ID IN (SELECT Produto_ID FROM Pedidos);
```
Neste exemplo, a subconsulta `(SELECT Produto_ID FROM Pedidos)` retorna uma lista de IDs de produtos pedidos. A consulta principal, então, seleciona os nomes dos produtos cujos IDs estão na lista retornada pela subconsulta.

## Tipos de Subconsultas

Existem diferentes tipos de subconsultas, dependendo de onde são usadas e do resultado esperado:

- **Subconsultas Escalares:** Essas subconsultas retornam um único valor, geralmente usado em uma cláusula SELECT.

- **Subconsultas Correlacionadas:** As subconsultas correlacionadas são usadas quando a subconsulta depende dos resultados da consulta principal. Elas podem ser usadas em uma cláusula WHERE, por exemplo.

  **Exemplo de Subconsulta Correlacionada:**

  Suponha que queremos encontrar todos os clientes que fizeram pelo menos dois pedidos:
  ```sql
  SELECT Nome
  FROM Clientes C
  WHERE (SELECT COUNT(*) FROM Pedidos P WHERE P.Cliente_ID = C.ID) >= 2;
  ```
  Neste exemplo, a subconsulta (SELECT COUNT(*) FROM Pedidos P WHERE P.Cliente_ID = C.ID) é correlacionada com a consulta principal. Ela conta o número de pedidos para cada cliente na consulta principal e retorna apenas os clientes que fizeram pelo menos dois pedidos.

- **Subconsultas em Cláusulas FROM:** Subconsultas podem ser usadas na cláusula FROM para criar temporariamente uma tabela derivada que pode ser usada na consulta principal.

## Conclusão

As subconsultas são uma ferramenta poderosa em SQL para realizar consultas complexas e recuperar dados específicos com base em condições personalizadas. Elas podem ser usadas em várias partes de uma consulta SQL e são essenciais para aprimorar suas habilidades em consultas de banco de dados. Dominar o uso de subconsultas amplia significativamente sua capacidade de recuperar informações precisas de bancos de dados.