# 📘 Aula - Fragment

## Introdução

Uma das características que diferem o JSX do HTML é que, em um retorno ou arquivo de JSX é possível ter somente uma única tag principal.

Por isso, isso pode nos levar acreditar que obrigatoriamente todo componente precisará ter somente um elemento principal, o que não é verdade, porque, para compensar essa limitação existe recurso chamado fragment, que aprenderemos no decorrer dessa aula. 
Fragment

O Fragment é essencialmente uma tag "invisível" presente no JSX, que não resulta em nenhuma renderização no DOM. É utilizado quando desejamos que um componente ou retorno tenha mais de uma tag principal.

Confira o exemplo abaixo:

```jsx
    export const Example = () => {
    return (
        <>
            <header>Header</header>
            <div>
                <p>Conteúdo</p>
            </div>
            <footer>Footer</footer>
        </>
    );
    };
```

Neste exemplo, temos três tags principais (header, div e footer) envolvidas por um fragment.

## Alternativa sintática

O fragment na grande maioria das aplicações é representando de forma semelhante ao exemplo acima. Porem, é possível encontrar usos de uma sintaxe mais robusta.

Confira o exemplo abaixo: 

```jsx
    import { Fragment } from "react";

    export const Example = () => {
    return (
        <Fragment>
            <header>Header</header>
            <div>
                <p>Conteúdo</p>
            </div>
            <footer>Footer</footer>
        <Fragment/>
    );
    };
```
No exemplo acima, o Fragment do React é importado e é renderizado de maneira muito semelhante a um componente. Apesar da sintaxe ser mais robusta, o resultado do funcionamento será o mesmo do formato apresentado anteriormente.

## Conclusão

Nesta aula, aprendemos sobre o fragment, o que nos permitiu perceber que, apesar da limitação sintática em nossos componentes, podemos ter quantas tags principais forem necessárias. Vamos explorar um pouco mais desse conceito nas atividades.
