# 📘 Aula - Estado: Introdução

## Introdução

O estado é um dos tópicos mais importantes do desenvolvimento em React, tal como outros frameworks orientados a estado, e a forma mais fácil de esclarecer o funcionamento do estado é nos apoiarmos em um conceito já conhecido por praticamente todo programador: uma variável.

## O que é estado? E sua semelhança com uma variável

⁠O estado se assemelha a uma variável no sentido que, esse, assim como a variável é uma “caixinha” (tecnicamente um espaço na memória) capaz de armazenar qualquer tipo de dado.

No universo do Javascript estamos falando de tipos de dados como: string, number, boolean e object, assim como listas (array) de todos estes respectivos tipos.

Porém, o estado, diferente de uma variável, é uma “caixinha mágica”, que tem um “poder especial” chamado: reatividade.

## Reatividade

E afinal, o que é esta tal reatividade?

A reatividade é o “poder” de reconstruir qualquer coisa (lógica ou estrutura) que esteja associada ao respectivo estado, quando o valor do mesmo se modifica.
Reatividade no JSX

Como já vimos em aulas anteriores, o JSX nos permite misturar HTML com Javascript e proporciona ao método map (um método de loop) a capacidade de transformar listas de dados em listas de componentes HTML. Sabendo disso, observe o seguinte exemplo lógico:

```txt
ESTADO = LISTA [‘Alex’, ‘Gabriel’, ‘Wesley’, ‘Vilson’]

LOOP DE ESTADO (map)
   HTML PARA CADA ITEM: <li>{VALORDOITEM}</li>
FIM DO LOOP
```

O algoritmo acima propõe um estado armazenando uma lista com os respectivos nomes [‘Alex’, ‘Gabriel’, ‘Wesley’, ‘Vilson’], e utilizaremos o método map para criar um laço de repetição, produzindo um listItem para cada item presente e renderizando o nome.

Trazendo isso para sintaxe do React, teremos o seguinte código (não se preocupe em compreender toda a sintaxe nesse momento):

```jsx
import { useState } from "react";

function App() {
   const [nameList, setNameList] = useState(["Alex", "Gabriel", "Wesley", "Vilson"]);

   return (
      <div>
         {nameList.map((name) => <li key={name}>{name}</li>)}
      </div>
   );
}
```

Assim como com uma variável comum, ao iniciar a aplicação teríamos 4 li (listItem), com o valor de cada um dos respectivos item da lista:

<center>

