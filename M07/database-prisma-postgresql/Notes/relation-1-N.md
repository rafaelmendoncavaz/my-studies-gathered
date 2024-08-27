# 📘 Aula - Relacionamento 1:N

## Introdução

Nesta aula, vamos explorar o relacionamento 1 para N em bancos de dados, que ocorre quando um registro em uma tabela está associado a vários registros em outra tabela. Vamos entender esse conceito com exemplos práticos.

## Relacionamento 1:N na prática

Para ilustrar o relacionamento 1:N, partiremos do exemplo apresentado na videoaula teórica. Começamos com a criação de duas tabelas:
```sql
CREATE TABLE users (
  "id"    SERIAL        PRIMARY KEY,
  "name"  VARCHAR(250)  NOT NULL,
  "email" VARCHAR(100)  NOT NULL
);

CREATE TABLE addresses (
  "id"      SERIAL        PRIMARY KEY,
  "street"  VARCHAR(250)  NOT NULL,
  "number"  INTEGER,
  "userId"  INTEGER       NOT NULL,

  FOREIGN KEY ("userId") REFERENCES users ("id") ON DELETE CASCADE
);
```
Para criar uma relação de 1 para muitos, a sintaxe é muito semelhante à relação de 1 para 1. A diferença está na ausência da cláusula UNIQUE. O exemplo acima demonstra como isso é feito. Assim como na relação 1 para 1, é criada uma coluna na tabela "addresses" para armazenar o "id" do usuário. No entanto, sem a restrição UNIQUE, permite que mais de um endereço esteja relacionado ao mesmo usuário.

## Conclusão

Nesta aula, aprendemos sobre relações 1 para muitos (1:N) em bancos de dados PostgreSQL. Continuaremos explorando outros tipos de relações no SQL na próxima aula. Bons estudos!