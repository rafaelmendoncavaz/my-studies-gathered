# 📘 Aula - Componentes

## O que são componentes?

Os React Components são a base da construção de interfaces de usuário com React. Em termos simples, um componente do React é uma parte independente e reutilizável de uma interface de usuário que pode ser composta e combinada para criar interfaces de usuário complexas.

Se no desenvolvimento Vanilla, tínhamos um grande arquivo HTML responsável por um grande conjunto de elementos da nossa interface, com React Components, poderemos quebrar nossa estrutura em pequenos arquivos.


## O que podemos componentizar?

Um componente do React pode ser um elemento visual, como um botão ou uma imagem, ou um componente mais complexo que pode incluir vários elementos visuais e lógica de negócios. Podemos até mesmo dividir nossos componentes em hierarquia, tópico que exploraremos mais a fundo nas próximas aulas.

## Como podemos criar um componente React

Os componentes em React são escritos em JavaScript e geralmente são criados usando a sintaxe JSX do React. Confira o exemplo abaixo:

```jsx
    ⁠function Component(){
    ⁠     return <div>Algum retorno de JSX</div>
    ⁠}
```

Este exemplo representa o que chamamos de componente funcional, e consiste basicamente em uma função JavaScript que retorna um JSX.

Vale dizer que, dentro desta função componente, podemos escrever lógica de JavaScript antes do retorno. Por exemplo:

```jsx
    function Component(){
    ⁠   function example(){
    ⁠     console.log("Olá mundo");
    }
    ⁠
    return (
        ⁠<div>
    ⁠         <button onClick={example}>Olá, mundo!</button>
        </div>⁠
    )
    }
```

Como é possível observar no exemplo, todo código Javascript é suportado, e a lógica apresentada pode ser relacionada com o retorno JSX.

Além disso, vale dizer que caso o retorno de JSX seja composto (mais de uma linha), é recomendado envolver o mesmo com ().

## Orientações de nomenclatura⁠⁠

Por padrão, existe uma exigência simples ao nomear componentes: a letra inicial precisa ser sempre maíuscula. Isso é necessário por que componentes serão importados dentro de outros componentes e não podem se confundir com as tags nativas do HTML.

## ⁠Podemos utilizar arrow function?

Tanto funções normais quanto funções Javascript são válidas, tendo em vista que são alternativas sintáticas correspondentes. Poderíamos rescrever o componente acima da seguinte forma: 

```jsx
    const Component = () => {
    ⁠   const example = () => {
    ⁠     console.log("Olá mundo");
    }
    ⁠
    return (
        ⁠<div>
    ⁠         <button onClick={example}>Olá, mundo!</button>
        </div>⁠
    )
    }
```

## Conclusão

Nesta aula aprendemos o básico da sintaxe de componentes, continuaremos evoluindo no assunto nas próximas aulas.