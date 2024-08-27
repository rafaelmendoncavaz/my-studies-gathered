# 📘 Aula - Atualizando Dados

## Introdução

Nesta aula, vamos aprender sobre atualização com PostgreSQL.

## Atualização de dados

Para realizar a atualização de dados em uma tabela, utilizaremos o comando UPDATE. O formato padrão deste comando é ilustrado abaixo:

```sql
UPDATE nome_da_tabela SET coluna = valores WHERE filtro;
```

```sql
UPDATE products SET "price" = 225000 WHERE id = 1;

UPDATE products SET ("price", "updatedAt") = ROW (250000, NOW()) WHERE id = 1;
```
Neste exemplo, estamos atualizando a coluna "price" na tabela de produtos, no recurso com "id" igual a 1 na primeira linha, e na segunda linha estamos atualizando múltiplas colunas na tabela.

## Conclusão

Nesta seção, aprendemos o essencial sobre consultas de atualização utilizando o comando UPDATE no PostgreSQL. Continuaremos a evoluir com SQL nas próximas aulas. Bons estudos!
