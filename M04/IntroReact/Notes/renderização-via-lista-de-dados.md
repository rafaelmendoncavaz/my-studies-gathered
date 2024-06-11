# 📘 Aula - Renderizando Componentes via Lista de Dados

## Introdução

No React, além de podermos renderizar componentes com instância individual, importando e renderizando de forma direta, podemos gerar componentes por meio de laço de repetição.

## Contextualizando

Observe o seguinte exemplo:

```js
[
   {
      id: 1,
      name: "Alex",
      job: "Instrutor React",
   },
   {
      id: 2,
      name: "Gabriel",
      job: "Instrutor React e Node",
   },
   {
      id: 3,
      name: "Raphael",
      job: "Instrutor React e Django",
   },
];
```

Aqui temos um array (lista) de objetos que pode ser atribuído a uma variável, constante ou variável de estado (assunto das próximas aulas) em nosso código. Também é possível utilizá-lo diretamente, embora isso deixe nosso código um tanto quanto confuso.

```js
const employeeList = [
   {
      id: 1,
      name: "Alex",
      job: "Instrutor React",
   },
   {
      id: 2,
      name: "Gabriel",
      job: "Instrutor React e Node",
   },
   {
      id: 3,
      name: "Raphael",
      job: "Instrutor React e Django",
   },
];
```

Com a lista em nosso código, podemos utilizar o método de iteração map, que nos permite estabelecer uma função de retorno por meio de uma callback. Isso nos possibilita criar uma nova lista, convertendo uma lista de dados em uma estrutura JSX, seja ela componentizada ou não.

Confira os exemplos abaixos:

### Lista não componentizada

```jsx
const EmployeesList = () => {
  return(
    <ul>
⁠     {employeeList.map(employee => {
⁠        return (
⁠           <li>
⁠              <h3>{employee.name}</h3>
              <p>{employee.job}</p>
           </li>
        )
     })}
  </ul>
  )
}
```

Note que a função callback como parâmetro do método map, é semelhante a uma função componente, uma função que retorna um JSX. 

### Lista componentizada

```jsx
const EmployeesList = () => {
  return(
    <ul>
      {employeeList.map(employee => {
        return (
⁠         <EmployeeCard employee={employee} />
        )
      })}
    </ul>
  )
}
```

Também podemos retornar componentes no map, assim como em qualquer função componente no React. Observe que podemos aproveitar o recurso de props para enviar os valores obtidos no map para o componente renderizado.

## Short syntax para o retorno

Podemos deixar a sintaxe apresentada acima um pouco mais enxuta utilizando o que chamados de retorno implícito. Ao invés de utilizarmos a combinação { return () } é possível utilizar somente (). Confira o exemplo abaixo:

```jsx
const EmployeesList = () => {
  return(
    <ul>
  ⁠     {employeeList.map(employee => (
⁠         <li>
⁠           <h3>{employee.name}</h3>
           <p>{employee.job}</p>
         </li>
       ))}
    </ul>
  )
}

const EmployeesList = () => {
  return(
    <ul>
⁠     {employeeList.map(employee => (
⁠        <EmployeeCard employee={employee} />
     ))}
    </ul>
  )
}
```

Caso o retorno tenha somente uma linha, podemos deixar o código ainda mais simplificado:

```jsx
const EmployeesList = () => {
  return(
    <ul>
  ⁠     {employeeList.map(employee => <EmployeeCard employee={employee} /> )}
    </ul>
  )
}
```

Isso é possível, porque a própria função callback exigida pelo método map já exige um retorno.

## Chave: o atributo key

O procedimento apresentado acima exige um último passo: a atribuição de uma chave ao primeiro elemento ou componente retornado pela callback no map. Essa chave precisa ser necessariamente um valor único, ou seja, um valor sem risco de repetição nos demais itens da lista.


Confira o exemplo abaixo:

```jsx
const EmployeesList = () => {
  return(
    <ul>
  ⁠     {employeeList.map(employee => (
⁠         <li key={employee.id}>
⁠           <h3>{employee.name}</h3>
           <p>{employee.job}</p>
         </li>
       ))}
    </ul>
  )
}

const EmployeesList = () => {
  return(
    <ul>
⁠     {employeeList.map(employee => (
⁠        <EmployeeCard key={employee.id} employee={employee} />
     ))}
    </ul>
  )
}
```
Perceba que o que é relevante para a chave é o posicionamento do elemento ou componente no retorno. Fique atento também que, no caso do fragment, ele não deve ser utilizado como tag pai de um retorno no map, pois é incapaz de receber atributos (e, portanto, não será possível atribuir uma chave).

## Porque é necessário passar a chave?

Porque, ao contrário de nós, humanos, que conseguimos diferenciar facilmente os elementos de uma lista com base em seu conteúdo, o DOM virtual não consegue fazer essa diferenciação sem a passagem de uma chave. E iremos ver mais para frente sobre o processo de reconciliação e por que isso afeta o desempenho da aplicação.

## Conclusão

Nesta aula, aprendemos como utilizar o map para iterar sobre listas e retornar listas de componentes. É importante colocar esse conceito em prática para assimilá-lo, uma vez que esse formato de iteração será extremamente recorrente em suas aplicações futuras. Você pode entender ainda mais sobre isso acessando está documentação.