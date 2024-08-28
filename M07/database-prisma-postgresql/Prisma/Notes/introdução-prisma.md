# 📘 Aula - Introdução ao ORM Prisma

## Introdução

Nesta aula, exploraremos o conceito de ORM e, ao mesmo tempo, apresentaremos o Prisma, a ferramenta que iremos conhecer e utilizar ao longo deste ciclo de aulas.

## O que é ORM?

ORM, que significa "Object-Relational Mapping" (Mapeamento Objeto-Relacional), é uma técnica de programação que permite aos desenvolvedores interagir com bancos de dados relacionais usando objetos e classes em vez de escrever consultas SQL diretamente.

Isso torna o desenvolvimento de aplicativos que dependem de bancos de dados relacionais mais eficiente e menos propenso a erros, além de tornar o código mais legível e manutenível. 

## Prisma

Prisma é um moderno ORM (Object-Relational Mapping) e uma ferramenta de banco de dados para JavaScript e TypeScript. 

### Suas principais vantagens são:
    
1. **Geração de código:** Ele gera automaticamente código TypeScript com base no seu modelo de dados, tornando o desenvolvimento mais eficiente e reduzindo erros.

2. **Segurança:** Prisma ajuda a evitar injeções SQL e outros problemas de segurança, protegendo seu aplicativo contra vulnerabilidades comuns.

3. **Migrações de banco de dados:** Facilita a criação e aplicação de migrações de banco de dados para manter o esquema do banco de dados em sincronia com o código da aplicação.

4. **Integração com várias bases de dados:** Prisma suporta uma variedade de sistemas de gerenciamento de banco de dados, incluindo PostgreSQL, MySQL e SQLite.

5. **Facilidade de uso:** A API do Prisma é projetada para ser intuitiva e simplificar tarefas comuns relacionadas a bancos de dados.

Você pode conferir mais sobre o mesmo, acessando esta **[documentação](https://www.prisma.io/docs)**

## Instalação e Configuração

## Instalação

O primeiro passo para utilizar o Prisma em nossos projetos é instalar o Prisma como uma dependência de desenvolvimento em um projeto Node. Para fazer isso, siga o comando abaixo:
```sh
npm install -D prisma
pnpm install -D prisma
```

## Configurações iniciais

Após a instalação bem-sucedida, para gerar os arquivos de configuração do Prisma, execute o seguinte comando:
```sh
npx prisma init
pnpx prisma init
```
Isso criará uma pasta chamada "prisma" no diretório do projeto, contendo o arquivo "schema.prisma", além de criar um arquivo ".env".

## Configurando o banco de dados

No arquivo "schema.prisma", você encontrará o seguinte código inicial:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Não é necessário fazer alterações nessas configurações iniciais, mas é importante entender que a instrução `env("DATABASE_URL")` faz referência a uma variável de ambiente presente no arquivo ".env". 
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```
**Se o nome de usuário contiver espaços, lembre-se de substituí-los por '%20' na URL.**

A variável precisa ser configurada para apontar para um banco de dados existente (por isso, é recomendável criar o banco de dados primeiro).

## Conclusão

Nesta aula, introduzimos o essencial sobre ORM e conhecemos o Prisma. Na próxima aula, estaremos começando a implementar o Prisma em nossos projetos. Bons estudos!
