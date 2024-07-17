# 📘 Aula - Axios: Introdução

## Introdução

O axios é uma biblioteca que existe para auxiliar na execução de requisições HTTP (em termos técnicos um promise-based HTTP Client) 

Uma excelente alternativa a fetchAPI, nativa do Javascript, é compatível com diversos frameworks, inclusive o React que estamos aprendendo.

## Axios vs Fetch

Comparando o axios com a fetchAPI, podemos notar rapidamente algumas diferenças:

- Não é necessário a conversão da resposta para JSON no axios (o próprio método já realiza essa conversão internamente);

- O axios oferece configurações globais, um modelo mais escalável e de fácil manutenção;

- O objeto de resposta do axios é mais completo, tanto em requisições de sucesso, quanto em requisições de erro;

- A resposta produzida pelo back-end ficará dentro do data (no objeto de resposta);

## Instalando

Para utilizar o axios no seu projeto React, o primeiro passo é realizar a instalação rodando o comando abaixo:
```bash
$ npm install axios
```
**Certifique-se que você está rodando este comando na pasta onde o arquivo package.json se encontra (este arquivo é responsável por gerenciar as dependências do seu projeto).**

## Configuração global do axios

A configuração global do axios não é procedimento obrigatório para o funcionamento da biblioteca, mas, é extremamente útil e pode facilitar de forma considerável a manutenção do projeto no futuro, por isso, é estritamente recomendada.

Para realizar essa configuração, podemos criar, dentro da pasta src, uma pasta chamada services e um arquivo chamado arquivo api.js (estes nomes não são obrigatórios, mas recomendações de arquitetura).

```js
import axios from "axios";

export const api = axios.create({
    baseURL: "https://fruit-fake-api.onrender.com/",
    timeout: 8000,
})
```

Dentro do arquivo api.js, começamos importando o axios, em seguida exportamos e instanciamos numa constante o método create, que nos permite configurar:

- baseURL: a URL base da api a ser utilizada (isso evita a repetição da URL base em cada requisição e facilita a manutenção)

- timeout: o máximo de espera para o procedimento de requisição (o valor é representado por milisegundos, ou seja, 1000 milisegundos são iguais a um segundo)

Há também outras configurações permitidas pelo método create que podem ser encontradas na seguinte **[documentação](https://axios-http.com/docs/instance)**.

## Requisições de GET

Para realizar requisições neste modelo apresentado acima, será necessário importar a api exportada no arquivo de configuração, é a partir dela que os métodos de requisição poderão ser executados (get, post, put, patch, delete e etc)

Confira o exemplo abaixo: 

```jsx
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
   const [fruitList, setFruitList] = useState([]);

   useEffect(() => {
      const getFruits = async () => {
         const { data } = await api.get("/fruits");         
         setFruitList(data);
      }
      loadData();
   }, [])

   return (
      <div className="App">
         <ul>
            {fruitList.map(fruit => (
               <li key={fruit.id}>
                  {fruit.name}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default App;
```

Neste caso, aproveitamos a mesma API de aulas anteriores (Fruit Fake API) para realizarmos uma requisição com, axios.

O useEffect foi utilizado para que esse evento seja executado na montagem da aplicação, e o modelo utilizado foi o async await. 

Foi também criado um estado para receber a resposta da requisição, (do corpo de resposta, somente os results neste exemplo).

É válido mencionar que o Axios traz informações mais completas no corpo das requisições, incluindo detalhes sobre configuração (config) e cabeçalhos (headers), entre outros elementos. Isso permite condensar a resposta convencional do Axios em uma única chave denominada data.

![](https://media.graphassets.com/resize=width:792,height:274/IQOULhsUT4eY8JW4Cd2I)

## Conclusão

Nesta aula aprendemos o essencial sobre o axios, com isso, vale muito a pena você aderir o uso biblioteca em seus projetos. Aprendemos exemplos um pouco mais avançados nas próximas aulas.

# 📘 Aula - Lidando com Parâmetros no Axios

## Introdução

O axios, assim como fetch, suporta parâmetros diretos na URL, mas, ele oferece uma forma mais adequada de lidar com isso:

```js
const response = await api.get("/fruits", {
   params: {
      category: "vermelha",
   }
});
```

Podemos abrir o objeto de configuração do axios, passado como segundo parâmetro do método get (neste caso), e declaramos nossos parâmetros em formato de objeto.

Este formato pode deixar a declaração muito mais organizada e amigável a comportamentos dinâmicos. 

## Exemplificando

Para evoluirmos ainda mais na utilização de parâmetros, na vídeo aula, criamos um filtro de categorias, com base no parâmetro category fornecido pela Fruit Fake API.

```jsx
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
   const [loading, setLoading] = useState(false);
   const [category, setCategory] = useState("");
   const [fruitList, setFruitList] = useState([]);

   useEffect(() => {
      const getFruits = async () => {
         try {
            setLoading(true);
            const { data } = await api.get("fruits", {
               params: {
                  category: category !== "" ? category : undefined,
               },
            });
            setFruitList(data);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };
      getFruits();
   }, [category]);

   return (
      <div className="App">
         <ul>
            <li>
               <button onClick={() => setCategory("")}>Todos</button>
            </li>
            <li>
               <button onClick={() => setCategory("vermelha")}>Vermelhas</button>
            </li>
            <li>
               <button onClick={() => setCategory("amarela")}>Amarelas</button>
            </li>
         </ul>
         {loading ? (
            <p>Carregando...</p>
         ) : (
            <ul>
               {fruitList.map((fruit) => (
                  <li key={fruit.id}>
                     <h2>{fruit.name}</h2>
                     <p>{fruit.price}</p>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default App;
```

Unimos a ideia da utilização de parâmetros com um useEffect de atualização e com isso, colocamos reatividade a nosso parâmetro category.

O resultado foi, que cada vez que alteramos o filtro, uma nova requisição é gerada, com base no novo filtro.

## A importância de um entendimento completo da API

Vale dizer que, é importante analisar cada rota da api que será utilizada na sua aplicação, entendendo corretamente:

- O que o corpo da requisição pede (esse corpo é necessário)?

- A rota pode receber parâmetros e parâmetros de busca (searchParams)? Quais?

- O que a resposta de sucesso retorna?

- O que as respostas de erros retornam?

- Como posso utilizar esses dados na minha aplicação?

Faça essas perguntas antes de realizar requisições, isso será fundamental para que, no futuro, você consiga utilizar qualquer API com facilidade.