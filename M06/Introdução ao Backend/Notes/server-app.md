# 📘 Aula - Arquitetura: Server e App

## Introdução

Nesta aula, estaremos aprendendo sobre mais uma divisão importante para refinar a arquitetura dos nossos projetos back-end: a divisão entre server e app.

## App

O arquivo "app.ts" será encarregado de instanciar o Express e também de lidar com roteadores e middlewares.
```ts
// app.ts
import "express-async-errors"
import express, { json } from "express"
import { router } from "./routes/routes"
import { Middlewares } from "./middlewares/middlewares"

const app = express()

app.use(
  json()
)

app.use("/", router)

app.use(Middlewares.handleErrors)

export default app
```
Observe que a instrução listen não permanecerá mais no arquivo "app", mas estará isolada em outro arquivo.

## Server

O arquivo "server.ts" será responsável por iniciar a aplicação em uma porta e também por estabelecer conexões com o banco de dados.
```ts
// server.ts
import app from "../app"

const port = 3000

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
```
Observe que, no contexto de server, o módulo app é importado para que a instância de listen ocorra em um arquivo separado. 
#
Esta mudança de arquitetura, embora simples, é extremamente necessária, porque existem situações em que app precisa ser utilizado de forma isolada, como na criação de testes automáticos, por exemplo.

## Alterando o script "dev"

Com essa mudança, será necessário alterar o script de dev em "package.json", apontando agora para o arquivo "server.ts". Confira o exemplo abaixo:
```json
// package.json
"scripts": {
  "dev": "tsnd --respawn src/server/server.ts"
}
```

## Conclusão

Nesta aula, aprendemos a refinar ainda mais nossa arquitetura, segmentando o arquivo principal em app e server. Adote este modelo em todas as suas aplicações daqui em diante. Bons estudos!