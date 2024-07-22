# 📘 Aula - Prop Drilling

## O problema da passagem de props: prop-drilling

Durante a nossa jornada de aprendizado do React, utilizamos frequentemente o recurso de props para realizar a passagem de variáveis e funções de um componente para outro.

Embora seja possível produzir as features que desejamos com props, à medida que nossa aplicação cresce e o número de componentes aumenta, a necessidade de passar props nível por nível se torna mais frequente. Isso pode tornar o processo mais cansativo e propenso a erros. Esse problema é conhecido na comunidade como prop-drilling.

Confira o exemplo abaixo:

```jsx
import { useState } from "react";

⁠// nível 3
const ComponentB = ({example}) => {
⁠   return(
⁠     <p>{example}</p>
   )
}⁠⁠

⁠// nível 2
const ComponentA = ({example}) => {
⁠   return(
⁠     <div>
⁠        <h2>Título 3</h1>
⁠        <ComponentB example={example} />
     </div>
   )
}⁠
⁠
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
```

Provavelmente você já fez passagens de prop muito semelhantes a essa na construção das suas aplicações, esse procedimento é funcional, no entanto, não é eficiente a longo prazo.

Sabendo disso, podemos concluir que depender exclusivamente das props não é o modelo escalável para compartilhamento de dados. Para lidarmos com o prop-drilling, aprenderemos nas próximas aulas duas opções de recurso: Context API e Composição.
