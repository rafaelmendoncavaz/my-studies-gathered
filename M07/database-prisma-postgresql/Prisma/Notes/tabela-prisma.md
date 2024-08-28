# 📘 Aula - Prisma: Primeira Tabela

## Introdução

Nesta aula, estaremos criando nossa primeira tabela com Prisma.

## Primeira tabela

Com o Prisma instalado e o banco de dados devidamente configurado, podemos criar nossos modelos de tabelas no Prisma, escrevendo "models" no arquivo **schema.prisma**
```prisma
model Product {
  id          Int     @id @default(autoincrement())
  name        String
  description String?
  price       Float

  @@map("products")
}
```
Neste exemplo, estamos modelando uma tabela de produtos. Observa-se uma diferença em relação ao SQL puro, pois os tipos de dados são mais concisos e se assemelham ao que já conhecemos em JavaScript/TypeScript.

Além disso, no exemplo, são usados alguns "decorators":
- **@id** - determina que aquela coluna é a chave primária da tabela
- **@default** - estabelece um valor padrão para a coluna, neste exemplo, se combina com o autoincrement para produzir um id serial.
- **@@map** - permite que você renomeie a tabela para o arquivo SQL.

Para aprender mais sobre cada tipo de dado e suas peculiaridades, consulte **[esta documentação](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)**

## Primeira migração

Com o modelo devidamente elaborado, a criação efetiva da tabela no banco de dados demanda a execução de uma migração. Mas, afinal, o que é uma migração? Trata-se de um procedimento que converte os modelos em Prisma para a linguagem do banco de dados especificada no "datasource".

Para realizar esse processo, basta executar o seguinte comando no terminal:
```sh
pnpx prisma migrate dev
```
OU
```sh
pnpx prisma migrate dev --name nome_da_migracao
```
Este exemplo serve para você apontar diretamente o nome da migração a ser criada.

Se a migração for concluída com sucesso, uma nova pasta denominada "migrations" será gerada dentro da pasta "prisma", contendo os arquivos referentes à migração realizada.

## Conclusão

Nesta aula, iniciamos nosso aprendizado sobre modelos de tabelas e migrações. Nos próximos encontros, vamos aprofundar esses conceitos, além de explorar os relacionamentos no Prisma. Bons estudos!