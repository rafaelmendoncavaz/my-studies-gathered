# 📘 Aula - Prisma: Relacionamento 1:N

## Introdução

Nesta aula, exploraremos a criação de relacionamentos 1:N utilizando o Prisma.

## Relacionamentos 1:N

Relacionamentos 1:N (1 para muitos) descrevem uma associação em que uma instância de uma entidade está vinculada a uma ou mais instâncias da outra entidade. Um exemplo prático é apresentado abaixo:
```prisma
model Product {
  id          Int     @id @default(autoincrement())
  name        String
  description String?
  price       Float

  storage_info Storage?

  store_id Int
  store    Store @relation(fields: [store_id], references: [id])

  @@map("products")
}

model Store {
  id       Int       @id @default(autoincrement())
  name     String
  products Product[]

  @@map("stores")
}
```
Neste exemplo, estabelecemos um relacionamento entre a tabela "Store" e a tabela "Product", determinando que, um produto deverá pertencer a uma loja, e uma loja poderá possuir diversos produtos.

Este relacionamento é realizado por meio da referência no identificador na tabela de produtos e da referência de lista na tabela de lojas.
```prisma
// referências de identificadores
store_id Int
store    Store @relation(fields: [store_id], references: [id])

//referência de lista
products Product[]
```
A abordagem 1 para muitos é bem semelhante a dos relacionamentos de 1 para 1, porém, sem a restrição de unicidade. Seguindo a mesma linha de raciocínio do SQL puro.

Você pode se informar ainda mais sobre relacionamentos 1-N com Prisma, lendo esta **[documentação](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/one-to-many-relations)**.

## Conclusão

Nesta aula, aprendemos como criar relacionamentos 1-N com o Prisma. Agora, você pode aplicar esse conhecimento em seus próprios projetos e atividades para continuar aprimorando suas habilidades. Continue estudando e praticando!

