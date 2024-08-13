# 📘 Aula - O que é o Express e por que Usá-lo?

## Introdução

O Express é um framework web rápido, flexível e minimalista para o desenvolvimento de aplicativos web em Node.js. Ele simplifica o processo de criação de servidores e a definição de rotas, tornando o desenvolvimento web mais eficiente e produtivo. Nesta aula, exploraremos o que é o Express e entenderemos por que ele é uma escolha popular para desenvolvedores.

## O que é o Express

O Express é uma estrutura de aplicativo web leve e não opinativa construída sobre o Node.js. Ele oferece um conjunto de recursos que facilitam a criação de APIs RESTful, aplicativos web e outros serviços web. Diferentemente do Node.js puro, o Express fornece uma camada de abstração que lida com muitos detalhes de baixo nível, permitindo que os desenvolvedores se concentrem mais na lógica do aplicativo.

## Principais Características

- **Roteamento Simples:** O Express simplifica a definição de rotas e a associação de manipuladores de solicitação a essas rotas.

- **Middlewares:** Os middlewares permitem que você execute ações intermediárias nas solicitações e respostas, como autenticação, log e manipulação de dados.

- **Ampla Compatibilidade:** O Express é compatível com uma variedade de módulos de terceiros e bibliotecas, o que facilita a integração de funcionalidades adicionais.

- **Extensibilidade:** Você pode criar seus próprios middlewares e componentes personalizados para atender às necessidades específicas do seu aplicativo.

- **Suporte a Template Engines:** O Express permite a utilização de mecanismos de templates para gerar dinamicamente o HTML a ser enviado ao cliente.

## Por que usar o Express?

- **Simplicidade e Flexibilidade:** O Express não impõe muitas regras rígidas, permitindo que os desenvolvedores escolham as ferramentas e abordagens que melhor se adequam ao seu projeto.

- **Rapidez no Desenvolvimento:** Com uma sintaxe limpa e funcionalidades abstratas, o Express acelera o desenvolvimento de aplicativos web.

- **Comunidade Ativa:** O Express possui uma comunidade vibrante e uma ampla gama de recursos, tutoriais e pacotes de suporte.

- **Aprendizado Útil para Frameworks Futuros:** A compreensão do Express pode ser transferida para outros frameworks e tecnologias, tornando-o um investimento valioso para sua carreira.

## Conclusão

O Express é uma ferramenta essencial no arsenal de um desenvolvedor Node.js, oferecendo uma maneira eficaz de criar aplicativos web robustos e eficientes. Sua simplicidade, flexibilidade e ampla adoção na comunidade o tornam uma escolha sólida para projetos de todos os tamanhos.

# 📘 Aula - Express: Setup Inicial

## Introdução

Nesta aula, vamos aprender a criar uma base de projeto com Express e TypeScript instalados, para começarmos a desenvolver nossas APIs.

## Passo a passo

O Express é um framework extremamente minimalista e não fornece uma base pronta para começar. Portanto, precisaremos iniciar um projeto Node.js do zero. Para fazer isso, siga os passos a seguir:

## Iniciando o projeto Node.js

Execute o seguinte comando para iniciar um projeto Node.js:
```sh
npm init -y
```
## Instalando dependências

Com o arquivo package.json gerado com sucesso, vamos instalar as dependências, tanto de produção quanto de desenvolvimento.

Dependências de Produção
```sh
npm install express
```
Isso instalará o Express como uma dependência de produção.

Dependências de Desenvolvimento
```sh
npm install -D typescript ts-node-dev @types/express
```
Essa linha instalará o TypeScript, o Ts Node Dev e as definições de tipo do Express como dependências de desenvolvimento.

## Ignorando a node_modules

Após concluir as instalações, é importante ignorar a pasta "node_modules" para que ela não seja versionada. Crie um arquivo chamado ".gitignore" e adicione a seguinte instrução:
```.gitignore
node_modules
```
## Gerando a tsconfig.json

Com a pasta "node_modules" devidamente ignorada, podemos gerar o arquivo "tsconfig.json". Utilizaremos a mesma configuração que foi adotada para projetos em Node.js puro em aulas anteriores. O conteúdo do "tsconfig.json" é o seguinte:
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "typeRoots": ["node_modules/@types"],
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "exactOptionalPropertyTypes": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Organizando diretório

