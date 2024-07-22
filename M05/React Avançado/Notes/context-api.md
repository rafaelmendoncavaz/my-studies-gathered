# 📘 Aula - Context: Introdução

O Context API é um gerenciador global de compartilhamento de dados que permite que o componente pai disponibilize algumas informações para qualquer componente na árvore abaixo dele - não importa o quão profundo - sem passá-lo explicitamente por props.

Confira a comparação no diagrama abaixo:
![](https://media.graphassets.com/4Hw6lk60RvKnlt1fKrrg)

## Conclusão

Nesta aula aprendemos sobre as motivações para Context API, nas próximas aulas e traremos exemplos práticos de como esse mecanismo funciona.

# 📘 Aula - Context: Primeiro Exemplo Prático

## Utilização do Contexto

Como sugestão de arquitetura, os contextos deverão ser criados em arquivos isolados, dentro de uma pasta providers.

Para utilizarmos a Context API é necessário criarmos o que chamamos de contexto.

```jsx
import { createContext } from "react";
⁠
export const ExampleContext = createContext({});
```

O primeiro passo, é importar do React o createContext que permite a criação de um contexto e instanciar o mesmo a uma constante, conforme demonstrado acima.

Agora, para que a mecânica do contexto seja possível, é necessário criar também um componente de provider. Dessa forma:

```jsx
import { createContext } from "react";
⁠
export const ExampleContext = createContext({});

export const ExampleProvider = ({children}) => {
   return(
      <ExampleContext.Provider value={{}}>
        {children}
      </ExampleContext.Provider>
   )
}
```

Este componente precisará em envolver a aplicação na totalidade, ou um grupo de componentes que deseje consumir os dados ali criados, por isso, é necessária a prop children.

Outro detalhe importante é que o retorno de JSX do provider renderiza um componente especial retornado a partir da criação do contexto, o <Context.Provider>.

### Envolvendo a aplicação ou um trecho da aplicação com o componente Provider

Criado o componente Provider é necessário mais um passo para que o compartilhamento de dados aconteça, envolver um grupo de componentes. No exemplo embaixo, estaremos envolvendo o componente App importado no arquivo main.jsx.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExampleProvider } from "./providers/ExampleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ExampleProvider>
			<App />⁠{" "}
		</ExampleProvider>
	</React.StrictMode>,
);
```

Observe que ExampleProvider é de fato um componente, e por meio da mecânica de children está recebendo o componente App.

Concluída esta etapa, agora qualquer dado compartilhado no contexto estará disponível para qualquer componente dentro do componente App, sem necessitar de passagem de props.
Compartilhando valores por meio do Context.Provider

O componente Provider, retornado no JSX, possui uma propriedade especial chamada value, que age como um "exportador", ou seja, tudo que estiver dentro do objeto passado como valor da prop value está disponível para "importação" nos componentes envolvidos pelo provider.

Confira o exemplo abaixo:

```jsx
import { createContext } from "react";
⁠
export const ExampleContext = createContext({});

export const ExampleProvider = ({children}) => {
   const [example, setExample] = useState("");

   return(
      <ExampleContext.Provider value={{ example, setExample }}>
        {children}
      </ExampleContext.Provider>
   )
}
```

Criamos um estado e compartilhamos tanto a variável de estado quanto a função modificadora dentro de value.

Com isso, poderemos importar ambos em qualquer ponto da aplicação sem precisar passá-los, mas para isso, precisaremos envolver a aplicação (ou o trecho desejado) com o nosso ExampleProvider.

## Importando valores de contexto em outro componente:

Cumprido todos os passos apresentados acima, agora contaremos com o hook useContext para importar valores compartilhados pelo contexto. Confira o exemplo abaixo:

```jsx
import { useContext } from "react"⁠;
import { ExampleContext } from "../providers/ExampleContext";

export const ExampleComponent = () => {
   const { example, setExample } = useContext(ExampleContext);

   return /* ... */
}
```

Instanciando o useContext dentro da função componente e passando a variável de contexto como parâmetro do hook, podemos importar qualquer valor compartilhado do contexto desestruturando do retorno os valores desejados.

Dica: cuidado para não confundir o Provider com o Context, caso o uso seja invertido a mecânica não ira funcionar.

## Minimizando importações (opcional)

Para diminuir a quantidade de imports nos arquivos, podemos criar um hook dentro do nosso arquivo de contexto e exportá-lo, evitando a repetição de useContext.

Confira no exemplo abaixo:

```js
export const useExampleContext = () => {
⁠   return useContext(ExampleContext);
}
⁠
// short syntax: export const useExampleContext = useContext(ExampleContext);
```

Com isso, teríamos nossa importação simplificada nos arquivos de componente:

```jsx
import { useExampleContext } from "../providers/ExampleContext";

export const ExampleComponent = () => {
	const { example, setExample } = useExampleContext();

	return; /* ... */
};
```

## Conclusão

Nesta aula tivemos nosso primeiro exemplo de contexto aplicado, para evoluir e entender mais ainda sobre o assunto é recomendado colocar os conceitos em prática na atividades e nas entregas! Bom estudo!

# 📘 Aula - Context: Nem Tudo Fica no Contexto

A ContextAPI é um mecanismo poderoso, e que, de cara, pode encantar, por limpar de forma muito eficiente os excessos de passagens de props.

Porém, o utilizar, agora com esse recurso a disposição, é necessário entender, que: nem tudo ficará em contextos.⁠

Não é uma categorização definitiva, porém uma maneira eficaz de classificar o que se encaixa em um contexto ou não, é compreender se aquela variável, estado ou função pertence a um conjunto amplo ou a um pequeno grupo de componentes.

## Confira os exemplos abaixo:

-    Um usuário para toda aplicação - contexto

-    Um conjunto de funcionalidades de requisição para toda a cadeia de componentes - contexto

-    Um hook de formulário para um formulário de registro - componente

-    Um estado para um componente de senha - componente

**Partindo dessa linha raciocínio, vai ficar cada vez mais fácil acertar.**

## Conclusão

Nesta aula, discutimos o uso de contextos e, a seguir, vamos trabalhar com um exemplo complicado de contexto de autenticação. Isso nos ajudará a entender como essa separação entre a lógica dos componentes e a lógica de contexto realmente acontece na prática.
