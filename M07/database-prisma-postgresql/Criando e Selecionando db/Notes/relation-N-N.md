# 📘 Aula - Relacionamento N:N

## Introdução

Nesta aula, vamos explorar o relacionamento N para N em bancos de dados, que ocorre quando múltiplos registros em uma tabela podem estar relacionados a múltiplos registros em outra tabela. Este tipo de relacionamento é comum em situações complexas onde várias entidades estão interligadas. Vamos entender isso com exemplos práticos.

## Relacionamento N:N na prática

No exemplo a seguir, baseado na videoaula teórica, começaremos este exemplo prático com duas tabelas:
```sql
CREATE TABLE products (
  "id"    SERIAL       PRIMARY KEY,
  "name"  VARCHAR(150) NOT NULL,
  "price" INTEGER      NOT NULL
);

CREATE TABLE categories (
  "id"   SERIAL       PRIMARY KEY,
  "name" VARCHAR(150) NOT NULL 
);
```
Para criarmos relacionamentos de muitos para muitos (N:N), diferente dos demais relacionamentos, será necessário criar uma nova tabela, conceitualmente chamada de tabela de junção. É por meio desta tabela que os "id" serão relacionados.
```sql
CREATE TABLE products_categories (
  "id"          SERIAL  PRIMARY KEY,
  "productId"   INTEGER NOT NULL,
  "categoryId"  INTEGER NOT NULL,
  FOREIGN KEY ("productId") REFERENCES products("id") ON DELETE CASCADE,
  FOREIGN KEY ("categoryId") REFERENCES categories("id") ON DELETE CASCADE
);
```
Observe que, na tabela acima, foram criadas colunas tanto para o "id" de produto quanto para o "id" de categoria. Com isso, inserindo relações nesta tabela, passa a ser possível relacionar qualquer produto ou categoria, concretizando assim uma relação de muitos para muitos (N:N).

## Inserindo dados em relações N:N

Para a inserção de dados quando existe uma relação N:N, é importante compreender que as próprias relações serão cadastradas por meio de inserções. Confira o exemplo abaixo:
```sql
/* Cadastro de produtos */⁠
INSERT INTO products ("name", "price") VALUES
('Computador', 2500), ('Notebook', 3500), ('Mouse', 250);

⁠
/* Cadastro de categorias */
INSERT INTO categories ("name") VALUES
('Computadores'), ('Notebook'), ('Acessórios');
⁠
/* Cadastro de relações */
INSERT INTO products_categories ("productId", "categoryId") VALUES
(1, 1), (2, 1), (2, 2);
```
Note que, após o cadastro de categorias e produtos, foi cadastrada de forma individual as relações.

## Conclusão

Nesta aula, aprendemos sobre como criar relacionamentos muitos para muitos (N:N) no PostgreSQL. Nas próximas aulas, estaremos aprendendo a fazer consultas no banco de dados, mesclando tabelas com relacionamento. Bons estudos!