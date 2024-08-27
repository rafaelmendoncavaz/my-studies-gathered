# 📘 Aula - Join - Parte 1

## Introdução

Neste ciclo de aulas, começaremos a aprender sobre como fazer consultas em tabelas com relacionamento, utilizando a cláusula JOIN. Para isso, estaremos utilizando as tabelas "users" e "addresses".

## Join

O JOIN é uma cláusula fundamental que permite combinar registros de duas ou mais tabelas com base em uma condição específica. Ele é usado para recuperar informações relacionadas de diferentes tabelas de um banco de dados relacional.

Confira o modelo sintático abaixo:
```sql
SELECT * FROM tabela1 
⁠
JOIN tabela2 ON condição de combinação;
```
Com a cláusula JOIN, podemos unir duas ou mais tabelas. No entanto, para que essa junção seja bem-sucedida, a cada tabela combinada, será necessário declarar uma condição, que, geralmente, irá envolver as chaves estrangeiras declaradas nos relacionamentos.

Confira o exemplo contextualizado de uma combinação adequada para relacionamentos um para um ou um para muitos:
```sql
SELECT * FROM users
  JOIN addresses ON users."id" = addresses."userId";
  ```
Neste exemplo, estamos combinando a tabela "users" com a tabela "addresses" para listarmos todos os usuários com seus respectivos endereços.

Observe que a condição de combinação relaciona a chave primária da tabela "users" com a chave estrangeira presente na tabela "addresses".

Com isso, teremos o seguinte resultado, a combinação de todas as colunas da tabela 1 com a tabela 2:

|id   |name |email|id   |street|number|userId|
|---	|---	|---	|---	|---	|---	|---	|
|1   	|John Doe|johndoe@example.com|1   	|123 Main St|100|1   	|
|1   	|John Doe|johndoe@example.com|2   	|456 Elm St|200|1   	|

## Renomeando colunas com AS

Perceba que, no exemplo acima, alguns nomes de coluna se repetem:
- id da tabela "users"
- id da tabela "addresses"

### Bem como alguns valores também:

- id da tabela "users"
- userId da tabela "addresses"

Por isso, quando estamos combinando tabelas com JOIN, geralmente não utilizamos o * para trazer todas as colunas, e, em alguns casos, é necessário renomear algumas colunas, para isso podemos utilizar a cláusula AS. Confira o exemplo abaixo:
```sql
SELECT 
  users."id" AS "userId",
  users."name" AS "userName",
  users."email" AS "userEmail",
  addresses."id" AS "addressId",
  addresses."street",
  addresses."number"
FROM users
JOIN addresses ON users."id" = addresses."userId";
```
Em vez de trazermos todas as colunas, determinamos as colunas desejadas uma a uma, e com AS, renomeamos.

Dessa forma, conseguimos modelar com mais liberdade os resultados da consulta.

Confira o resultado:

|userId|userName|userEmail          |addressId|street     |number|
|---	 |---	    |---	              |---	    |---	      |---	 |
|1   	 |John Doe|johndoe@example.com|1   	    |123 Main St|100   |
|1   	 |John Doe|johndoe@example.com|2   	    |456 Elm St |200   |

## Conclusão

Nesta aula, aprendemos sobre a cláusula JOIN e como combinar tabelas com relacionamento 1:1 e 1:N. Estaremos explorando mais do JOIN nas próximas aulas. Bons estudos!

# 📘 Aula - Join - Parte 2

## Introdução

Nesta aula, vamos continuar aprendendo sobre o JOIN, agora trazendo um exemplo de combinação de tabelas em uma relação de muitos para muitos (N:N). Para isso, estaremos utilizando as tabelas "products", "categories" e "products_categories", criadas em aulas anteriores.

## Combinando tabelas com relacionamento muitos para muitos (N:N)

Como o relacionamento de muitos para muitos acontece por meio de três tabelas, dependendo da consulta desejada, será necessário a combinação de todas. Confira o exemplo abaixo:
```sql
CREATE TABLE products (
  "id"    SERIAL        PRIMARY KEY,
  "name"  VARCHAR(150)  NOT NULL,
  "price" INTEGER       NOT NULL
);

CREATE TABLE categories (
  "id"    SERIAL        PRIMARY KEY,
  "name"  VARCHAR(150)  NOT NULL
);

CREATE TABLE products_categories (
  "id"          SERIAL    PRIMARY KEY,
  "productId"   INTEGER   NOT NULL,
  "categoryId"  INTEGER   NOT NULL,

  FOREIGN KEY ("productId") REFERENCES products ("id") ON DELETE CASCADE,
  FOREIGN KEY ("categoryId") REFERENCES categories ("id") ON DELETE CASCADE
);

SELECT 
  products."id" AS "productId",
  products."name" AS "productName",
  products."price" AS "productPrice",
  categories."id" AS "categoryId",
  categories."name" AS "categoryName"
FROM products
JOIN products_categories ON products."id" = products_categories."productId"
JOIN categories ON categories."id" = products_categories."categoryId"
WHERE products."id" = 2;
```
Neste exemplo, realizamos uma consulta para trazer um produto com todas as suas categorias. Para isso foram mescladas as tabelas "products", "categories" e "products_categories". Sem a cláusula WHERE, teríamos listados todos os produtos com todas as categorias.
#
Constantemente, a tabela de junção estará presente nas seleções de dados em relações de muitos para muitos, a tabela principal (primeira tabela referenciada) poderá variar, dependendo do objetivo da consulta.

## Conclusão

Nesta aula, aprendemos sobre consultas de dados em relações muitos para muitos (N:N). Para consolidar ainda mais estes conhecimentos, aplique-os na entrega e em projetos pessoais. Bons estudos!