# 📘 Aula (Extra) - Composição no React

## Composição

Uma das práticas que pode minimizar o problema do prop drilling é a composição, que consiste em passar componentes como props ou children para reduzir a profundidade da árvore de componentes da aplicação.

## Principais benefícios:

- ⁠⁠Redução moderada do prop drilling
⁠
- ⁠Melhoria de performance, reduzindo a quantidade renderizações nas atualizações de estado.
#
Confira o exemplo de uso abaixo:

Passagem de props convencional:
```jsx
import { useState } from "react";

// nível 1
const App = () => {
  ⁠   const [example, setExample] = useState();
⁠
    return(
      ⁠      <div>
⁠         <ComponentA example={example} />
      </div>
    )
}

⁠// nível 2
const ComponentA = ({example}) => {
⁠   return(
⁠     <div>
⁠        <h2>Título 3</h1>
⁠        <ComponentB example={example} />
      </div>
    )
}⁠

⁠// nível 3
const ComponentB = ({example}) => {
⁠   return(
⁠     <p>{example}</p>
   )
}⁠⁠
```

No primeiro exemplo, o estado example é passado como prop para o ComponentA e, em seguida, para o ComponentB. No entanto, ele é utilizado de fato somente no ComponentB, renderizado dentro da tag de parágrafo.
#
Quando nos deparamos com situações como esta, podemos utilizar a composição para nos ajudar.

Confira os dois exemplos abaixo:

```jsx
import { useState } from "react";
// nível 1
const App = () => {
⁠   const [example, setExample] = useState();
⁠
  return(
    <div>
      {/* Componente B passado como prop do componente A, com a Prop já inserida */}
      <ComponentA component={<ComponentB example={example}/>} />
    </div>
  )
}

// nível 2
const ComponentA = ({component}) => {
⁠   return(
⁠     <div>
⁠        <h2>Título 3</h1>
⁠        {component}
     </div>
   )
}⁠

// nível 3
const ComponentB = ({example}) => {
⁠   return(
⁠     <p>{example}</p>
   )
}⁠⁠
```
Agora, utilizando a composição, a passagem do estado example para o ComponentB acontece diretamente no primeiro nível e é passado como prop para o ComponentA, sendo renderizado em seu interior logo em seguida. Como resultado, houve a redução de um nível na árvore de componentes.

O mesmo resultado poderia ter sido alcançado utilizando a prop children, confira:
```jsx
import { useState } from "react";

// nível 1
const App = () => {
⁠   const [example, setExample] = useState();
⁠
  return(
    <div>
    <ComponentA>
      <ComponentB example={example} />
    </ComponentA>
  </div>
  )
}

⁠// nível 2
const ComponentA = ({children}) => {
⁠   return(
⁠     <div>
⁠        <h2>Título 3</h1>
⁠        {children}
     </div>
   )
}⁠

// nível 3
const ComponentB = ({example}) => {
⁠   return(
⁠     <p>{example}</p>
   )
}⁠⁠
```

## Conclusão

⁠Como vimos, uma reorganização simples em nossos componentes, pode trazer resultados poderosos no nosso código, na próxima aula, vamos ver mais uma prática para solução do prop drilling que pode se combinar com a composição.

