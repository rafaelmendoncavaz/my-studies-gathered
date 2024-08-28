# 📘 Aula | Prisma: Relacionamento N:N

## Introdução

Nesta aula, exploraremos a criação de relacionamentos N:N utilizando o Prisma.

## Relacionamentos N:N

Relacionamentos N:N, ou muitos para muitos, referem-se a uma associação entre entidades em que múltiplos elementos de uma entidade podem estar relacionados a múltiplos elementos da outra entidade. É uma abreviação para "many-to-many" em inglês.

Com o Prisma, temos duas formas de declarar relações N:N.

- **implícita** - Nesta abordagem, fazemos uma referência simplificada nas tabelas desejadas, e a tabela de junção é produzida automaticamente pelo Prisma

Confira o exemplo abaixo:
```prisma
model Product {
  id Int @id @default(autoincrement())
  name String 
  description String?
  price Float

  categories Category[]
}

model Category {
  id Int @id @default(autoincrement())
  name String
  products Product[]
}
```
Neste exemplo, estabelecemos um relacionamento entre a tabela "Product" e a tabela "Category", onde um produto pode estar contido em várias categorias, e uma categoria poderá conter vários produtos.

Desta forma implícita, a tabela de junção não existe na modelagem, mas será autogerada pelo Prisma no momento da migração.
#
- **explícita** - Nesta abordagem, modelamos uma tabela de junção entre as duas tabelas a serem relacionadas.

Confira o exemplo abaixo:
```prisma

model Post {
  id         Int                @id @default(autoincrement())
  title      String
  categories CategoriesOnPost[]

  @@map("posts")
}

model Category {
  id    Int                @id @default(autoincrement())
  name  String
  posts CategoriesOnPost[]

  @@map("categories")
}

model CategoriesOnPost {
  post        Post     @relation(fields: [post_id], references: [id])
  post_id     Int
  category    Category @relation(fields: [category_id], references: [id])
  category_id Int
  assigned_at DateTime @default(now())
  assigned_by String

  @@id([post_id, category_id])
  @@map("categories_on_post")
}
```
No modelo explícito, há a criação de uma terceira tabela que fará a relação das outras tabelas, e poderá ser usada para as buscas. Note que há a composição das variáveis referenciando as tabelas, assim como seus respectivos id's. Ela também pode conter outras variáveis, como no exemplo acima, os campos `assigned_at` e `assigned_by`.

Para uma compreensão mais completa dos relacionamentos N:N com o Prisma em ambas as formas, é aconselhável aprofundar-se na leitura da **[documentação](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/many-to-many-relations)** disponível.

## Conclusão

Nesta aula, aprendemos como criar relacionamentos N:N com o Prisma. Agora, você pode aplicar esse conhecimento em seus próprios projetos e atividades para continuar aprimorando suas habilidades. Continue estudando e praticando!