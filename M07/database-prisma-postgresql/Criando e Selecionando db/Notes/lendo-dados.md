# 📘 Aula - Lendo Dados

## Introdução

Nesta aula, vamos abordar a leitura de dados em tabelas do PostgreSQL.

## Leitura de dados

Para realizar a leitura de dados em tabelas, utilizaremos o comando SELECT. O formato padrão deste comando é ilustrado a seguir:
```sql
SELECT colunas FROM nome_da_tabela;
```
Vamos analisar um exemplo prático:
```sql
SELECT * FROM products;

SELECT "name", "description" FROM products;
```
No exemplo acima, estamos realizando uma consulta na tabela "products". No primeiro exemplo, estamos trazendo todas as colunas representadas pelo "*", e no segundo, somente as colunas "name" e "description."

## WHERE

Podemos fazer leituras filtradas em nosso banco de dados usando a cláusula WHERE, o que nos permite fornecer uma condição para a consulta. Confira os exemplos abaixo:
```sql
SELECT * FROM products WHERE id = 1;

SELECT * FROM products WHERE price < 300000;
```

## LIKE e ILIKE

Além de utilizar operadores relacionais para criar nossas regras de filtragem, podemos comparar valores de texto usando o LIKE. Ao combinar o LIKE com o '%', é possível filtrar texto de forma parcial. 
Mesmo sendo uma ferramenta flexível, o LIKE é sensível a variações entre maiúsculas e minúsculas. Se desejarmos ignorar essa diferenciação na filtragem, podemos usar o ILIKE. 
Veja o exemplo abaixo:
```sql
SELECT * FROM products WHERE "name" LIKE '%Notebook%';

SELECT * FROM products WHERE "name" ILIKE '%celular%';
```

## Conclusão

Nesta aula, você aprendeu os conceitos essenciais sobre a leitura de dados com SQL. Continuaremos a aprimorar nossos conhecimentos nas próximas aulas. Bons estudos!