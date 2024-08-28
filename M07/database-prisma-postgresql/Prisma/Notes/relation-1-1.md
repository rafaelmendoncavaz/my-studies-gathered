# 📘 Aula - Prisma: Relacionamento 1:1

## Introdução

Nesta aula, exploraremos a criação de relacionamentos 1:1 utilizando o Prisma.

## Relacionamentos 1:1

Relacionamentos 1:1 descrevem uma associação em que uma instância de uma entidade está vinculada a uma única instância da outra entidade, e vice-versa. Um exemplo prático é apresentado abaixo:
```prisma
model Product {
  id          Int     @id @default(autoincrement())
  name        String
  description String?
  price       Float

  storage_info Storage?

  @@map("products")
}

model Storage {
  id         Int     @id @default(autoincrement())
  stock      Int
  product_id Int     @unique
  product    Product @relation(fields: [product_id], references: [id])

  @@map("storages")
}
```
Neste exemplo, estabelecemos um relacionamento entre a tabela "Product" e a tabela "StorageInfo", onde cada produto possui uma única informação de estoque. Isso é realizado por meio da referência do identificador na tabela de estoque, e o decorador @unique garante a unicidade:
```prisma
product_id Int     @unique
product    Product @relation(fields: [product_id], references: [id])
```
Essa abordagem é muito semelhante à lógica de relacionamento em SQL puro. Além disso, no Prisma, é necessário definir uma referência na tabela de origem, como demonstrado abaixo:
```prisma
storage_info Storage?
```
Para obter uma compreensão mais completa dos relacionamentos 1-1 com o Prisma, é aconselhável aprofundar-se na leitura da **[documentação disponível](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/one-to-one-relations)**.

## Conclusão

Nesta aula, aprendemos como criar relacionamentos 1-1 com o Prisma. Agora, você pode aplicar esse conhecimento em seus próprios projetos e atividades para continuar aprimorando suas habilidades. Continue estudando e praticando!

