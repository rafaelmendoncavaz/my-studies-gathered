# 📘 Aula - Criando, Selecionando e Excluindo Banco de Dados

## Introdução

Nesta aula, aprenderemos a criar, selecionar e excluir bancos de dados PostgreSQL utilizando o psql.

## Criando o banco de dados

Para criar um banco de dados, após o login de usuário, podemos criar um banco rodando o comando abaixo:

```sh
CREATE DATABASE nome_do_banco;
```

## Listando banco de dados

Após criar o banco, você pode visualizar a lista de bancos de dados no psql executando o comando:
```sh
\l
```

## Selecionando um banco de dados

Para trabalhar diretamente com um banco de dados pelo terminal, é fundamental selecionar o banco desejado. Use o seguinte comando:
```sh
\c nome_do_banco
```

## Excluir banco de dados

É possível excluir bancos de dados utilizando o seguinte comando SQL:
```sh
DROP DATABASE m4_books_api;
```

## Conclusão

Nesta aula, abordamos os conceitos essenciais da criação e exclusão de bancos de dados usando SQL. Na próxima aula, começaremos a explorar o trabalho com tabelas. Desejamos a todos bons estudos!

# 📘 Aula - Criando e Excluindo Tabelas

## Introdução

Nesta aula, vamos abordar a criação e exclusão de tabelas em bancos de dados.

## Criando tabelas

Para criar tabelas, utilizaremos o comando CREATE TABLE. Abaixo, apresentamos um exemplo de código SQL:
```sql
CREATE TABLE IF NOT EXISTS products (
  "id"          SERIAL        PRIMARY KEY,
  "name"        VARCHAR(255)  NOT NULL,
  "description" TEXT,
  "price"       INTEGER       NOT NULL,
  "createdAt"   TIMESTAMP     NOT NULL,
  "updatedAt"   TIMESTAMP     NOT NULL  
);

DROP TABLE IF EXISTS messages;
```
Durante o comando de criação, você deve especificar o nome da tabela e, ao abrir os parênteses, descrever cada uma das colunas da tabela. 

No exemplo acima, estamos criando uma tabela chamada "products" com as colunas "id," "name," "description," "price," "createdAt," e "updatedAt."

## SERIAL PRIMARY KEY

Observe que a coluna "id" foi definida como SERIAL, o que fará com que ela seja autoincrementada pelo banco de dados. Além disso, a marca PRIMARY KEY define a coluna como chave primária dos registros na tabela, o que será fundamental ao trabalhar com relacionamentos entre tabelas.

## NOT NULL

Uma novidade introduzida neste exemplo é a instrução **NOT NULL**, que torna a coluna obrigatória. Sem ela, por padrão, o SQL cria colunas opcionais.

## Aspas duplas (")

No exemplo acima, o nome de cada coluna foi envolto em aspas duplas. Isso é uma boa prática, pois, se as aspas duplas estiverem ausentes, o PostgreSQL não fará distinção entre letras maiúsculas e minúsculas.
```sql
"createdAt" TIMESTAMP NOT NULL
```
## Excluindo tabelas

Caso seja necessário excluir uma tabela, seja por erro na criação ou para efetuar alterações na estrutura, você pode usar o comando DROP TABLE. Confira o exemplo abaixo:
```sql
DROP TABLE products;
```

## Conclusão

Nesta aula, abordamos conceitos essenciais sobre a criação de tabelas. À medida que avançarmos com o SQL, aprenderemos a cadastrar, ler, atualizar e excluir recursos em aulas subsequentes.  Bons estudos!