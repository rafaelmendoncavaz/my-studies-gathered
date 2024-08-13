# 📘 Aula - Errors: Classe Customizada

## Introdução

Neste ciclo de aulas, começaremos a lidar com erros de forma mais escalável, começando com a criação de uma classe de erro customizada, um passo fundamental para garantir que a aplicação lide com erros de forma adequada.

## Classe nativa de erros do Javascript

⁠Nosso ponto de partida para criação da nossa classe customizada de erros será a classe Error, nativa do Javascript. Error é uma classe nativamente adequada para lidar com erros, no entanto, conta com uma limitação: não é capaz de lidar com status code (elemento essencial do modelo de API Rest).

## Classe customizada

Por isso, estaremos criando uma versão aprimorada da mesma, confira o exemplo abaixo:
```ts
export class AppError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}
```
Perceba que utilizamos o mecanismo de herança, para herdar todos os recursos da classe Error, e, adicionamos na classe AppError uma variável customizada, o statusCode. Com isso, estaremos resolvendo a limitação.

## Benefícios dessa abordagem

- **Padronização:** Estamos fornecendo uma estrutura padronizada para lidar com erros em todo o aplicativo.

- **Informações Detalhadas:** Estamos permitindo a inclusão de informações adicionais, como códigos de status e mensagens.

- **Manutenção Simplificada:** Com isso, a manutenção será simplificada, pois erros específicos têm uma implementação centralizada.


Com a mudança, passamos a utilizar nossa classe customizada como emissor de erros. Observe que isso não será o suficiente para emitir as respostas em formato JSON, continuaremos refinando nossa trativa de erros na próxima aula.

## Conclusão

Nesta aula, começamos a aprender sobre como lidar com erros de forma escalável em nossas aplicações criando uma classe customizada. Na próxima aula, estaremos criando um middleware para traduzir erros em resposta no formato adequado. Bons estudos!

# 📘 Aula - Errors: Middleware para Lidar com Erros no Express

## Introdução

Com nossa classe de erro customizada criada, nesta aula, estaremos trabalhando em um middleware global para traduzir nossos erros em respostas do Express.

## Middleware 
```ts
// middlewares.ts
import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";

export class Middlewares {

  static handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.message
      })
    } else {
      return res.status(500).json({
        error: "Internal Server Error"
      })
    }
  }
}
```
No middleware acima, observe que temos um parâmetro a mais (além dos que estamos ambientados a utilizar em nossos middlewares), o err. Este parâmetro é capaz de receber os erros emitidos por nossa classe customizada e também pela classe nativa.
#
Sabendo disso, foi feita a seguinte tratativa:
```ts
// caso seja um erro do app/client
if (err instanceof AppError) {
  return res.status(err.statusCode).json({
    error: err.message
  })
// caso seja um erro do servidor
} else {
  return res.status(500).json({
    error: "Internal Server Error"
  })
}
```
Diferente dos middlewares que criamos até agora neste curso, precisaremos aplicar nosso middleware de forma global (em todas as rotas). No Express, podemos fazer isso utilizando o app.use da seguinte forma:
```ts
// index.ts
app.use(Middlewares.handleErrors)
```
Em nossas aplicações, quando começarmos a lidar com bancos de dados e serviços externos, frequentemente estaremos utilizando funções assíncronas. Por conta disso, para que o middleware funcione também em erros produzidos por este tipo de função, será necessário a instalação da biblioteca express-async-errors.
```sh
npm install express-async-errors
```
E, no arquivo principal da sua aplicação, importe "express-async-errors":
```ts
import "express-async-errors"
```
Com isso, nosso middleware de tratativa de erros estará completo e compatível também com funções assíncronas.

## Conclusão

Nesta aula, aprendemos a criar um middleware para lidar com erros e exceções em nossa aplicação de forma escalável. Coloque seus conhecimentos aprendidos até aqui em projetos e entregas para aprender cada vez mais. Bons estudos!