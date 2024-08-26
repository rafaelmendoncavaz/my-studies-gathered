# 📘 Aula - Entidades e Atributos

## Introdução

Nesta aula, vamos explorar dois conceitos fundamentais no projeto de bancos de dados: entidades e atributos. Esses conceitos são a base para a modelagem de dados em bancos de dados relacionais e desempenham um papel central na criação de estruturas de dados eficazes e organizadas.

## Entidades e Atributos: Definições

1. **Entidade:** Uma entidade representa um objeto do mundo real ou um conceito abstrato que pode ser diferenciado dos outros. No contexto de bancos de dados, uma entidade é geralmente algo que você deseja rastrear e armazenar informações sobre. Por exemplo, em um sistema de gerenciamento de biblioteca, entidades podem incluir "livros", "autores" e "clientes".

2. **Atributo:** Um atributo é uma característica ou propriedade que descreve uma entidade. Em outras palavras, os atributos são os detalhes específicos que você deseja armazenar sobre uma entidade. Para o exemplo da entidade "livro", os atributos podem incluir "título", "autor", "ano de publicação" e "número de páginas".

## Exemplo de Modelagem de Entidades e Atributos

Vamos usar o exemplo de uma entidade "Cliente" em um sistema de gerenciamento de uma loja online para ilustrar a relação entre entidades e atributos:

###     Entidade: Cliente
- **Atributos:**
    - Nome
    - Sobrenome
    - Endereço
    - Número de telefone
    - Endereço de e-mail
    - Data de registro
    - Número de cliente (identificador único)
#
Neste exemplo, a entidade "Cliente" é definida pelos atributos que a descrevem. Cada cliente tem um nome, sobrenome, endereço e assim por diante. O número de cliente é um atributo especial que atua como um identificador único para cada cliente, garantindo que não haja duplicatas na tabela de clientes.

## Chaves Primárias e Chaves Estrangeiras (PRIMARY_KEY e FOREIGN_KEY)

- **Chave Primária:** Uma chave primária é um atributo (ou conjunto de atributos) que identifica exclusivamente cada registro em uma tabela. Em nosso exemplo, o "número de cliente" pode ser uma chave primária na tabela de clientes.

- **Chave Estrangeira:** Uma chave estrangeira é um atributo em uma tabela que estabelece uma relação com a chave primária de outra tabela. Por exemplo, em uma tabela de pedidos, poderíamos ter uma chave estrangeira cliente_id que se relaciona com a chave primária "número de cliente" na tabela de clientes.

## Conclusão

Entidades e atributos são conceitos essenciais no projeto de bancos de dados. Eles nos permitem definir quais informações queremos armazenar e como essas informações estão estruturadas. À medida que avançamos na modelagem de dados, aprenderemos a criar relacionamentos entre entidades e a utilizar SQL para criar e consultar bancos de dados que refletem com precisão a estrutura do mundo real que estamos representando.