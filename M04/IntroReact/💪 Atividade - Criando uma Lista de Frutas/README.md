# 💪 Atividade - Criando uma Lista de Frutas

## Sobre a atividade

Nesta atividade criaremos uma lista de frutas com alguns comportamentos dinâmicos.

## Passo a passo:

- Em um projeto de React criado com Vite, crie um estado com useState e associe como valor inicial a lista de dados abaixo:

```js
[
    {
        name: "Morango",
        price: 15,
        category: "Frutas",
    },
    {
        name: "Uva",
        price: 23,
        category: "Frutas",
    },
    {
        name: "Banana",
        price: 23,
        category: "Frutas",
    },
    {
        name: "Beterraba",
        price: 5,
        category: "Legumes",
    },
];
 ```

- Utilizando o método reduce, calcule o valor total do itens presentes no estado (conforme os exemplos apresentados nas aulas anteriores)
    
- Renderize a lista frutas na interface realizando um map do estado no JSX (não esqueça da chave)
    
- Com o método filter, crie dois filtros, um para exibir os legumes e outro o método frutas.
    
- Crie uma função para adicionar uma nova fruta ou legume ao estado de frutas e associe a função a um botão através do onClick (não esqueça da arrow function para previnir loops infinitos).

### Desafio⁠

Utilize o método toLocaleString para converter os valores numéricos em moeda (R$)