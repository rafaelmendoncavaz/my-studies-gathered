# 📘 Aula (Extra) - Styled Components - Theme

## Introdução

Entendendo a ideia de contexto, vale adicionar que o Styled Components também oferece uma solução semelhante para lidar com variáveis de estilo de forma global, estamos falando do ThemeProvider. 

Assim como no contexto, é possível declarar variáveis em um arquivo de tema e elas estarão disponíveis para qualquer componente de estilo no escopo do provider.

## Uso
```js
export const theme = {
⁠   colors: {
⁠      primary: "#CECECE";
⁠      white: "#FFFFFF";
      black: "#000000";
   }
}
```
Para utilizar o ThemeProvider, é necessário criar um tema, que consiste basicamente em um objeto que condensa todas as nossas variáveis de tema. Podemos incluir uma paleta de cores, padrões de margem, padding e muito mais.

Uma vez criado o tema, podemos envolver um conjunto de componentes ou toda a aplicação para disponibilizar nossas variáveis. Confira abaixo:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "styled-components";

import App from "./App";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <App />
⁠    </ThemeProvider>  
  </React.StrictMode>,
)
```
Feito o procedimento, agora podemos utilizar nossas variáveis de tema em qualquer componente de estilo.
```js
import styled from "styled-components"
⁠
export const StyledExample = styled.div`
   background: ${
    ({ theme }) => theme.colors.primary
  };   ⁠
`
```
Com o tema disponível, podemos desestruturá-lo das nossas props e com isso aplicarmos em nossos estilos. 

## DarkMode

⁠Vale adicionar, que assim como globalStyles, podemos condicioná-lo para criar modos de cor. Confira o exemplo abaixo:

```js
export const themeLight = {
⁠   colors: {
⁠      primary: "#CECECE";
⁠      white: "#FFFFFF";
      black: "#000000";
   }
}⁠
⁠⁠
export const themeDark = {
⁠   colors: {
⁠      primary: "#CECECE";
⁠      white: "#FFFFFF";
      black: "#000000";
   }
}⁠
```
## Condicionando o tema:
```jsx
⁠import { useState } from "react";⁠
import { ContextProvider } from "styled-components";

import { themeLight, themeDark } from "./theme";

const App = () => {
   const [colorMode, setColorMode] = useState("light");⁠

⁠   return(
⁠      <ThemeProvider 
        theme={
          colorMode === "light" 
          ? themeLight 
          : themeDark 
        }
      >
⁠         /* App */
      </ThemeProvider>
   )
}
```
## Conclusão

A configuração de temas através do ThemeProvider é um mecanismo opcional, mas pode deixar nossas variáveis bem organizadas e adequadas ao modelo de CSS in JS. Você pode conferir mais exemplos de uso na documentação do **[Styled Components](https://styled-components.com/docs/advanced#theming)**.