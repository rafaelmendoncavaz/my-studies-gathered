# 📘 Aula - Hooks no React

## Introdução

Durante este módulo, você ouvirá frequentemente o termo "hook". Mas afinal, o que é um hook? 

Para compreender seu funcionamento, o primeiro passo é entender um pouco sobre a história do React.

Antes das versões mais recentes do React, tudo era feito com base em classes do JavaScript, incluindo componentes, estados, efeitos, etc. 

Abaixo, você pode ver um exemplo de componente de classe, também conhecido como Class.Component:

```jsx
// Não se preocupe em tentar entender esta sintaxe
// Exemplo: Bem-vindo em react com componentes de classe

import React from "react";

class BemVindo extends React.Component {
  render() {
    return <h1>Seja bem vindo, {this.props.name}</h1>;
  }
}
```

Como podemos ver no exemplo acima, os componentes que utilizam classe possuem uma sintaxe extensa e complexa, o que, geralmente, dificulta a curva de aprendizado.

Neste modelo sintático, além de precisarmos entender como as regras do React funcionam, precisamos dominar a sintaxe de classe do JavaScript. Isso pode ser um obstáculo para os desenvolvedores que não têm muita experiência com programação orientada a objetos.

Outro problema presente nesse modelo é que, ao escalarmos repetidamente um componente de classe, encontramos obstáculos na reutilização de lógica e passagem de estados. Afinal, a mecânica de classe os restringe. Isso torna mais difícil a criação de componentes mais complexos e reutilizáveis.

Todos esses fatores serviram como motivação para que o time de desenvolvimento do React pensasse em novas soluções. A partir disso, surgem os hooks. Com os hooks, agora é possível gerenciar estados e efeitos de uma forma mais simples e intuitiva, sem a necessidade de escrever uma classe. 

Os hooks permitem que você compartilhe lógica entre componentes de maneira fácil e eficiente.

_Para saber mais __sobre__ Acesse este [link](https://pt-br.react.dev/learn)_

## React 16.08, uma adição importante

Diante dos motivos já mencionados anteriormente, o time do React adicionou uma importante atualização, adotando o que chamamos de componentes funcionais. 

Nesta nova modalidade de componentes, ao invés de uma classe, usaremos uma função do Javascript. Afinal, componentes sempre se assemelharam mais a funções do que classes, esta mudança é um dos grandes marcos da versão 16.08. 

Vejamos abaixo um exemplo do mesmo componente de classe, porém usando um componente funcional. 

```jsx
// Não se preocupe em tentar entender esta sintaxe
// Exemplo: Bem-vindo em react com componente de função 

const BemVindo = ({ name }) => {
  return <h1>Seja bem vindo, {name}</h1>;
};
```

Veja que temos o mesmo resultado do componente com classe, porém com uma sintaxe muito mais simplificada, isso abriu portas para funcionalidades novas.

_É importante lembrar que as classes não foram defasadas, por mais que novos projetos já não sejam criados usando classes, ainda existem muitos projetos antigos que a utilizam, e, por isso, o React garante a compatibilidade das duas funcionalidades._

## Onde entram os Hooks?

A partir do nosso componente funcional, podemos "enganchar" novas funcionalidades do react a ele e é para isso que usamos os hooks (na tradução literal, hook é um “gancho”).

São funções que usamos para conectar nosso componente com essas outras funcionalidades, e é por isso que os hooks só funcionam dentro de componentes funcionais ou dentro de outros hooks, não podemos usar um hook dentro de uma função qualquer do javascript, ou uma classe, por exemplo.

Vamos ver um exemplo do nosso componente acima usando um dos hooks básicos, o useState.

```jsx
// Não se preocupe em tentar entender esta sintaxe
// Exemplo: Contador em react com componentes de função

import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const contar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Nosso contador está em {contador}</p>
      <button onClick={contar}>Adicionar +1</button>
    </div>
  );
};

export default Contador;
```

Vamos comparar esse contador com hooks e componentes funcionais que criamos acima com um contador usando Class. Component, veja o exemplo das classes abaixo:

```jsx
// Não se preocupe em tentar entender esta sintaxe
// Exemplo: Contador em react com classes

import React from "react";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  contar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Nosso contador esta em {this.state.contador}</p>
        <button onClick={this.contar}>Adicionar +1</button>
      </div>
    );
  }
}

export default Contador;
```

Ambos os códigos fazem a mesma função, quando clicamos no botão de Adicionar +1, a função contar é chamada, ela é responsável por adicionar +1 no estado de contador.

Essa é apenas uma descrição do que os códigos escritos acima fazem, durante o curso você compreenderá exatamente como cada parte funciona de forma lógica.

Note que todo aquele trecho de código complexo no construtor do componente de classe, foi substituído por uma simples função chamada useState, dentro dos componentes funcionais.

Essa simplificação não se limita apenas em reduzir linhas de códigos, mas também em melhorar a desempenho.

Afinal, componentes de função funcionam de forma mais performática do que os de Classe, já que o time do React vem focando seus esforços em otimizar cada vez mais a nova forma de trabalhar com componentes.

## Regras dos hooks

Agora que já entendemos o que são os hooks e a motivação por trás de sua criação, precisamos apenas entender algumas regras e particularidades deles.

### Os hooks impõem duas regras principais para sua aplicação: 

- Apenas chame hooks no nível mais alto. Não chame hooks em loops, condições ou funções aninhadas.

- Apenas chame Hooks de componentes funcionais, ou dentro de hooks customizados. Não chame Hooks em funções do javascript comum.

## Particularidades do React 

Foi dito mais acima que os hooks são funções do javascript que podemos criar com a sintaxe de função básica, sendo funções podem receber parâmetros, retornar valores e manipular dados. 

Porém, devemos nos atentar a algumas particularidades dos hooks, como o uso do use, antes do seu nome. 

Isto é uma convenção do próprio React e da comunidade, para podermos identificar e separar o que é um hook (uma função que manipula funcionalidades do React) do que é uma função convencional do javascript. 

Já que como vimos nas regras, os hooks só podem ser chamados dentro de componentes de função ou dentro de outros hooks.

A convenção também vale para componentes do React, já que para diferenciarmos um componente (Uma função que pode utilizar das funcionalidades do react e retorna um JSX ou elemento nulo) de uma função convencional do javascript, o React padronizou a inicial Maiúscula, para identificar essa função como uma função componente.

Agora que você já entende o que é um componente de função, hooks e um pouco da história do react, podemos avançar para entender mais sobre os recursos do React nas próximas aulas.