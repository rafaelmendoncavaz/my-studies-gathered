# 📘 Aula - Introdução Ao Typescript

## Introdução

De forma direta, o Typescript é uma linguagem que oferece todos os recursos presentes no Javascript, com uma camada adicional: o sistema de tipos (types) que dá nome a linguagem.

Ou seja, de uma maneira informal: **Javascript com tipos.**

## Mas afinal, o que é essa camada de tipos, e qual sua finalidade?

Fica muito fácil responder essa pergunta com um exemplo de código:
```js
// javascript
function sum(a, b){
    return a + b;
}    
```
A função acima representa uma função de soma no Javascript, e do ponto de vista lógico, espera-se que números sejam passados nos parâmetros, afinal estamos criando uma função para realizar uma operação matemática.
#
No entanto, ao passarmos qualquer outro valor primitivo (string, array, object…), como no exemplo abaixo, nenhum erro é reportado. Embora, claramente a proposta da função tenha sido quebrada e possivelmente o funcionamento da aplicação. Perceba:
```js
// javascript
sum("Batata", 321);
```
Na execução acima, com certeza a função de soma não terá o comportamento desejado, o que, neste exemplo simplificado, pode parecer algo um tanto quanto óbvio. Porém, em aplicações mais robustas, a ausência de feedback de erro, pode induzir diversos tipos de erros, o que pode resultar em horas a mais de trabalho dos desenvolvedores, além de outros problemas.
#
Por conta disso, podemos afirmar que é para ajudar os desenvolvedores e prevenir erros que a camada de tipos demonstra sua finalidade.
## Aplicação do Typescript

A função de soma ficaria da seguinte forma em Typescript:
```ts
// typescript
function sum(a: number, b: number){
    return a + b;
} 
```
_Não se preocupe com a sintaxe nesse momento, embora ela seja bem intuitiva nesse exemplo, detalhes mais técnicos serão explicados nas próximas aulas._
#
Apesar da pouca mudança no código em relação ao Javascript (a parte lógica não foi alterada), estabelecendo os valores de a e b, o editor de código reportará um erro ao tentar executar a função com outros valores primitivos.

