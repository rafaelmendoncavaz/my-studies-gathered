# 📘 Aula - Zustand: Utilização Básica

## Introdução

Nesta aula, criando uma lista de fruta simples, aprenderemos o básico sobre a utilização do Zustand.

## Porque Zustand?

Zustand é uma biblioteca de gerenciamento de estado que pode melhorar significativamente o desempenho de sua aplicação. Ao adotar uma abordagem mais eficiente e estruturada para gerenciar o estado da aplicação, Zustand pode reduzir a quantidade de atualizações desnecessárias e melhorar a velocidade de renderização dos componentes.
#
Além disso, como Zustand é altamente escalável, ele é capaz de lidar com aplicativos grandes e complexos de maneira mais eficiente do que outras bibliotecas de gerenciamento de estado. Isso significa que, ao utilizar Zustand, você pode obter um desempenho superior em sua aplicação, oferecendo aos seus usuários uma experiência mais rápida e fluida.

Você pode ler mais sobre o Zustand na **[documentação](https://docs.pmnd.rs/zustand/getting-started/introduction)**.

## Uso

Por se tratar de uma biblioteca, para utilizarmos na nossa aplicação o primeiro será realizar a instalação:
```shell
npm install zustand
```
Com a instalação concluída, o primeiro passo será criar uma pasta stores que vai abrigar nossas stores, estruturas bem semelhantes a contextos, porém mais simplificadas. 

## Criando a primeira store

Dentro da pasta começaremos a criar nossas stores e arquivos separados, bem como faríamos com contextos, como orientação de nomenclatura é exigido o use como prefixo, porque, em essência, nossa store se trata de um hook.

Confira o exemplo de sintaxe:

```tsx
import { create } from "zustand"

export const useExampleStore = create((set) => ({
  estado: valorInicial,
  funcao: () => set(() => ({
    estado: novoValor
  })),
}))
```
Basicamente, utilizando o método create fornecido pelo Zustand devemos passar uma função como parâmetro, uma função callback que recebe o parâmetro set (método que será responsável pela alteração do estado). 
#

Na função callback presente no método create, devemos retornar um objeto que vai abrigar nossos estados, bem como as nossas funções.

Confira o exemplo abaixo:
```tsx
export const useFruitStore = create((set) => ({
  fruitList: [],
  addFruit: (newFruit) => set(({ fruitList }) => {
    const newFruitList = [...fruitList, newFruit]
    return { fruitList: newFruitList }
  }),
  removeFruit: (fruitId) => set(({ fruitList }) => {
    const newFruitList = fruitList.filter(fruit => fruit.id !== fruitId)
    return { fruitList: newFruitList }
  }),
}))
```
Neste exemplo acima, temos o estado fruitList, e as funções addFruit e removeFruit, note que ambos anexos no mesmo objeto. 

Note que:

- Em fruitList foi fornecido o valor inicial de [].

- Nas funções de adição e remoção temos a execução do método set fornecido na criação, recebendo uma segunda função callback como parâmetro, da mesma forma, está sendo desestruturado o parâmetro fruitList que representa o valor atual do estado, utilizando-se do parâmetro e realizada uma regra de negócio. 

- Para concretizar a alteração é retornado um objeto com a chave fruitList recebendo o novo valor.

_Observe que uma store suporta mais de um estado, bem como mais uma actions (termo técnico para as funções de manipulação de estado presentes dentro da store), confira o exemplo abaixo:_
#
```tsx
export const useExampleStore = create((set) => ({
    stateA: [],
    stateB: null,
⁠    stateC: false, 
    /* ... */
}))
```
#
## Typescript

Para tiparmos a estrutura básica do Zustand, basta criarmos um tipo ou interface para descrever cada estado ou ação presente no objeto de criação da store.

Confira o exemplo abaixo, aplicado em useFruitStore:
```tsx
import { create } from 'zustand'

export interface IFruit {
  id: number,
  name: string,
}

interface IFruitStore {
  fruitList: IFruit[],
  addFruit: (newFruit: IFruit) => void,
  removeFruit: (fruitId: number) => void
}
                                    // tipagem //
export const useFruitStore = create<IFruitStore>((set) => ({
  fruitList: [],
  addFruit: (newFruit) => set(({ fruitList }) => {
    const newFruitList = [...fruitList, newFruit]
    return { fruitList: newFruitList }
  }),
  removeFruit: (fruitId) => set(({ fruitList }) => {
    const newFruitList = fruitList.filter(fruit => fruit.id !== fruitId)
    return { fruitList: newFruitList }
  }),
}))
```
Vale adicionar, que os tipos estabelecidos na store, assim como acontece com Context, serão propagados nas importações pelos componentes na aplicação.

## Importando estados e ações nos componentes React

Com a store criada e devidamente tipada podemos importar estados e ações nos nossos componentes através do hook retornado pelo método de criação do Zustand, muito semelhante à ideia do useContext na ContextAPI.
```tsx
const store = useExampleStore((store) => store);
```
Com essa estrutura será retornado um objeto contendo todos os estados e ações presentes na store, podemos desestruturar somente o necessário para aquele respectivo componente.

Confira o exemplo abaixo:
```tsx
const state = useFruitStore((store) => store.state);
// ou
const { state } = useFruitStore((store) => store);
```
## Aplicações do conceito na fruitList:
```tsx
import { FruitCard } from './components/FruitCard/FruitCard'
import { useFruitStore } from './stores/FruitStore'

function App() {
  const {
    fruitList,
    addFruit,
  } = useFruitStore(({ fruitList, addFruit }) => ({ fruitList, addFruit}))

  return (
    <div className="App">
      <button onCLick={() => addFruit({ id: 1, name: 'Morango'})}>
        Adicionar Morango
      </button>
      <button onCLick={() => addFruit({ id: 2, name: 'Banana'})}>
        Adicionar Banana
      </button>
      {
        fruitList.map(fruit => (
          <FruitCard key={fruit.id} fruit={fruit} />
        ))
      }
    </div>
  )
}

export default App
```
### FruitCard
```tsx
import { IFruit, useFruitStore } from "../../stores/useFruitStore";

interface IFruitCardProps {
   fruit: IFruit;
}

export function FruitCard({ fruit }: IFruitCardProps) {
   const removeFruit = useFruitStore((store) => store.removeFruit);

   return (
      <li>
         <h3>
          {fruit.name}
        </h3>
         <button onClick={() => removeFruit(fruit.id)}>
          Excluir
         </button>
      </li>
   );
};
```
## Conclusão

Nesta aula, aprendemos o básico sobre Zustand, configurando a nossa primeira store e percebendo as semelhanças e diferenças em relação à ContextAPI. Nas próximas aulas, exploraremos exemplos mais avançados.

