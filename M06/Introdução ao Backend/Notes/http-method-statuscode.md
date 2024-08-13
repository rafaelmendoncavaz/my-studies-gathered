# 📘 Aula - Métodos HTTP e Códigos de Status

## Introdução

Nesta aula, vamos aprofundar nosso conhecimento sobre os Métodos HTTP e os Códigos de Status no contexto do Node.js, Express e TypeScript. Esses elementos são fundamentais para o desenvolvimento web, pois governam como as requisições são feitas e como as respostas são interpretadas entre o cliente e o servidor. Vamos entender a importância desses conceitos para a comunicação eficiente entre as partes envolvidas.

## Métodos HTTP

Os Métodos HTTP são verbos utilizados para indicar a ação que se deseja realizar em um recurso do servidor. Cada método possui um significado específico, e é importante utilizar o método apropriado para a operação que se deseja executar. Alguns dos principais métodos HTTP são:

- **GET:** Utilizado para obter informações do servidor. Por exemplo, quando você acessa uma página em seu navegador, ele faz uma requisição GET para receber o conteúdo dessa página.

- **POST:** Utilizado para enviar dados ao servidor para serem processados. Por exemplo, ao preencher um formulário em um site e clicar em "Enviar", uma requisição POST é feita para enviar os dados preenchidos.

- **PATCH:** Utilizado para atualizar apenas partes específicas de um recurso. Isso significa que apenas as informações que foram alteradas precisam ser enviadas novamente, e as outras informações permanecem inalteradas.

- **PUT:** Utilizado para atualizar um recurso completo no servidor. Por exemplo, quando você faz uma atualização em seu perfil em uma aplicação web, é feita uma requisição PUT para atualizar os dados do seu perfil no servidor.

- **DELETE:** Utilizado para excluir um recurso no servidor. Por exemplo, quando você clica em "Excluir" em uma postagem de rede social, é feita uma requisição DELETE para excluir a postagem.

## Códigos de Status

Os Códigos de Status são números de três dígitos que indicam o resultado da requisição feita pelo cliente ao servidor. Esses códigos são importantes para que o cliente possa interpretar o resultado da requisição e tomar as ações apropriadas. Alguns dos códigos de status mais comuns são:

- **200 OK:** Indica que a requisição foi bem-sucedida e o servidor retornou os dados solicitados.

- **201 Created:** Indica que a requisição de criação de um novo recurso foi bem-sucedida.

- **204 No Content:** Indica que a requisição foi bem-sucedida, mas não há dados para retornar na resposta.

- **400 Bad Request:** Indica que a requisição feita pelo cliente é inválida ou não pode ser processada pelo servidor.

- **404 Not Found:** Indica que o recurso solicitado não foi encontrado no servidor.

- **500 Internal Server Error:** Indica que ocorreu um erro interno no servidor ao processar a requisição.

## Conclusão

Nesta aula, aprendemos sobre a importância dos Métodos HTTP e dos Códigos de Status no desenvolvimento web com Node.js, Express e TypeScript. Os Métodos HTTP permitem especificar a ação desejada, enquanto os Códigos de Status fornecem informações sobre o resultado da requisição.

É fundamental utilizar os métodos apropriados para as operações desejadas, garantindo assim a integridade e a eficiência na comunicação entre o cliente e o servidor. Além disso, interpretar corretamente os códigos de status é crucial para garantir que a aplicação funcione de forma adequada e forneça respostas precisas aos usuários.