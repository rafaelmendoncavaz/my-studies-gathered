# 📘 Aula - Relacionamento 1:1

## Introdução

Nesta aula, exploraremos o relacionamento 1 para 1 em bancos de dados. Esse tipo de relacionamento ocorre quando cada registro em uma tabela está diretamente associado a apenas um registro em outra tabela. Vamos entender melhor esse conceito com exemplos práticos.

## Relacionamento 1:1 na prática
```sql
--- USUÁRIOS ---
CREATE TABLE users (
  "id"    SERIAL       PRIMARY KEY,
  "name"  VARCHAR(250) NOT NULL,
  "email" VARCHAR(100) NOT NULL
);

--- ENDEREÇOS ---
CREATE TABLE addresses (
  "id"     SERIAL       PRIMARY KEY,
  "street" VARCHAR(250) NOT NULL,
  "number" INTEGER,
  "userId" INTEGER      UNIQUE NOT NULL,

  FOREIGN KEY ("userId") REFERENCES users ("id") ON DELETE CASCADE
);
```
## Utilizando o "id" como ponte de relacionamento

O "id", por representar um recurso e uma tabela de forma única, será sempre a chave utilizada para criação de qualquer tipo de relacionamento. Para criar um relacionamento 1:1, usamos o exemplo de **FOREIGN KEY** acima.

A coluna "userId" é criada para receber o "id" do usuário relacionado à aquele endereço, e unido a cláusula UNIQUE, cria a restrição de um endereço por usuário.

## Chave estrangeiras (FOREIGN KEY)

A referência de FOREIGN KEY está presente para garantir que o valor passado na coluna seja de fato um "id" de usuário. É uma prática importante para evitar o cadastramento de relacionamentos inválidos.

## ON DELETE

Quando estabelecemos a relação entre chaves, é possível determinar o que irá acontecer na exclusão do recurso relacionado.

## CASCADE

O recurso será excluído junto com o recurso relacionado.

## Conclusão

Nesta aula, aprendemos sobre a relação 1:1 com o PostgreSQL. Continuaremos a evoluir e conhecer outros tipos de relação na próxima aula. Bons estudos!