# 📘 Aula - Zod: Introdução

## Introdução

Nesta aula, vamos introduzir a biblioteca Zod, uma ferramenta poderosa para validação de dados em aplicações JavaScript e TypeScript. O Zod permite definir esquemas de validação de forma concisa e segura, garantindo a integridade e consistência dos dados manipulados pela aplicação.

## O que é o Zod

Nesta seção, vamos entender o que é o Zod. O Zod é uma biblioteca de validação de esquemas que facilita a definição e validação de tipos de dados em tempo de execução.

## Benefícios do Zod

- **Tipagem Estática:** O Zod oferece suporte total para TypeScript, o que significa que você pode validar tipos de dados com segurança, aproveitando as vantagens da tipagem estática.

- **Sintaxe Concisa:** A sintaxe do Zod é simples e legível, o que facilita a criação e manutenção de esquemas de validação.

- **Tratamento de Erros Robusto:** O Zod fornece mensagens de erro claras e descritivas, facilitando a identificação e correção de problemas.

## Instalando zod

O Zod deve ser instalado como dependência de produção usando o seguinte comando:
```sh
npm install zod
pnpm install zod
yarn add zod
```
O Zod tem alguns requisitos para funcionar corretamente, sendo eles:

1. TypeScript 4.5+.
2. O strict deve estar ativo no seu tsconfig.json.
#
### Exemplo básico de validação com zod

Para utilizar o Zod, são necessários dois passos essenciais:

### Schema (esquema de validação)

