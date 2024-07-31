# 💪 Atividade - Redux: Primeiro Reducer + useSelector

## Sobre a atividade

Nessa atividade iremos aprender a criar nosso primeiro reducer. Também vamos aprender sobre o hook useSelector. Esse hook nos proporciona a função de buscar os dados da Store (nossos estados globais) e selecionar o reducer especifico que queremos os dados.

Por fim, listaremos os dados em tela para selecionados em tela.

### Resultado
![](https://media.graphassets.com/kmwNVfyLRJSQxEqkbaeC)

## Mão na massa!

Crie um novo projeto react, rode o no terminal o comando 
```shell
npm create vite@latest .
```
Entre na pasta com cd atividade-primeiro-reducer e rode npm install.

Para iniciar nosso projeto, devemos instalar as dependências necessárias:
```shell
npm i redux react-redux
```

Com essas duas dependências instaladas podemos começar a criar a nossa estrutura.

## Criando a estrutura inicial de pastas

Para iniciarmos, devemos criar nossas pastas que conterão o gerenciamento de estado da nossa aplicação.

- Inicie criando a pasta store com seu index.js, dentro da src.

- Dentro da nossa pasta store, teremos a pasta modules.

- Cada módulo da nossa store, terá um reducer e suas actions. O reducer é responsável por receber os dados e trata-los, enquanto as actions são as que enviarão os dados para o reducer.

Exemplo de estruturação das pastas:

![](https://media.graphassets.com/miep8dIyRcWeg6GK04Mk)

## Primeiro Reducer

Agora vamos criar o reducer do módulo fruits.

```ts
export type State = string[]
export type Action = {
  type: string
}

export type Reducer = (initialState: State, action: Action) => State

const initialState: State = [
  "Banana",
  "Maçã",
  "Morango"
]

const fruitsReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default fruitsReducer
```
Nesse reducer, temos uma constante que é o nosso state inicial. Todo reducer é uma função que recebe dois paramêtros:

1. **State** atual (o qual definimos com o valor padrão da initialState).

2. **Action**, que será um objeto que conterá as informações para podermos alterar o state do nosso reducer.
#
Dentro do reducer temos um switch que testa o action.type (isso ficará mais claro nas próximas aulas). No caso do exemplo não alteraremos o state, mas isso vai acontecer dentro do switch, nas próximas aulas teremos exemplos com alteração do state.

## Configurando o Redux

Dentro da store, no arquivo index.js teremos uma estruturação nesse formato:

```ts
import { createStore, combineReducers, Store } from "redux"
import fruitsReducer from "./modules/fruits/reducer"

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  fruits: fruitsReducer
})

const store: Store<RootState> = createStore(reducers)

export default store
```
Com a função createStore criamos a nossa store e com combineReducers iremos criar a store baseada na fusão dos nossos reducers.

Conforme vamos criando reducers, nós adicionamos no combineReducers. Ou seja, a store é um state global que é dividido em diversos outros states.
#
A partir de agora vamos importar a store no index.js do projeto, o primeiro arquivo onde colocamos os componentes de configuração. Vamos utilizar o ```<Provider>``` do react-redux que tem o papel de compartihar a store com os componentes, ou seja, tudo que for **{children}** do ```<Provider>```, poderá acessar os dados da store.

```tsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Provider } from "react-redux"
import store from "./store/store.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
```
Terminamos a configuração da store. Só falta entender o como funciona o consumo desses dados.
#
## Consumindo os dados

O consumo de dados é feito com o useSelector. Ele tem como parâmetro o state inteiro do redux, ou seja, a store. E dentro da store, acessamos o reducer de fruits, que instanciamos logo acima. A partir disso é só mostrar os dados em tela.
```tsx
import { useSelector } from "react-redux"
import type { State } from "./store/modules/fruits/reducer"
import type { RootState } from "./store/store"

function App() {

  const fruits: State = useSelector((state: RootState) => state.fruits)

  return (
    <div>
      {
        fruits.map((fruit) => (<p key={fruit}>{fruit}</p>))
      }
    </div>
  )
}

export default App
```

# 📘 Aula - Redux: Alterando o State Global Usando As Actions com useDispatch

Na atividade passada vimos como podemos utilizar o redux para fornecer dados globais e demos os primeiros passos na criação de um projeto utilizando essa biblioteca. Porém, ainda não vimos como pode ser feito o envio de dados para a store, e será o que veremos hoje. Também criamos um arquivo dentro do nosso modulo fruits chamado actions.js. Esse será o arquivo em que escreveremos nossas ações (as funções que receberão objetos que consequentemente enviaremos para o reducer).

Certo, bora criar uma action então! No arquivo actions.js iremos fazer o seguinte:
```ts
import type { Action } from "./reducer"

export type AddFruit = (fruit: string) => Action

export const addFruit: AddFruit = (fruit) => {
  return {
    type: 'ADD_FRUIT',
    payload: fruit
  }
}
```
Note que exportamos uma função que recebe uma fruta e ela retorna um objeto. No redux, as actions são funções que recebem um ou mais paramêtros e vão retornar para a store esse objeto contendo o tipo da ação, e os parâmetros. Nos nossos reducers, iremos validar e criar condicionais para capturar esses objetos que estão vindo das nossas actions. Note também que fizemos um export, porque no futuro, teremos diversas ações dentro do actions.js.
#
Certo, bora invocar nossa ação então em um componente. Voltando para o componente que criamos na aula passada, iremos adicionar um input e um botão para adicionar uma nova fruta, e instanciar o hook useDispatch que será o responsável por receber a action que criamos como parâmetro para ter o seu funcionamento correto.
```tsx
import { useDispatch, useSelector } from "react-redux"
import type { Action, State } from "./store/modules/fruits/reducer"
import type { RootState } from "./store/store"
import { useState } from "react"
import { addFruit } from "./store/modules/fruits/actions"

function App() {
  const [fruit, setFruit] = useState<string>("")
  const dispatch = useDispatch()
  const fruits: State = useSelector((state: RootState) => state.fruits)

  const handleAddFruit: () => Action = () => dispatch(addFruit(fruit))

  return (
    <div>
      <input type="text" onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>
        Adicionar frut
      </button>
      {
        fruits.map((fruit) => (<p key={fruit}>{fruit}</p>))
      }
    </div>
  )
}

export default App
```
Agora, criamos um input e um botão, o input armazena os dados da fruta inserida no state, e o botão envia isso para a nossa store. Se clicarmos no botão agora, nada acontecerá, porque devemos tratar os dados no reducer. Então bora lá! Vamos apenas dar um console.log() na action para ver ela chegando:
```ts
const fruitsReducer: Reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_FRUIT": {
      const { payload } = action
      return [...state, payload]
    }

    default:
      return state
  }
}
```
#
No nosso console teremos uma visão assim:

![](https://media.graphassets.com/x4rEsm5lTHGvWNk2Gq7o)

Vemos diversas actions, mas essas 3 primeiras são do fluxo interno do redux, a qual não precisamos nos preocupar, o que importa é que nosso objeto está chegando no reducer e agora podemos criar um case no switch para tratar esses dados e adicionar ao state.
#
Com nosso case criado, sendo verificado através do tipo da action, podemos fazer uma lógica dentro desse case e adiciona-lo ao state. Pronto! Nossas frutas estão de forma global e podemos adicionar de qualquer lugar agora.

# 📘 Aula - Redux: Utilizando actionTypes

Ao decorrer das aulas, vimos que no ecossistema do redux, utilizamos o tipo das ações para fazer validações e determinar onde a ação atuará, apesar disso, temos um problema. O tipo da ação é sempre uma **string** e acabamos repetindo ela em diversos lugares, isso pode nos trazer problemas caso em algum dos lugares esteja escrito de forma errada, é uma ótima prática separarmos os tipos das ações em outro arquivo, com as tipagens ou schemas:

```ts
// types.ts
export enum ActionTypes {
  ADD_FRUIT = "ADD_FRUIT",
  REMOVE_FRUIT = "REMOVE_FRUIT",
  UPDATE_FRUIT = "UPDATE_FRUIT"
}
export type Action = {
  type: ActionTypes,
}
// actions
export const AddFruitAction: Action = {
  type: ActionTypes.ADD_FRUIT
}
```
A partir de agora podemos importar o tipo Actions para utilizar nos lugares onde ela será utilizada e evitamos possíveis erros de digitação centralizando tudo em um arquivo só.
#
### Observação
Lembre-se que também poderá ter um **enum** para o **payload**, assim só precisará ter uma tipagem de **Action** que recebe **ActionTypes** e **PayloadTypes**
#
## Exemplo
```ts
import enum { ActionTypes } from "./types";
const initialState = ["Banana", "Maçã", "Kiwi"];

const fruitsReducer = (state = initialState, action) => {
switch (action.type) {
  case ActionTypes.ADD_FRUIT:
    const { payload } = action;
    return [...state, payload];

  default:
    return state;
}
};

export default fruitsReducer;
```
