# 📘 Aula - Group By e Having

## Introdução

Nesta aula, exploraremos as cláusulas GROUP BY e HAVING em SQL. Essas cláusulas são fundamentais para a agregação de dados e a realização de consultas mais complexas em um banco de dados.

## GROUP BY

A cláusula GROUP BY é usada para agrupar registros com base em valores semelhantes em uma ou mais colunas. Ela permite criar grupos de registros que compartilham características comuns em uma coluna específica e, em seguida, realizar operações de agregação, como COUNT, SUM, AVG, etc., nos grupos criados.

### Exemplo de GROUP BY:

Suponha que temos uma tabela "Vendas" com informações sobre vendas de produtos. Queremos calcular o total de vendas por categoria de produto:
```sql
SELECT Categoria, SUM(Valor) AS TotalVendas
FROM Vendas
GROUP BY Categoria;
```
Neste exemplo, usamos GROUP BY para agrupar as vendas por categoria e, em seguida, calculamos a soma dos valores de cada categoria.

## HAVING

A cláusula HAVING é usada para filtrar grupos resultantes de uma cláusula GROUP BY. Ela permite aplicar condições aos grupos, de forma semelhante à cláusula WHERE, mas funciona após o GROUP BY e se aplica aos grupos em vez de registros individuais.

### Exemplo de HAVING:

Suponha que queremos encontrar as categorias de produtos com vendas totais superiores a $1.000:
```sql
SELECT Categoria, SUM(Valor) AS TotalVendas
FROM Vendas
GROUP BY Categoria
HAVING SUM(Valor) > 1000;
```
Neste exemplo, usamos HAVING para filtrar apenas as categorias com vendas totais superiores a $1.000 após o GROUP BY.

## Conclusão

As cláusulas GROUP BY e HAVING são ferramentas poderosas em SQL para agregar e filtrar dados de maneira eficaz. Elas são úteis quando você precisa resumir informações e aplicar condições a grupos de dados em vez de registros individuais. Dominar o uso dessas cláusulas é essencial para realizar análises complexas e obter insights valiosos de seu banco de dados.