O esquema de validação consiste em um conjunto de regras a ser comparado com um dado TypeScript (no exemplo abaixo, um objeto). Abaixo está um exemplo de um esquema de validação:
```ts
import { z } from "zod";

export const createProductBodySchema = z.object({
    name: z.string().min(2),
    price: z.number().min(0.01)
})
```
Na **[documentação do Zod](https://zod.dev/)**, é possível conferir todas as regras de validação disponíveis para cada tipo de dado.

### Comparando o esquema de validação com parse

Com o schema criado e exportado, podemos utilizar o método parse fornecido pelo schema para compará-lo com um dado JavaScript. Dessa forma:
```ts
createProductBodySchema.parse(req.body);
```
Utilizamos o método parse fornecido pelo esquema para compará-lo com o req.body. Se a comparação for bem-sucedida, será retornado uma versão filtrada do objeto comparado (removendo chaves não consideradas no esquema); caso contrário, será emitido um erro.

Para lidar com isso, no exemplo da videoaula, criamos um middleware e utilizamos o try-catch para lidar com a situação de erro. Confira abaixo:
```ts
import { NextFunction, Request, Response } from "express";
import { createProductBodySchema } from "../schemas/createProductBody.schema";

export class Middlewares {
  static execute(req: Request, res: Response, next: NextFunction) {
    try {
      createProductBodySchema.parse(req.body);

      next();
    } catch (error) {
      return res.status(409).json({ 
        message: "User body is not valid."
      }); 
    }      
  }
}
```
## Conclusão

Nesta aula concluímos nossa introdução às validações com Zod. Na próxima aula, estaremos trabalhando neste middleware para tornar sua utilização mais flexível e escalável. Bons estudos!

# 📘 Aula - Zod: Middleware para Validação de Dados

## Introdução

Nesta aula, estaremos aprimorando nosso middleware de validação de dados para torná-lo mais escalável.

## Mão na massa

O objetivo será conseguir receber qualquer esquema fornecido pelo Zod e torná-lo aplicável a múltiplas rotas. Portanto, será necessário um parâmetro customizado em nosso middleware.

## Parâmetros customizados nos middlewares

Para isso, podemos utilizar uma técnica chamada thunk, que consiste em criar uma função (ou método) que retorna outra função, permitindo a primeira função receber parâmetros customizados e a segunda função receber parâmetros padrões. Exemplo:
```ts
metodo(exemplo: Exemplo) {
  return (req: Request, res: Response, next: NextFunction) => {
    /* ... */
  };
}
// OU
metodo(exemplo: Exemplo) {
  return {
    fn(req: Request, res: Response, next: NextFunction) => {
      /* ... */
    }
  }
}
```
Na execução do middleware, poderíamos passar um valor para esse parâmetro customizado. Veja o exemplo abaixo:
```ts
router.get("/", middleware.metodo(parametro), controle);
```
## Exemplo prático

Entendendo este conceito, foi criado o middleware abaixo:
```ts
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export class Middlewares {
  static validateBody(schema: AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        req.body = schema.parse(req.body);

        next();
      } catch (error) {
        if(error instanceof ZodError) {
          return res.status(409).json(error); 
        }                
      }  
    }            
  }
}
```
Observe que o schema agora passa a ser um parâmetro e não mais um esquema estático, tornando o middleware reutilizável para a validação do corpo de qualquer requisição. O mesmo é executado no roteador da seguinte forma:
```ts
const middleware = new Middlewares()
productsRouter.post("/", middleware.validateBody(createProductBodySchema), productsControllers.createProduct);
```
## ZodError

No middleware anterior, é importante observar que a mensagem padrão foi substituída por uma resposta genérica. Além disso, foi adicionada uma condicional para verificar a instância de ZodError.

O ZodError trata-se de uma classe de erro customizada, semelhante a que criamos em aulas anteriores, para lidar com erros fornecidos pelo Zod, que terão um formato predefinido pela biblioteca. Confira o exemplo abaixo:
```json
{
	"issues": [
		{
			"code": "invalid_type",
			"expected": "number",
			"received": "undefined",
			"path": [
				"price"
			],
			"message": "Required"
		}
	],
	"name": "ZodError"
}
```
## Conclusão

Nesta aula, aprendemos como tornar nosso middleware de validação de dados mais escalável, explorando o uso de parâmetros customizados em nossos middlewares. Continuaremos a evoluir nossa validação de dados nas próximas aulas. Desejamos bons estudos!

# 📘 Aula - Zod: Validando req.query e req.params

## Introdução

Nesta aula, estaremos tornando nosso middleware de validação de dados ainda mais escalável, agora podendo validar, além do req.body, também o req.query e req.params.

## Mão na massa

Para tornar nossa validação de dados ainda mais escalável, estaremos aprimorando o parâmetro do nosso middleware, antes um esquema único, agora um objeto, podendo receber três esquemas diferentes:
```ts
interface RequestSchemas {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}
```
Cada um dos esquemas será opcional, tendo em vista, que não precisaremos validar as três divisões e cada uma das nossas rotas. Por isso, a lógica no interior do middleware muda um pouco.

Confira abaixo:
```ts
export class Middlewares {
  static validateBody(schemas: IRequestSchemas) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if(schemas.params) {
          req.params = await schemas.params.parseAsync(req.params);
        }

        if(schemas.body) {
          req.body = await schemas.body.parseAsync(req.body);
        }

        if(schemas.query) {
          req.query = await schemas.query.parseAsync(req.query);
        }                

        next();
    } catch (error) {
        if(error instanceof ZodError) {
          return res.status(409).json(error); 
        }                
      }  
    }            
  }
}
```
Observe que, agora, é feita uma condicional para verificar a existência de cada um dos schemas antes de prosseguir com o parse.

## parseAsync

Além disso, por se tratar de uma boa prática, substituímos o parse pelo parseAsync, para que o middleware seja capaz de lidar livremente com situações assincronas, além de garantir que uma ordem de validação.

Como resultado, temos um middleware extremamente escalável capaz de validar qualquer divisão de Request. Confira a aplicação do mesmo no roteador:
```ts
const middleware = new Middlewares()
productsRouter.post("/", middleware.validateBody({ 
  body: createProductBodySchema 
  }), 
productsControllers.createProduct);
```
_No caso de utilizar o parseAsync para a validação com esquemas Zod, lembre-se de instalar e configurar a biblioteca express-async-errors em seu arquivo app.ts._

## Conclusão

Nesta aula, conseguimos dar uma escalabilidade flexibilidade poderosa a nosso middleware de validação de dados. Na próxima aula, estaremos mesclando a ideia de validação de dados com o middleware handleErrors, criado em ciclos anteriores. Bons estudos!

# 📘 Aula - Zod: Relacionando o Middleware de Validação de Dados com HandleErrors

## Introdução

Nesta aula, vamos relacionar o middleware de validação de dados que foi desenvolvido nas aulas anteriores com o middleware HandleErrors, criado para lidar com erros de maneira escalável em ciclos de desenvolvimento anteriores.

## HandleErrors

O HandleErrors é um middleware que criamos para gerenciar erros de forma escalável. Abaixo está o código do middleware:
```ts
import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

export class HandleErrors {
  static execute(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ error: err.message });
    } else {
      console.log(err);
      return res.status(500).json({ 
        error: "Internal server error." 
      });
    }
  }
}
```
Ele faz uso de uma classe personalizada de erros chamada AppError:
```ts
export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string){
    super(message);
    this.statusCode = statusCode;
  }
}
```
**Para lidar com situações assíncronas foi utilizado o "express-async-errors".**

## Integrando a Instância de ZodError com o HandleErrors

Para integrar nossa validação de dados com o HandleErrors, precisamos adicionar uma condição para a classe personalizada ZodError. Veja o exemplo abaixo:
```ts
import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { ZodError } from "zod";

export class HandleErrors {
  static execute(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ 
        error: err.message 
      });
    } else if (err instanceof ZodError) {
        return res.status(409).json(err);
    } else {
      console.log(err);
      return res.status(500).json({ 
        error: "Internal server error." 
      });
    }
  }
}
```
Depois de fazer isso, não será mais necessário usar try-catch no nosso middleware de validação de dados, nem emitir uma resposta de erro manualmente. O resultado será mais limpo e simplificado.

Confira abaixo:
```ts
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

interface RequestSchemas {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export class ValidateBody {
  static execute(schemas: RequestSchemas) {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (schemas.params) {
        req.params = await schemas.params.parseAsync(req.params);
      }

      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      }

      if (schemas.query) {
        req.query = await schemas.query.parseAsync(req.query);
      }

      next();
    };
  }
}
```

## Conclusão

Nesta aula, aprendemos a combinar o middleware de validação de dados com o HandleErrors, o que torna o código mais limpo e divide as responsabilidades de forma mais eficaz. Aplique esse conhecimento em seus projetos e estudos. Bons estudos!

# 📘 Aula - Zod: Omit, Pick e Partial

## Introdução

Nesta aula, estaremos aprendendo a lidar com nossos esquemas de forma mais produtiva, aprendendo a criar esquemas derivados utilizando métodos fornecidos pelo Zod.

## Sobre

O Zod oferece métodos semelhantes aos já conhecidos Pick, Omit e Partial do Typescript, possibilitando a criação de esquemas de derivados. Abaixo, estaremos exemplificando o uso de cada um deles de forma separada. 

Para contextualizarmos nossos exemplos, imagine um schema que existe para validar um produto por completo:
```ts
export const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(2),
  price: z.number().min(0.01)
})
```
## Omit

O método omit existe para criar um novo esquema a partir do original, trazendo somente as chaves referenciadas no parâmetro. Confira o exemplo abaixo:
```ts
const schema = productSchema.omit({ id: true });
```
**Neste caso, é omitido o id do novo esquema.**

## Pick

O método pick existe para criar um novo esquema a partir do original, convertendo todas as chaves para opcionais. Confira o exemplo abaixo:
```ts
const schema = productSchema.pick({ name: true, price: true });
```
**Neste caso, foram incluídos somente name e price no novo esquema.**

## Partial

O método partial existe para criar um novo esquema a partir do original, convertendo todos às chaves para opcionais. Confira o exemplo abaixo:
```ts
const schema = productSchema.partial();
```
## Combinando métodos

É possível combinar métodos para ter ainda mais possibilidades de variação na criação de esquemas derivados. Confira o exemplo abaixo:
```ts
export const editProductBodySchema = productSchema.omit({ id: true }).partial();
```
## Conclusão

Nesta aula, aprendemos sobre os métodos omit, pick e partial, que permitem a criação de esquemas derivados. Na próxima aula, continuaremos a evoluir com recursos interessantes do Zod. Bons estudos!

# 📘 Aula - Zod: Infer

## Introdução

Nesta aula, estaremos aprendendo a produzir tipos por meio de nossos esquemas do Zod, tornando nossas tipagens mais produtivas.

## Infer

O Zod oferece uma alternativa poderosa para extrair tipagens de nossos esquemas, o método "infer". Confira o exemplo de funcionamento abaixo:
```ts
import { z } from "zod";

import { productSchema } from "../schemas/products.schema";
⁠
export type TypeProduct = z.infer<typeof productSchema>;
```
O resultado é o seguinte tipo:
```ts
type TypeProduct = {
    id: number;
    name: string;
    price: number;
}
```
Esquemas derivados também são capazes de produzir tipagens da mesma forma. Confira o exemplo completo criado na videoaula:
```ts
import { z } from "zod";

import { createProductBodySchema, editProductBodySchema, productSchema } from "../schemas/products.schema";

export type TypeProduct = z.infer<typeof productSchema>;

export type TypeCreateProductBody = z.infer<typeof createProductBodySchema>;

export type TypeEditProductBody = z.infer<typeof editProductBodySchema>;
```
Com isso, é possível substituir as interfaces escritas manualmente pelos tipos fornecidos pelo Zod.

## Conclusão

Nesta aula, aprendemos como produzir tipos por meio de nossos esquemas com o método "infer". Aplique os conhecimentos adquiridos em seus projetos e entregas para assimilar ainda mais. Bons estudos!