![](https://media.graphassets.com/cb5A8gYXSW2eMOw2h4xw)

Além de um feedback sobre o tipo de parâmetro exigido na instância da própria função:

![](https://media.graphassets.com/RAllfJ5TT8uIU2FnYMhR)

Estes foram alguns exemplos que esclarecem o potencial do Typescript em prol dos desenvolvedores. Evoluiremos mais sobre o assunto, nas próximas aulas!

# 📘 Aula - Tipos Básicos (Primitivos)

## Introdução

Os tipos básicos que o Typescript oferece são os referentes aos valores padrões do Javascript, são eles:

- String: para tipar valores de string;

- Number: para tipar valores núméricos, tanto inteiros (1) quanto flutuantes (1.21);

- Boolean: para tipar valores booleanos (true e false).
## Inferência

Nem todo tipo no Typescript precisa ser apontado no código, porque existe uma "inteligência artificial" que podemos chamar de inferência. Esta inteligência tenta sugerir um tipo a uma variável com base na lógica apresentada.

Confira a seguir o exemplo abaixo:

![](https://media.graphassets.com/930XsgebSMu87bZOWCPA)

Ao atribuirmos uma string como valor da let exemplo, é automaticamente inferido o tipo string para variável.
#
Outro exemplo de inferência pode ser visto na função de soma criada na aula anterior:

![](https://media.graphassets.com/oRmNrRzpQde5tC0hIOtn)

Ao apontarmos os tipos do parâmetro a e b como number, é automaticamente inferido ao retorno da função um valor numérico (number).

# 📘 Aula - Tipando Arrays

A tipagem de arrays é muito simples, e se baseia nos valores que determinada lista contém ou deverá receber futuramente. Confira o exemplo abaixo:
```ts
let fruitList: string[] = ["Batata", "Uva", "Maçã"];
``` 
O string representa um tipo de valor que a lista deverá conter e os [] representam a marcação daquela tipagem como lista.

## Valores esperados

Além disso, se tratando de listas (e também strings, números e objetos como veremos mais para frente), podemos definir um valor esperado, o que, neste cenário, pode ser muito eficiente para tipagem de uma lista vazia. Confira o exemplo:
```ts
let fruitList = [] as string[]; 
```

# 📘 Aula - Criando Tipos

## Introdução

Mais do que usar os tipos pré-definidos do Typescript ou se restringir ao uso de interfaces, podemos também criar nossos próprios tipos, o que engloba desde tipagem de variáveis até o comportamento completo de funções.

Por exemplo, o Union type abaixo poderia ser convertido em um tipo:
```ts
// De
let foods: "pure de batata" | "macarrão"  | "risoto" = "risoto";
// para
type Foods = "pure de batata" | "macarrão"  | "risoto";
 
let foods: Foods = "risoto";
```
Neste formato, tipos complexos podem se tornar muito mais escaláveis.

# 📘 Aula - Interfaces

Interface é um recurso extremamente utilizado no Typescript e existe com a finalidade de estabelecer tipos a objetos de forma completa.

Confira o exemplo abaixo:
```ts
interface IPerson{
    name: string;
    age: number;
}
         
const person: IPerson = {
    name: 'Alex',
    age: 32,
}     
```

## Relacionando Interfaces

Além disso, é possível relacionar interfaces entre si (quando existem objetos dentro de objetos), veja:
```ts
interface IPet{
    type: string;
    name: string;
}
         
interface IPerson{
    name: string;
    age: number;
    pet: iPet;
}
         
const person: IPerson = {
    name: 'Alex',
    age: 32,
    pet: {
        type: "Cachorro",
        name: "Luz"
    }
}  
```
Foram relacionadas as interfaces IPet e IPerson, por isso, o valor de pet presente em IPerson, precisa corresponder à interface IPet.

## Valores Opcionais

O Typescript permite tiparmos determinado valor como opcional, o que pode ser muito útil em interfaces ou tipagens de função. Utilizando o mesmo exemplo, veja como ficaria o cenário onde temos o pet como opcional.

```ts
interface IPet{
    type: string;
    name: string;
}
         
interface IPerson{
    name: string;
    age: number;
    pet?: iPet;
}
         
const personA: IPerson = {
    name: 'Alex',
    age: 32,
    pet: {
        type: "Cachorro",
        name: "Luz"
    }
}
         
const personB: IPerson = {
    name: 'Alex',
    age: 32,
}
```
Nota que usamos ? para definir que pet é opcional.

# 📘 Aula - Union Type

Não necessariamente uma variável, parâmetro ou retorno de função precisa estar restrito a um único tipo. Por isso, existe no Typescript um recurso chamado de Union Type, que funciona de forma muito semelhante ao operador lógico OR da programação

Confira o exemplo abaixo:
```ts
let age: string | number = 12;
age = "12";        
```
este exemplo, a variável age permite tanto valores do tipo string, quanto do tipo number.

Em um paralelo como operador lógico string OR number.

## Typeof

Entendendo essa possibilidade de tipagem múltipla, podemos também, fazer verificações de tipos com o typeof e produzir tratativas diferentes dentro da nossa lógica. Observe:
```ts
function sum (a: string | number, b: string | number){
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    } else {
        return Number(a) + Number(b);
    }
}     
```
Com a combinação do Union Type com o Typeof, recebemos em a e b, tanto number quanto string e temos uma trativa diferente para cada cenário.

# 📘 Aula - Typescript Generics

Os generics se assemelham muito a ideia de parâmetros de função, presente no Javascript, com eles é possível criar tipos e interfaces que podem receber outros tipos ou interfaces como parâmetros.

O conceito pode parecer um tanto quanto complexo, por isso, confira o exemplo abaixo:
```ts
interface iOwner<I>{
    name: string
    age: number,
    state: I;
}
         
interface iApartament{
    rooms: number;
    location: string;
}
         
interface iHouse{
    floors: number;
    garden: boolean;
    rooms: number;
    location: string;
}
         
const apartamentOwner: iOwner<iApartament> = {
    name: 'Alex',
    age: 32,
    state: {
        rooms: 3,
        location: 'Rua Samué'
    }
}
         
const houseOwner: iOwner<iHouse> = {
    name: 'Alex',
    age: 32,
    state: {
        floors: 2,
        garden: true,
        rooms: 3,
        location: 'Rua Samué'
    }
}
```
Criamos a interface iOwner que pode receber outra interface para descrever o state, demonstramos dois exemplos, um com a interface iApartament e outra com a iHouse.

Generics são úteis para tipagem mais complexas, e serão muito presentes em tipos pré-definidos no React, e outras diversas bibleotecas.

# 📘 Aula - Typescript no React: Instalação

Para utilizarmos TypeScript no React, podemos seguir de forma básica por dois caminhos:

- Criar um projeto do zero com TypeScript;
- Adicionar TypeScript a um projeto existente.
## Criação do Zero
### Vite
```shell
npm create vite@latest . --template react-ts
```
Você também pode rodar o comando sem apontar o template e selecionar o mesmo pelo menu.
#
## Adicionando Typescript a um projeto existente

Para adicionar TypeScript a um projeto existente é necessário, primeiramente, adicionar algumas dependências ao projeto:
```shell
npm install typescript @types/react @types/react-dom -D
```
Além disso, é necessário renomear os arquivos de componente de jsx para tsx e de js para ts.
#
Feito isso, o próximo passo será criar uma dupla de arquivos chamados tsconfig.json, tsconfig.node.json na pasta do projeto, segue a configuração padrão presente no template de cada um deles:
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
```json
// tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```
Concluídos os procedimentos o Typescript já estará instalado em seu projeto, mas para evitar possíveis erros de tipagem nos arquivos de base do React, também é necessário estabelecer um tipo ao seletor root no arquivo index, conforme exemplo abaixo:
```tsx
// main.tsx
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
O getElementById em createRoot precisa estar tipado as HTMLElement.

Também será necessário criar dentro de src um novo arquivo: vite-env.d.ts com o conteúdo abaixo:
```ts
/// <reference types="vite/client" />
```
Completando todos os passos, basta utilizar o TypeScript e criar os tipos necessários com base na lógica do projeto. 