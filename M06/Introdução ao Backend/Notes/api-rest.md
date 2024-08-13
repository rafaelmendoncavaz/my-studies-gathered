# 📘 Aula - API REST

## Introdução

API REST (Representational State Transfer) é um estilo arquitetural utilizado para criar serviços web que seguem um conjunto de princípios e convenções. Esses princípios tornam a comunicação entre clientes e servidores mais padronizada, eficiente e escalável. Uma API RESTful permite que diferentes sistemas se comuniquem de forma simples e flexível, tornando-a uma escolha popular para desenvolvimento de aplicações web modernas.

## Principais Características da API REST:

- **Protocolo HTTP:** A API REST utiliza o protocolo HTTP para realizar a comunicação entre o cliente e o servidor. Isso significa que as ações são realizadas utilizando os métodos HTTP, como GET, POST, PUT e DELETE, para definir as operações em recursos.

- **URI (Uniform Resource Identifier):** Cada recurso na API REST é identificado por uma URI única, que é um endereço único que representa o recurso. Por exemplo, um recurso de usuário pode ser identificado pela URI /users.

- **Formato de Representação de Dados:** A API REST retorna as respostas no formato JSON (JavaScript Object Notation) ou XML (eXtensible Markup Language). Esses formatos são leves, facilmente interpretáveis por diferentes linguagens de programação e são amplamente suportados.

- **Stateless (Sem Estado):** Cada requisição feita ao servidor contém todas as informações necessárias para ser processada. Isso significa que o servidor não mantém nenhum estado ou contexto sobre o cliente entre as requisições. Cada requisição é independente das outras, o que torna o sistema mais simples e escalável.

- **Operações sobre Recursos:** A API REST segue o modelo CRUD (Create, Read, Update, Delete) para manipulação de recursos. Cada recurso é acessado através de sua URI, e as operações são realizadas utilizando os métodos HTTP apropriados.

## Exemplo de Funcionamento de uma API REST:

Vamos considerar um exemplo simples de uma API REST para um sistema de gerenciamento de produtos.

- Para listar todos os produtos, o cliente faz uma requisição HTTP GET para a URI /products.

- Para obter detalhes de um produto específico, o cliente faz uma requisição HTTP GET para a URI /products/:id, onde :id é o identificador único do produto desejado.

- Para adicionar um novo produto, o cliente faz uma requisição HTTP POST para a URI /products, enviando os dados do novo produto no corpo da requisição.

- Para atualizar um produto existente, o cliente faz uma requisição HTTP PUT ou PATCH para a URI /products/:id, enviando os dados atualizados do produto no corpo da requisição.

- Para excluir um produto, o cliente faz uma requisição HTTP DELETE para a URI /products/:id, onde :id é o identificador único do produto a ser excluído.

## Conclusão

A API REST é uma abordagem arquitetural que oferece um conjunto de padrões para criar serviços web flexíveis, escaláveis e padronizados. Ela utiliza o protocolo HTTP para definir as operações em recursos, utiliza URIs para identificar os recursos e retorna as respostas em formatos de dados leves, como JSON ou XML. Essa abordagem permite o desenvolvimento de aplicações web modernas e integráveis de forma simples e eficiente.

