# 📘 Aula - Styled Components

## Introdução

O Styled Components é uma biblioteca de estilização para React que une CSS e JavaScript, criando assim um CSS in JS. Essa combinação permite a criação de estilos altamente dinâmicos.

Para começar a utilizar o Styled Components, é necessário entender seus conceitos e exemplos básicos, antes de alcançar possibilidades mais avançadas.

## Instalação

Para instalar o Styled Components no seu projeto basta rodar o comando:

```bash
$ npm install styled-components
```

## Arquivos .js ao invés .css

Se tratando de um CSS-in-JS as estilizações, ao invés de ficarem em arquivos com terminação .css, serão criadas em arquivos .js.

## Proteção de conflitos

Embora a mecânica do Styled Components seja diferenciada, o resultado final é a aplicação de classes nos elementos do DOM para concretizar a estilização. Essas classes são aplicadas como hash único, assim como acontece nos CSS Modules, prevenindo que a estilização conflite com outros componentes de estilo.

## Estilização por componentes

Como o próprio nome leva a deduzir, a estilização no Styled Components acontece por meio de componentes de estilo.

Confira o exemplo abaixo:

```js
import styled from "styled-components";
⁠
export const StyledButton = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: center;

   /* ... */
`⁠
```

A sintaxe acima representa a criação de um componente de estilo:

No arquivo principal, foi importado o styled. Esse método do Styled Components permite a criação de componentes de estilo.

Em seguida, foi instanciado em uma constante já exportada, o styled, pegando como base o elemento HTML button. É importante notar que todo Styled Component precisa de um elemento HTML ou componente como base.

Dentro do template string `` é possível escrever o CSS convencional sem a necessidade de abrir a função.

Para aplicar esse estilo na interface da aplicação, ele terá que ser importado e referenciado da mesma maneira que um componente lógico do React.

Confira o exemplo abaixo:

```jsx
import { StyledButton } from "../path/example/style"

const App = () => {
  return(
⁠    <div className="App">
      <StyledButton type="button">Teste</StyledButton>
    </div>
  )
}
```

_Note que, por se basear em um elemento HTML, todos os atributos do mesmo estão disponíveis no componente de estilo._

## Seletores

Ao criarmos um componente de estilo, o elemento HTML que desejamos estilizar é selecionado dentro do corpo da estilização, dentro da template string. No entanto, essa abordagem não nos limita a criar um componente para cada elemento que desejamos estilizar. Isso porque o Styled Components, assim como o CSS, suporta o uso de seletores.

Imagine a seguinte estrutura:

```jsx
import { StyledHeader } from "../path/example/style"

