# 📘 Aula - Rotas, Endpoints e Parâmetros de Requisição

## Introdução

Nesta aula, vamos abordar conceitos teóricos importantes sobre rotas, endpoints e parâmetros de requisição no contexto do Backend. Esses elementos são fundamentais para a construção de aplicações web e APIs RESTful eficientes e organizadas. Vamos entender a definição e a importância desses conceitos na comunicação entre o cliente e o servidor.

## Rotas e Endpoints

- **Rotas:** As rotas em uma aplicação web são caminhos que definem as URLs para os recursos e funcionalidades. Cada rota é associada a um determinado comportamento no servidor. Por exemplo, em uma aplicação de gerenciamento de usuários, podemos ter rotas para listar usuários, criar um novo usuário ou excluir um usuário existente.

- **Endpoints:** Os endpoints são os pontos de acesso aos recursos no servidor. Cada rota é um endpoint, que representa um local específico onde as requisições podem ser feitas. Por exemplo, a rota /users pode ser considerada o endpoint para manipulação de recursos de usuários.

## Parâmetros de Requisição

Os parâmetros de requisição são informações adicionais que podem ser passadas pelo cliente para o servidor em uma solicitação HTTP. Eles permitem que o cliente especifique detalhes específicos na requisição e são frequentemente usados em operações de busca, filtragem ou identificação de recursos.

- **Parâmetros de Rota:** São partes da URL usadas para identificar recursos específicos. Eles são definidos na rota e são acessados no servidor para obter informações sobre o recurso solicitado. Por exemplo, em uma rota como /users/:id, o parâmetro id pode ser acessado para obter o identificador único do usuário.

- **Query Strings:** São pares chave-valor que aparecem após o ponto de interrogação na URL. Eles são usados para passar informações adicionais para a requisição e são frequentemente usados em pesquisas ou filtragens. Por exemplo, na URL /users?name=John, a query string name=John contém o parâmetro name com o valor John.

## Conclusão

Nesta aula, exploramos conceitos teóricos sobre rotas, endpoints e parâmetros de requisição no Backend. As rotas e endpoints são fundamentais para definir o fluxo das requisições em uma aplicação web, enquanto os parâmetros de requisição permitem que o cliente especifique informações específicas na solicitação.