# 📘 Aula - Exclusão de Dados

## Introdução

Nesta aula, vamos abordar a exclusão de dados em tabelas no PostgreSQL.

## Exclusão de dados

Para remover registros de tabelas, podemos utilizar o comando DELETE FROM. O formato padrão deste comando é ilustrado abaixo:
```sql
DELETE FROM nome_da_tabela WHERE filtro;
```
Exemplo:
```sql
DELETE FROM products WHERE id = 1;

TRUNCATE TABLE products;
```
Neste exemplo, o DELETE irá excluir a linha da tabela que corresponder ao filtro, no caso produto que o id = 1. O TRUNCATE serve para limpar TODOS os dados da Tabela.

## Conclusão

Nesta seção, aprendemos sobre exclusão no SQL utilizando os comandos DELETE FROM e TRUNCATE. Para consolidar os conhecimentos adquiridos até aqui, pratique por meio das atividades. Bons estudos!