const Header = () => {
  return(
⁠    <StyledHeader>
       <div className="headerContainer">
          <img src={example} alt="Exemplo" />
          <nav>
             <a href="/">Home</a>
             <a href="/">Contact</a>
          </nav>
       </div>
    </StyledHeader>
  )
}
```

Poderíamos selecionar cada elemento no interior de StyledHeader com seletores de CSS.

_Vale observar que somente elementos no interior do componente são selecionáveis._

```js
import styled from "styled-components";
⁠
export const StyledHeader = styled.header`
   .headerContainer{
      /* ... * /
   }
   
   img{
     /* ... */
   }

   nav{
    /* ... */
   }

   nav a{
    /* ... */
   }
`⁠
```

## Nesting

Além de utilizarmos seletor de forma convencional, o Styled Components suporta seletores nesting, ou seja, seleções dentro de seleção. Da seguinte maneira:

```js
⁠export const StyledHeader = styled.header`
   .headerContainer{
      /* ... * /
⁠     img{
⁠        /* O seletor equivale a .headerContainer img */
⁠     }
⁠
⁠     nav{
        /* O seletor equivale a .headerContainer nav */   ⁠
        a{
           /* O seletor equivale a .headerContainer nav a */   ⁠
        }
     }
`⁠
```

## Conclusão

Com os exemplos acima, pudemos conhecer os recursos básicos do Styled Components, avançaremos com novos recursos nas próximas aulas!

# 📘 Aula - Styled Components: Estilos Globais vs Estilos Pontuais

## Introdução

Tendo em mente que nós, como desenvolvedores, estamos sempre buscando criar o projeto mais escalável possível, é importante refletir sobre como organizamos nossas estilizações.

Para orientar essa reflexão, classificaremos as estilizações em dois tipos: estilizações globais e estilizações pontuais.

## Estilos globais

Estilos globais são, geralmente, aqueles aplicados em todo o projeto, como estilizações de reset, paleta de cores, além da estilização de fragmentos altamente repetidos, como botões, tipografia, inputs e outros.

## createGlobalStyle

Para as estilizações mais gerais, o Styled Components oferece um recurso chamado createGlobalStyle, que permite aplicar estilos em toda a aplicação, assim como um arquivo de CSS não modular faria. Confira abaixo um exemplo de estilização:

```js
import { createGlobalStyle } from "styled-components";
⁠
export const GlobalStyle = createGlobalStyle`
   *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }

   /* ... */
`⁠
```

Assim como o método styled, o createGlobalStyle também recebe uma template string.

Para aplicar a estilização na aplicação, você deve renderizar o componente GlobalStyle em App.jsx ou em main.jsx (no topo da árvore de componentes). Como no exemplo abaixo:

```jsx
⁠import { GlobalStyle } from "../path/example/global"
⁠
export const App = () => {
   return(
      <div className="App">
         <GlobalStyle />
        /* ... demais componentes */ 
      </div>
   )
}
```

## fragmentos globais

Para organizar elementos de estilo que se repetem com frequência na aplicação, podemos criar uma pasta styles dentro de src, e dentro dela criar um arquivo para cada grupo de componentes, como button.js, typography.js, entre outros. Para esses tipos de componentes, podemos utilizar o método styled apresentado na aula anterior.

## Estilos pontuais

Estilos pontuais são aqueles que são aplicados de forma individual ou pouco repetida, geralmente em páginas e estruturas de componentes mais complexos. Eles se concentram em aspectos específicos de estilo que são únicos para aquela parte da aplicação.

Assim como os estilos de componentes mais genéricos, os estilos pontuais também podem ser criados usando o recurso styled apresentado na aula anterior. Eles podem ser organizados em arquivos style.js dentro da pasta do componente que está sendo estilizado.

```md
/Component
/Component/index.jsx /* Arquivo de componente
/Component/style.js /* Arquivo de estilo
```

## Conclusão

Um bom balanceamento entre estilizações pontuais e globais podem deixar a estilização muito mais produtiva, além de resultar num código de muito mais fácil manutenção no futuro.

Por isso, sinta-se livre para experimentar o modelo aqui proposto, além de otimizá-lo e adaptá-lo ao formato mais adequado para sua aplicação.

# 📘 Aula - Styled Components: Props em Componentes de Estilo

## Props em componentes de estilo

Assim como componentes lógicos, os componentes de Styled Components suportam a utilização de props, e graças a esse recurso, podemos criar componentes visuais muito mais dinâmicos, com variações, com base na lógica do React.

Confira o exemplo sintático abaixo:

```jsx
/* Passagem de props */⁠
<StyledComponent backgroundColor="#FFF" />
```

A passagem de props nos componentes de estilo é feita da mesma forma que dos componentes lógicos.

```js
/* Recepção de props */

import styled from "styled-components";

export const StyledComponent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* ... */

  background: ${(props) => props.backgroundColor};
`⁠
```

A recepção de propriedades é diferenciada no template string, onde utilizamos ${} para abrir o bloco de código Javascript. 

Para recebermos nossas props, precisaremos de uma arrow function que recebe as props como parâmetro através de um callback (props) =>. Assim como nos componentes lógicos, podemos desestruturar as props caso desejemos.

```js
background: ${({backgroundColor}) => backgroundColor};
```

## Retorno de css + condições no estilo

A possibilidade de abertura de Javascript dentro do template string unida a recepção de props, proporciona muito dinâmismo, e nos permite, até mesmo criar estilos condicionais. Aliado a isso, podemos conhecer mais um recurso do Styled-Components, o retorno de css.

Confira o exemplo abaixo:

Jsx:
```jsx
<StyledButton componentStyle="one" />
⁠<StyledButton componentStyle="two" />
```

Style Component:

```js
export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* ... */

  ${({componentStyle}) => {
     if(componentStyle === "one"){
        return css`
           background: blue;
           border: 1px solid rgba(0,0,0,.25);
         `
     } else if (componentStyle === "two") {
        return css`
          background: red;
          box-shadow: 0 0 25px 0 rgba(0,0,0, .25);
        `
     }
  }}
`⁠
```

Aqui temos um exemplo bem claro de quando o CSS e Javascript se mesclam (característica comum em modelos avançados de Styled Components), criarmos uma condição analisando o valor da prop componentStyle e por meio do retorno de CSS criamos duas possibilidades diferentes de estilo:

-   one: com background blue e border
-   two: com background red e box-shadow

Assim como o if e else, qualquer estrutura condicional ou método é suportado no Styled Components. Isso não obriga necessariamente o uso de formatos complexos, mas proporciona a possibilidade de utilização.

## Conclusão

Para aprender ainda mais sobre o Styled Components, você pode explorar a documentação, ela é repleta de exemplos combinando Javascript e CSS, e após se acostumar com básico da bibleoteca pode ser de extrema relevância para uma compreensão mais avançada.