Com todas as configurações feitas, crie uma pasta chamada "src" e dentro dela, crie um arquivo principal para o seu projeto, que pode ser chamado de "app.ts" ou "index.ts".

## Configurando 'run dev'

Com a pasta "src" e o arquivo raiz do projeto criados, abra o "package.json" e crie um script chamado "dev" com a seguinte instrução:
```json
"scripts": {
  "dev": "tsnd --respawn src/<arquivoprincipal>.ts"
}
```
Isso configurará o comando "npm run dev" para executar seu arquivo principal com o TypeScript Node Dev.

Você pode conferir mais sobre configurações do TS Node Dev **[nesta documentação](https://www.npmjs.com/package/ts-node-dev)**.

Com isso, todo essencial para trabalhar com Express estará pronto!

## Conclusão

Nesta aula, aprendemos a criar uma base de projeto Node.js com Express e TypeScript. Na próxima aula, começaremos a explorar o framework Express e aprenderemos como criar APIs. Continuem estudando!

# 📘 Aula - Express: "Olá Mundo"

## Introdução

Nesta aula, vamos explorar os conceitos básicos do Express, começando pela instância de uma aplicação e a criação da nossa primeira rota de API.

## Mão na massa

Para começar a utilizar o Express, o primeiro passo é importar a função principal do Express e instanciar uma aplicação em uma variável (ou constante) da seguinte forma:
```ts
import express from "express";

const app = express();
```
Através dessa instância, teremos acesso a todos os recursos oferecidos pelo Express.

## Listen

Para iniciar a nossa aplicação, utilizamos o método app.listen, que recebe dois parâmetros:

- **port:** A porta na qual a aplicação será iniciada. Por convenção, utilizamos a porta 3000, mas qualquer porta pode ser utilizada.

- **callback:** Como segundo parâmetro, podemos fornecer uma função. Neste exemplo inicial, utilizamos essa função para notificar que a aplicação foi iniciada com sucesso.
```ts
const port = 3000

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
```
## Processando JSON

Em APIs REST, é comum lidar com dados no formato JSON, tanto na recepção quanto na entrega de conjuntos de valores. Portanto, uma boa prática é configurar nossa aplicação para processar JSON. Para isso, utilizamos a seguinte instrução no arquivo principal:
```ts
import { json } from "express";

app.use(json());
```
Essa instrução faz com que qualquer JSON fornecido para nossa API seja convertido em valores que o JavaScript/TypeScript é capaz de interpretar. Funciona de forma semelhante ao JSON.parse, mas de forma mais global.

## Criando minha primeira rota

O Express nos permite criar rotas na nossa API com facilidade. Podemos seguir a dinâmica dos verbos HTTP para criar rotas de POST, GET, PUT, PATCH e DELETE. Cada um desses métodos possui uma função correspondente no objeto app.

Aqui está um exemplo de uma rota de GET simples:
```ts
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World")
})
// Alternativa quando não se usa um dos parâmetros
app.get("/", (_, res: Response) => {
  res.send("Hello World")
})
```
O método get recebe dois parâmetros neste exemplo:

- O endereço da rota (URL)
- A instrução a ser executada na rota
#
Observe a existência dos parâmetros req e res, que são fornecidos pelo próprio Express. Vamos explicar mais sobre esses parâmetros nas próximas aulas.

Combinando todos esses elementos, teremos nossa primeira API funcionando. Ao rodar o comando npm run dev, se tudo estiver configurado corretamente, você poderá acessar o endereço http://localhost:3000 com o método GET e verá a resposta "Olá mundo!".

## Conclusão

Nesta aula, criamos nossa primeira API utilizando os recursos básicos do Express. Nas próximas aulas, iremos explorar cada recurso que afeta o comportamento das nossas rotas separadamente, construindo aplicações mais robustas. Continue estudando!

# 📘 Aula - Express: Definindo Rotas

## Introdução

Nesta aula, vamos aprofundar nosso entendimento sobre como definir rotas com o Express. Para isso, criaremos um conjunto completo de rotas para todos os verbos HTTP.

## Métodos de criação de rotas

Para criar rotas com o Express, como mencionado em aulas anteriores, temos um método disponibilizado pela instância do Express para cada verbo HTTP:

- **app.get** - para rotas de leitura (verbo HTTP GET)
- **app.post** - para rotas de criação, cadastro e login (verbo HTTP POST)
- **app.patch** - para rotas de atualização parcial (verbo HTTP PATCH)
- **app.put** - para rotas de atualização completa (verbo HTTP PUT)
- **app.delete** - para rotas de exclusão (verbo HTTP DELETE)
```ts
import express, { json, Request, Response } from "express";

const app = express();
const port = 3000;

app.use(json());

app.get("/", (req: Request, res: Response) => {
    res.send("Leitura realizada com sucesso!");
})

app.post("/", (req: Request, res: Response) => {
    res.send("Criação realizada com sucesso!")
})

app.put("/", (req: Request, res: Response) => {
    res.send("Atualização realizada com sucesso!")
})

app.delete("/", (req: Request, res: Response) => {
    res.send("Exclusão realizada com sucesso!")
})

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})
```
Neste exemplo, foram criadas quatro rotas, e independentemente do método HTTP utilizado, a estrutura de criação é praticamente a mesma. Cada rota recebe a URL como primeiro parâmetro e uma função lógica como segundo parâmetro, com req e res presentes em todos os casos.

**É importante notar que é possível criar quantas rotas desejarmos em nossas APIs, contanto que elas não compartilhem o mesmo método HTTP e endereço.**

## Conclusão

Nesta aula, aprendemos sobre a criação de múltiplas rotas em aplicações com Express. Nas próximas aulas, exploraremos mais detalhadamente o funcionamento dos parâmetros req e res. Continue estudando!

# 📘 Aula - Express: Request (req)

## Introdução

Nesta aula, vamos aprender sobre o parâmetro req do Express e suas subdivisões.

## O parâmetro req

O parâmetro req existe para agrupar o conjunto de valores que vêm de origem externa para a nossa aplicação, por meio de requisições (por isso, é chamado de request). O parâmetro request é dividido em 4 subdivisões:

- **req.body** - objeto condensando todo o conjunto de dados fornecido no corpo da requisição
- **req.headers** - objeto condensando configurações da requisição e chaves de acesso
- **req.params** - objeto condensando parâmetros previstos da URL das rotas.
- **req.query** - objeto condensando parâmetros de busca (não previstos na URL das rotas)/

É por meio desses valores que conseguimos controlar a maioria das variações de comportamento em nossas rotas.

## Parâmetros de URL

Os parâmetros nas URLs das rotas, condensados em req.params, podem ser declarados da seguinte forma:
```ts
⁠⁠app.post("/:example", (req: Request, res: Response) => {
  /* req.params.example */
  // req.body => Corpo da requisição
  // req.params => Parâmetros da URL (/example)
  // req.query => Parâmetros de busca na URL (?example=example&example2=example2)
  // req.headers => Parâmetros de credenciais/acesso (host/token/aplication)
})
```
Parâmetros deste tipo se tornam obrigatórios ao serem declarados e precisam ser fornecidos da seguinte forma:
```url
http://api.url/valordeexemplo
```
## 2.2 Parâmetros de busca (URL Search Params)

Os parâmetros de busca, condensados em req.query, não precisam ser declarados nas rotas do Express e geralmente costumam ser opcionais.

Parâmetros deste tipo podem ser passados da seguinte forma:
```url
http://api.url?parametro1=valor1&parametro2=valor2
```
## Conclusão

Nesta aula, aprofundamos nosso entendimento sobre o parâmetro req, essencial para o funcionamento das rotas no Express. Na próxima aula, vamos nos concentrar em entender o res. Continue estudando!

# 📘 Aula - Express: Response (res)

## Introdução

Nesta aula, vamos aprender sobre o parâmetro res no Express, que é responsável por enviar respostas nas rotas da aplicação.

## O parâmetro res

O parâmetro res, abreviação de "response", é fundamental para construir e enviar respostas às requisições recebidas pelo servidor. Ele permite que nossa aplicação envie dados de diferentes tipos como resposta ao cliente que fez a requisição.

## send

O método send emite respostas simples, geralmente em formato de texto.

Curiosidade: este modelo de resposta é capaz de processar HTML e pode ser encontrado com essa finalidade e aplicações monolíticas

## json

O método json converte o objeto JavaScript passado como argumento em uma resposta JSON e a envia de volta para o cliente que fez a requisição.
```ts
res.json({ message: "Criação realizada com sucesso!"});
```
## Status Code

Para tornar nossas respostas mais semânticas, podemos apontar na resposta um Status Code, utilizando o método status.

Abaixo, segue uma lista resumida dos Status Code mais utilizados:

- **200 - OK** - Para requisições bem sucedidas, é o mais genérico dos status de sucesso
- **201 - Created** - Para requisições bem sucedidas de criação
- **204 - No Content** - Para requisições bem sucedidas sem um corpo de resposta
- **400 - Bad Request** - Para requisições mal sucedidas, como erros previstos em nossa aplicação, é o mais genérico dos status de falha
- **401 - Unauthorized** - Para requisições mal sucedidas, onde houve falha na autenticação
- **404 - Not Found** - Para requisições mal sucedidas, onde determinado recurso ou rota não foi encontrado
- **500 - Internal Server Error** - Para erros não previstos na nossa aplicação

Você pode conferir outros Status Code acessando [este link](https://http.cat/).

Exemplo de uso de Status Code:
```ts
res.status(201).json({ message: "Criação realizada com sucesso!"});
```
## Return

É uma prática recomendada anteceder a execução do res com um return, como mostrado abaixo. Isso é importante para evitar a execução de instruções após a resposta, o que pode ser problemático ao lidar com exceções nas próximas aulas.
```ts
return res.status(201).json({ message: "Criação realizada com sucesso!"});
```
Ficará mais claro entender esta necessidade quando começaremos a trabalhar com exceções nas aulas mais a frente.

## Conclusão

Nesta aula, exploramos o parâmetro res e seus métodos. Na próxima aula, aprenderemos a organizar de forma modular as rotas da nossa aplicação.

# 📘 Aula - Express: Router

## Introdução

Nesta aula, vamos aprender a organizar nossas rotas de forma modular em nossos projetos, visando criar uma arquitetura mais escalável e organizada.

## Router

O Router é uma funcionalidade do Express que permite agrupar um conjunto de rotas de forma isolada em arquivos separados, proporcionando uma melhor divisão da aplicação e uma organização mais eficiente das rotas.

Exemplo de utilização do Router:
```ts
// ./routes/routes.ts

import { Request, Response, Router } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => {    
    return res.send("Leitura realizada com sucesso!");
})

router.post("/", (req: Request, res: Response) => {
    return res.status(201).json({ message: "Criação realizada com sucesso!"});
})

router.put("/", (req: Request, res: Response) => {
    return res.send("Atualização realizada com sucesso!")
})

router.delete("/", (req: Request, res: Response) => {
    return res.send("Exclusão realizada com sucesso!")
})
```
Em um arquivo separado, agrupamos todas as rotas relacionadas a produtos. Utilizamos a instância de Router para definir as rotas comuns, como get, post, put e delete.

## Referenciando o roteador no arquivo principal

Para que as rotas criadas em um roteador se tornem disponíveis na aplicação, é necessário referenciar o roteador no arquivo principal da seguinte forma:
```ts
app.use("/", router);
```
Nesse exemplo, o primeiro parâmetro do use é a URL que irá prefixar todas as rotas pertencentes ao roteador.

## Reflexo no projeto

Com a utilização do Router para centralizar as rotas relacionadas a produtos, o arquivo principal do projeto fica mais limpo e organizado. Veja o resultado:
```ts
import express, { json } from "express";
import { router } from "./routes/routes";

const app = express();

app.use(json());

app.use("/products", router);

const port = 3000;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})
```

## Conclusão

Nesta aula, aprendemos sobre o recurso Router do Express, que nos permite criar uma arquitetura mais escalável e organizada para nossas rotas. Nas próximas aulas, continuaremos a explorar recursos de arquitetura e aprenderemos a integrar conceitos de Programação Orientada a Objetos (POO) com o Express.

# 📘 Aula - Arquitetura: Database, Interfaces e Controllers

## Introdução

Nesta aula, aprenderemos a trabalhar com lógica em nossas rotas, unindo os conceitos de POO e manipulação de dados, aprendidos nos ciclos anteriores e evoluindo ainda mais a arquitetura dos nossos projetos.

## Database

No backend, é muito comum estarmos interagindo com bancos de dados em nossas APIs. Embora, nessa primeira etapa do curso, utilizaremos somente uma "simulação", já é importante perceber que existe um espaço na arquitetura separado para configurações de banco. Por isso, na vídeo aula, criamos uma pasta database.

## Banco de dados (fake)

Para simular um banco de dados, podemos criar uma lista de objetos, podendo iniciar vazia, ou com valores de exemplo.
```ts
// db.ts
export const database: Product[] = []
```
## Simulando ids

Quando estamos simulando um banco de dados, é necessário também criar um gerador de ids, para que cada item no banco tenha um identificador único. Para isso, podemos criar uma função simples para isso ou utilizar uma biblioteca para tal finalidade.

### ID sequencial

Para IDs sequenciais, criamos uma função que incrementa uma variável a cada nova execução:
```ts
// db.ts
let id = 0

export function generateId(): number {
  id++
  return id
}
```
## UUID

Podemos também utilizar a biblioteca UUID para gerar identificadores únicos.

Tenha em mente que, em bancos de dados reais, os identificadores serão fornecidos pelo próprio banco de dados, sem necessidade de procedimentos na nossa lógica.

## Interfaces

É necessário também um diretório específico para nossas tipagens, por isso, na vídeo aula, criamos uma pasta interfaces. Dentro deste diretório, podemos dividir nossos arquivos com base nos agrupamentos de rotas, por exemplo, para um conjunto de rotas de produtos, um arquivo products.interfaces.ts.

Confira o exemplo abaixo:
```ts
// interfaces.ts
export interface Product {
  id: number
  name: string
  price: number
}
```
## Controllers

Nos exemplos mais básicos com o Express, a função lógica estava declarada com a rota:
```ts
// controllers.ts
import type { Request, Response } from "express";
import type { Product } from "../interfaces/interfaces";
import { database, generateId } from "../database/db";

export class Controllers {

  createProduct(req: Request, res: Response) {
    const newProduct: Product = {
      id: generateId(),
      name: req.body.name,
      price: req.body.price
    }
    database.push(newProduct)

    res.status(201).json(newProduct)
  }

  getProducts(_: Request, res: Response) {
    return res.status(200).json(database)
  }

  deleteProduct(req: Request, res: Response) {
    const idx = database.findIndex(product => product.id === Number(req.params.id))

    database.splice(idx, 1)

    return res.status(204).json()
  }
}
```
Neste exemplo, criamos uma classe com três métodos, um para leitura, um para criação e um para exclusão de produtos. Para relacionarmos os métodos com as rotas, instanciamos a classe e apontamos cada um dos métodos como parâmetros das rotas desejadas.

Confira abaixo:
```ts
// routes.ts
import { Router, type Request, type Response } from "express"
import { Controllers } from "../controllers/controllers"

export const router = Router()
const controller = new Controllers()

router.get("/", controller.getProducts)

router.post("/", controller.createProduct)

router.put("/", (req: Request, res: Response) => {

  return res.json({ message: "PUT: Hello World" })
})

router.delete("/:id", controller.deleteProduct)
```

## Conclusão

Nesta aula, evoluímos consideravelmente a nossa arquitetura de projeto e aprendemos a unir os conceitos de POO e manipulação de dados a nossas aplicações. Continuaremos, nas próximas aulas, descobrindo mais recursos do Express e refinando ainda mais nossa arquitetura. Bons estudos!

# 📘 Aula - Express: Middlewares

## Introdução

Nesta aula, aprenderemos sobre um recurso para execução de lógicas intermediárias em nossas rotas, estamos falando do middleware.

## Middleware

Como dito, um middleware é um recurso para execução de lógicas intermediárias que podem ser executadas de forma sequencial nas rotas da nossa aplicação. Eles permitem a execução de tarefas como autenticação, validação, log e muito mais.

Por meio dos conhecimentos adquiridos em aulas anteriores, percebemos que um dos aspectos de arquitetura é dividir os arquivos de forma consistente.

O middleware também tem um importante papel na arquitetura, pois consegue lidar com repetição de código de forma mais eficiente, além de deixar a lógica principal de cada rota mais enxuta.

Confira o exemplo abaixo, produzido na vídeo aula:
```ts
// middlewares.ts
import type { NextFunction, Request, Response } from "express";
import { database } from "../database/db";

export class Middlewares {
  static isIdValid(req: Request, res: Response, next: NextFunction) {
    if (!database.some(product => product.id === Number(req.body.id))) {
      return res.status(404).json({
        error: "Product not found "
      })
    }
    next()
  }
}
```
Foi criado um middleware para verificar a validade do ID de um produto. Note que a mesma instrução foi utilizada tanto na rota de leitura quanto na rota de exclusão. Uma motivação poderosa para que esta validação tenha sido posta em middleware.
```ts
// router.ts
import { Router, type Request, type Response } from "express"
import { Controllers } from "../controllers/controllers"
import { Middlewares } from "../middlewares/middlewares"

export const router = Router()
const controller = new Controllers()

router.get("/", controller.getProducts)

router.get("/:id", Middlewares.isIdValid, controller.getOneProduct)

router.post("/", controller.createProduct)

router.put("/", (req: Request, res: Response) => {

  return res.json({ message: "PUT: Hello World" })
})

router.delete("/:id", Middlewares.isIdValid, controller.deleteProduct)
```
O exemplo acima demonstra a aplicação de middlewares nas rotas.
```ts
router.get("/", middleware, logic);
```
É possível haver mais um middleware por rota:
```ts
router.get("/", middleware1, middleware2, middleware3, logic);
```
## NextFunction

Um middleware conta com os parâmetros req e res, assim como nossos controllers, porém, para ser possível avançar para o próximo middleware ou para a próxima lógica, há também um terceiro parâmetro nas funções, o next (ou NextFunction).

## Conclusão

Nesta aula, aprendemos sobre middlewares e como podemos utilizar este recurso para tornar nossas aplicações mais flexíveis e escaláveis. Continuaremos nas próximas aulas conhecendo recursos para tornar a arquitetura das aplicações cada vez mais refinada. Bons estudos!

# 📘 Aula - Arquitetura: Services

## Introdução

Nesta aula, estaremos refinando ainda mais a arquitetura das nossas aplicações compreendendo a divisão services e controllers.

## Services

Serviços consistem em divisões específicas para encapsular regras de negócio, geralmente, desacopladas de controles vindos do framework.

A principal motivação para aplicarmos essa divisão em nossas aplicações é trazer mais flexibilidade e escalabilidade para nossos projetos, fazendo as regras de negócio necessitarem de pouca ou nenhuma alteração em caso de refatorações (mudanças de framework, por exemplo).

Confira um exemplo de serviço abaixo:
```ts
// services.ts
export class Services {
  static createProduct(name: string, price: number): Product {
    const newProduct: Product = {
      id: generateId(),
      name,
      price
    }
    database.push(newProduct)

    return newProduct
  }
}
```
Este serviço é resultado de uma refatoração de um "controle" que havíamos criado em aulas anteriores, observe que a função não está lidando diretamente com os parâmetros padrões Express.

## Controllers

Estávamos utilizando, em exemplos anteriores, a ideia de controladores mesclada com a ideia de serviços, no entanto, um controller tem somente a responsabilidade de servir como ponte de relacionamento com o framework.

No caso do Express, o controller ficará responsável por:

- Interagir com req, fornecendo os valores necessários para atender os parâmetros exigidos pelo serviço
- Interagir com res, emitindo a resposta da rota, utilizando ou não os valores retornados pelo serviço

Confira o exemplo abaixo, do controller criado para o serviço apresentado acima:
```ts
export class Controllers {

  createProduct(req: Request, res: Response) {
    const service = Services.createProduct(req.body.name, req.body.price)

    return res.status(201).json(service)
  }
}
```
Observe que o controlador acima fornece os parâmetros exigidos pelo createProduct e administra a resposta, sem executar qualquer regra de negócio.

## Conclusão

Nesta aula, aprendemos sobre a divisão de services e controllers. Aproveite para colocar todo o conhecimento adquirido, em projetos, entregas e atividades. Bons estudos!

