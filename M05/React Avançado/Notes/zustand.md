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

# 📘 Aula - Zustand: Avançando com Estados, Actions e Requisições

## Introdução

Nesta aula exploraremos exemplos mais avançados de Zustand, aprendendo a lidar com múltiplos estados, actions mais complexas e requisições. Para isso utilizaremos como apoio a **[Fruit Fake API](https://github.com/josedasilva123/fruit-fake-api)**.
```json
[
    {
        "id": 1,
        "name": "Morango",
        "category": "vermelha",
        "price": 12
    },
    {
        "id": 2,
        "name": "Banana",
        "category": "amarela",
        "price": 2
    },
    {
        "id": 3,
        "name": "Amora",
        "category": "vermelha",
        "price": 5
    }
]
```
## Mão na massa

No nosso exemplo, começamos criando uma nova store seguindo os mesmos passos da aula anterior. Dentro da store, criamos três estados diferentes: loading, error e fruitData.

```tsx
export const useFruitDataStore = create((set) => ({
    loading: false,
    error: "",
    fruitData: [],
}))
```
Em seguida, realizamos as tipagens de cada um dos estados, nos baseando nos valores previstos pela documentação da API para descrever fruitData.
```tsx
interface IFruit{
    id: number;
    name: string;
    category: string;
    price: number;
}

interface IFruitDataStore{
    loading: boolean;
    error: string;
    fruitData: IFruit[];

}
```
Finalizado o modelo inicial de tipagem, começamos a trabalhar na nossa action:
```tsx
loadFruitData: async () => {
   try {
      set({ loading: true, error: "" });
      const {data} = await api.get<IFruit[]>('/fruits');
      set({ fruitData: data });
   } catch (error) {
      console.log(error);
      set({ error: "Ocorreu um erro." });
   } finally {
      set({ loading: false });
   }
}
```
Nesta action, chamada de loadFruitData, tivemos diversas manipulações de estado (ao invés de uma como nossos exemplos mais básicos) e utilizamos o set de maneira simplificada, passando somente um objeto ao invés de uma função com um objeto como retorno.
```tsx
set({ loading: true, error: "" });
```
Note que somente uma execução de set pode alterar múltiplos estado, diferente do que estamos habituados a ser com o useState.

Está action também recebeu tipagem:
```tsx
interface IFruitDataStore{
    loading: boolean;
    error: string;
    fruitData: IFruit[];
    loadFruitData: () => Promise<void>;
}
```
## ContextAPI vs Zustand
Comparando com a ContextAPI, se trouxemos a mesma ideia de features para ela, teríamos uma estrutura similar:
```tsx
// ContextAPI
import { createContext } from "react";
⁠
export const FruitDataContext = createContext({});
⁠
export const FruitDataProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
⁠  const [error, setError] = useState("");
  const [fruitData, setFruitData] = useState([]);
⁠
  const loadFruitData = async () => {
     ⁠try {
        setLoading(true); 
        setError("");   

        const {data} = await api.get('/fruits');            
        setFruitData(data);
    } catch (error) {
        console.log(error);
        setError("Ocorreu um erro."); 
    } finally {
        setLoading(false);
    }
  }⁠
⁠
  return(
⁠     <FruitDataContext.Provider value={loading, error, fruitData, loadFruitData}>
⁠        {children}
     </FruitDataContext.Provider>
  )⁠
}
```
Observe que a lógica de negócio é basicamente a mesma, porém, o Zustand oferece uma sintaxe mais enxuta, além de não depender de um Provider envolvendo a aplicação ou um trecho para funcionar. 
```tsx
// Zustand
export const useFruitDataStore = create((set) => ({
    loading: false,
    error: "",
    fruitData: [],
    loadFruitData: async () => {
        try {
            set({ loading: true, error: "" });
            const {data} = await api.get('/fruits');
            set({ fruitData: data });
        } catch (error) {
            console.log(error);
            set({ error: "Ocorreu um erro." });
        } finally {
            set({ loading: false });
        }
    }
}))
```
Podemos perceber, que além de um benefício de performance, com Zustand podemos ter códigos um pouco menos verbosos. 

## Trazendo nossos estados e actions para os componentes
Assim como na anterior, utilizaremos o hook produzido pelo método create para realizar nossas importações.

Confira o exemplo abaixo:
```tsx
import { useEffect } from "react";
import { useFruitDataStore } from "./stores/useFruitDataStore";

function App() { 
   const { loading, 
           error, 
           fruitData, 
           loadFruitData 
         } = useFruitDataStore((store) => store);

   useEffect(() => {
      loadFruitData();
   }, [])

   return (
      <div className="App">
         {loading ? <p>Carregando...</p> : (
            <ul>
               {fruitData.map(fruit => (
                  <li key={fruit.id}>
                     {fruit.name}
                  </li>
               ))}
               {error ? <p>{error}</p>: null}
            </ul>
         )}
      </div>
   );
}

export default App;
```
Observe que a aplicação no JSX seria exatamente a mesma se estivéssemos usando a ContextAPI.

## Conclusão

Com este exemplo, aprendemos a lidar com funções mais robustas utilizando Zustand, o que nos permite, seguindo essa mesma linha de raciocínio, incorporar rotinas com as quais já estamos familiarizados, como autenticação e funções de CRUD, à sintaxe da biblioteca. Agora, é hora de colocar a mão na massa e concluir as atividades propostas.

# 📘 Aula - Zustand: Comportamento Externos

## Introdução

Até o momento, pudemos notar consideráveis semelhanças entre uma store no Zustand e um contexto criado com a ContextAPI. Porém, algumas situações com o Zustand exigirão uma trativa um pouco mais específica.

## Entendendo

Por exemplo, se quiséssemos fazer um redirecionamento com React-Router-Dom dentro do contexto, bastaria instanciarmos useNavigate dentro do provider e utilizarmos livremente. 

```tsx
import { useNavigate } from "react-router-dom";
⁠
const ExampleProvider = ({children}) => {
⁠  const navigate = useNavigate();
⁠
  function example(){
⁠    navigate('/');
  }
 /* ... */
}
```
Porém, como a store não se trata de um componente, algumas situações precisarão ser tratadas do lado de fora. Para isso, comportamentos como esse poderão ser passados para nossas actions de forma específica ou genérica como parâmetro.

O mesmo exemplo acima, seria tratado de diversas formas no Zustand.
#
### Forma 1: parâmetros específicos⁠
Componente:
```tsx
import { useNavigate } from "react-router-dom";
⁠
export const Component = () => {
⁠  const navigate = useNavigate();
⁠  const example = useExampleStore(store => store.example);

  function handleExample(){
⁠     example(navigate);
  }
}
```
Store:
```tsx
export const useExampleStore = create((set) => ({
  example: (navigate) => {
⁠     navigate('/');
  }
});
```
Neste formato, note que estamos passando exatamente o que precisamos como parâmetro da action.
#
### Forma 2: parâmetros específicos⁠
Componente:
```tsx
import { useNavigate } from "react-router-dom";
⁠
export const Component = () => {
⁠  const navigate = useNavigate();
⁠  const example = useExampleStore(store => store.example);

  function handleExample(){
⁠     example(() => {
        navigate('/')⁠
     });
  }
}
```
Store:
```tsx
export const useExampleStore = create((set) => ({
  example: (callback) => {
⁠     if(callback) callback();
  }
});
```
Agora, neste formato, estamos esperando somente uma callback genérica como parâmetro de example, possibilitando um uso um pouco mais variável e versátil da nossa action, permitindo que possamos criar variações de comportamento.
#
Podemos precisar de parâmetros em outros cenários além do React-Router-Dom naturalmente, e vale reforçar que esse recurso está o tempo todo a nossa disposição de forma flexível.

Confira o exemplo apresentado na vídeo aula:

Componente:
```tsx
import { useEffect, useState } from "react";
import { useFruitDataStore } from "./stores/useFruitDataStore";

function App() { 
   const [loading, setLoading] = useState(false);
   
   const { loadFruitData, fruitData, error } = useFruitDataStore((store) => store);
   
   useEffect(() => {
      loadFruitData(setLoading, () => console.log('Executei uma função callback'));
   }, [])
   
   return (
      <div className="App">
         {loading ? <p>Carregando...</p> : (
            <ul>
               {fruitData.map(fruit => (
                  <li key={fruit.id}>
                     {fruit.name}
                  </li>
               ))}
            </ul>
         )}
         {error ? <p>{error}</p> : null}
      </div>
   );
}

export default App;
```
Store:
```tsx
export const useFruitDataStore = create<IFruitDataStore>((set) => ({
    loading: false,
    error: "",
    fruitData: [],
    loadFruitData: async (setLoading, callback) => {
        try {
            setLoading(true);
            set({ error: ""});
            const {data} = await api.get<IFruit[]>('/fruits');
            set({ fruitData: data });   
            if(callback) callback();       
        } catch (error) {
            console.log(error);
            set({ error: "Ocorreu um erro. "}); 
        } finally {
            setLoading(false);
        }
    }
}))
```
Na action loadFruitData foram criados 2 parâmetros, um para receber de forma pontual o setLoading, e callback podemos receber uma função de comportamento livre.
#
## Estados pontuais

No exemplo apresentado em vídeo, foi criado um estado pontual com o useState no componente App como um exemplo de estado. É importante ressaltar que o Zustand existe para substituir a forma como lidamos com estados e funções globais.

Entretanto, o uso do Zustand não impede o uso de outros tipos de gerenciamento de estado em situações pontuais. Portanto, mesmo com a biblioteca, o uso do useState ainda pode ser necessário em algumas situações específicas nos componentes das suas aplicações.

## Conclusão

Embora haja algumas limitações no comportamento das nossas actions em relação às funções de contexto, essas limitações podem ser contornadas através da utilização de parâmetros. Dessa forma, podemos incorporar comportamentos externos dentro das nossas actions.