![Lista](https://media.graphassets.com/resize=width:301,height:329/EQgqULSxRKqEk5JnkWn0)

</center>


__EXEMPLO:__

```txt
FUNÇÃO
   ADICIONAR AO ESTADO (NOVOITEM)
```

__No React:__

```jsx
const addName = () => {
    setNameList([...nameList, "Alysson"]);
}
```

## Reatividade vs Dom Methods

Quando estamos utilizando React, as transformações na interface acontecem por meio de reatividade, dispensando o uso de DOM Methods (Muito comuns no Javascript Vanilla).

A forma de pensar a aplicação também se modifica, se antes estávamos preocupados em manipular o que estava estruturado na tela (nosso HTML), agora estamos manipulando dados, a alteração desses dados vai produzir modificações automáticas no HTML com base nas nossas declarações.⁠

# 📘 Aula - Estado: Entendendo o Usestate

## Introdução

Agora que já entendemos o conceito de estado de forma abstraída, chegou a hora de aprendermos a criar e manipular estados dentro React.

Para essa tarefa, existe um leque de manipuladores de estado, mas como estamos no início do nosso aprendizado, focaremos no mais básico, e extremamente utilizado: useState

O manipulador de estado useState, consiste na combinação de três elementos:

- Uma variável de estado
- Uma função manipuladora de estado (que permite modificar o valor)
- Um parâmetro de valor inicial

Dessa forma, no React:

```jsx
const [estado, useManipuladorDeEstado] = useState(estadoInicial);
```

## Padrões de nomenclatura na comunidade

Nomear variáveis, funções, classes e outros elementos pode ser um grande desafio, justamente por isso, essa orientação busca nortear a nomenclatura dos elementos de estado conforme os padrões seguidos na comunidade de React e programação.

Temos como padrão de língua predominante na comunidade, o inglês.

Então, um estado que contenha uma fruta poderia ser chamado de fruit, um estado que contenha uma lista de frutas, recebe uma marca de plural, podendo receber o nome de fruits.

A função modificadora de estado, apoia a nomenclatura no nome da variável de estado, por exemplo, se temos uma variável fruit, teremos a nomenclatura setFruit, no caso de fruits, setFruits.

Visualizando o formato no React:

```jsx
const [fruit, setFruit] = useState(initialValue);
const [fruits, setFruits] = useState(initialValue);
```

Outra nomenclatura comum para listas (arrays) é simplesmente a combinação do nome do item + List. Por exemplo, __fruitList__.

## Imutabilidade de estado no React

O estado no React é imutável. Tá, mas o que significa essa imutabilidade?

Para responder essa pergunta, vamos voltar para a metáfora da caixinha: sabendo que o estado é nossa caixinha de dados mágica, essa caixinha tem um “ponto fraco”: __métodos mutáveis, ou seja, métodos que modificam a variável.__

A utilização de métodos mutáveis pode bagunçar toda a nossa caixinha e provocar comportamentos indesejados na nossa aplicação, por isso, para manipulação de estados de forma direta, utilizaremos somente métodos imutáveis, ou seja, métodos que produzem uma nova variável.

Para ajudar você a diferenciar cada um deles, segue abaixo uma lista com os principais:

## Métodos mutáveis (não adequados):

- pop()
- push()
- reverse()
- sort()
- splice()

## Métodos imutáveis (adequados):

- map()
- filter()
- find()
- some()
- reduce()
- slice()

Além dos métodos acima, __atribuições diretas__ de valores de variável também representam uma forma de manipulação de dados mutável (e não podem ser realizadas em estados).

Por exemplo:

```jsx
numberList = [1, 2, 3, 4, 5, 6, 7]
```

Por isso, a alteração de valores de um estado acontece por meio da função modificadora (set), como já foi apresentado anteriormente. 

## Spread operator

Sabendo que não podemos utilizar métodos mutáveis na manipulação de estado, o __spread operator__ pode ser de grande ajuda na manipulação de dados no React.

Este operador pode ser aplicado tanto em arrays quanto em objetos, e é capaz de espalhar os dados contidos em um novo conjunto de dados.

Está mecânica é versátil e nos dá um leque de possibilidades consideráveis, como, por exemplo, jogar todos os itens de uma lista em uma nova lista, como foi feito em exemplos já apresentados nas nossas aulas:

```jsx
const [nameList, setNameList] = useState(listArray)
setNameList([...nameList, "Alysson"]);

const [numberList, setNumberList] = useState(numbersArray)
setNumberList([...numberList, 4]);
```

Assim como, modificar objetos, adicionando ou alterando dados (modelo que será útil na medida que avançarmos no curso).

```jsx
const teacher = { name: 'Alex', budget: 8000, job: "Instrutor"};
const newTeacher = {...teacher, budget: 9000}

/* 
  newTeacher = { name: 'Alex', budget: 9000, job: "Instrutor"};   
*/
```

# 📘 Aula - Estado: Reatividade Além da Estrutura

## Introdução

Nesta aula aprenderemos mais a fundo sobre reatividade, percebendo que além de termos respostas espontâneas nas nossas estruturas quando um estado é atualizado, temos o mesmo fenômeno acontecendo nas estruturas.

## Exemplificando

### Lista de números

Por exemplo, se tivemos o seguinte estado:

```jsx
const [numberList, setNumberList] = useState([1, 2, 3]);
```

E um cálculo de total vinculado ao mesmo:

```jsx
const total = numberList.reduce((prevValue, number) => {
    return prevValue + number;
}, 0);

console.log(total)
```

Quando, atualizarmos o estado, por exemplo, adicionando um novo número a lista de números, teremos o total atualizado de forma espontânea.

```jsx
const addNumber = () => {
    setNumberList([...numberList, 4])
}

return (
    <div className="App">
        <button onClick={addNumber}>
            Adicionar número
        </button>
    </div>
)
```

## Lista de professores

Agora, exemplificando com uma lista de objetos:

```jsx
const [teacherList, setTeacherList] = useState([
   {
      name: "Alex",
      job: "Instrutor React",
      budget: 7000,
   },
]);

const addTeacher = () => {
    setTeacherList([
        ...teacherList, 
        { 
            name: "Caique", 
            job: "Instrutor Javascript", 
            budget: 7000
        }
    ])
}

return (
    <div className="App">
        <button onClick={addTeacher}>
            Adicionar professor
        </button>
    </div>
)
```

Se tivermos um filtro vinculado a este estado:

```jsx
const javascriptTeachers = teacherList.filter(teacher => teacher.job === "Instrutor Javascript");
```

Ao adicionarmos um objeto, além, da lista ser incrementada, pelo fenômeno de reatividade, a filtragem também ira considerar a nova inserção.

## Conclusão

Nesta aula exemplificamos um pouco a reatividade acontecendo nos trechos lógicos da aplicação, é muito importante entender que, qualquer vínculo com o estado gera reatividade. Para assimilar ainda melhor esse conhecimento, coloque o que foi visto em prática, nas atividades, nas entregas e até mesmo em projetos pessoais.

Boa evolução e bom estudo!
