# 📘 Aula - useEffect: Introdução

## useEffect

Para entender bem o ciclo de vida de um componente React, é importante conhecer o hook useEffect. Esse hook monitora o ciclo de vida do componente em que é instanciado e pode disparar a execução de funções em diferentes momentos: na montagem, na atualização ou na desmontagem do componente.

Dado o número de responsabilidades que o hook pode ter, é necessário explicar sua sintaxe de forma segmentada, para que a compreensão seja facilitada.

```jsx
useEffect(() =>/* função callback */, []/* lista de dependências */)
```

O hook useEffect deve ser utilizado no corpo da função do componente e requer a definição de dois parâmetros:

- Uma função de retorno (callback): essa função será executada nos momentos de montagem e atualização do componente, além de ser o gatilho para a função de desmontagem.

- Uma lista de dependências: essa lista (Array) é responsável por definir quais estados e variáveis devem ser observados para que os efeitos de atualização sejam desencadeados. Caso a lista esteja vazia, os efeitos serão acionados apenas na montagem e desmontagem do componente.

Embora esses conceitos possam parecer abstratos, exemplos básicos podem ajudar a entender melhor o seu funcionamento.

## Efeito de Montagem
```jsx
 useEffect(() => {
    console.log('Montou.')
  }, []);
```
Efeitos de montagem se caracterizam pela lista de dependência vazia. Nesse cenário a função é disparada somente uma vez, quando a montagem acontece.

## Efeito de atualização
```jsx
const [counter, setCounter] = useState(0); 

useEffect(() => {
    console.log('Atualizou.')
 }, [counter])
```
Os efeitos de atualização são caracterizados pelo preenchimento da lista de dependências com variáveis e estados, e serão disparados sempre que houver uma alteração no valor de uma delas.

É importante observar que, durante a inicialização, ocorrerá uma alteração nos dados, pois o valor inicial será definido de "undefined" para o valor passado pelo desenvolvedor. Portanto, o efeito de atualização ocorrerá pela primeira vez na montagem do componente.

## Efeito de desmontagem
```jsx
useEffect(() => {
    return () => {
      console.log('Desmontagem.')
    }
 }, [])
```
Efeitos de desmontagem se caracterizam por retornar uma função dentro da função callback.

## Considerações:

O hook useEffect é responsável por diversas funcionalidades, por isso é fundamental entender a existência de cada um dos três cenários apresentados anteriormente. Nas próximas aulas, vamos contextualizar cada tipo de efeito para compreendermos melhor a sua utilização dentro de uma aplicação.


# 📘 Aula - useEffect: Efeitos de Montagem

**Obs: tenha em mente que é muito importante ter entendido sobre o ciclo de vida de componentes para prosseguir neste estudo.**

## Sintaxe

Como já foi apresentado em aulas anteriores, a sintaxe de um efeito de montagem se caracteriza pela lista de dependências vazia.

```jsx
useEffect(() => {
  /* efeito */⁠
}, []);
```
Quando temos este tipo de efeito, a função passada como primeiro parâmetro do useEffect é executada uma vez, quando o componente no qual o efeito se encontra é montado, ou seja, quando a estrutura do componente é renderizada no DOM real.

### Principais usos

Um dos usos mais frequentes do useEffect, como mencionado na própria documentação, é sincronizar um componente com um sistema externo.

Por isso, nos efeitos de montagem serão frequentes: requisições para carregamento de dados de API (focaremos nesse cenário inicialmente), conexões com WEB Socket, entre outras possibilidades de sistemas externo. 

### Consumindo uma API

Uma API se caracteriza por um sistema externo a aplicação front-end que estamos construindo, abaixo segue um exemplo 

```jsx
import { useEffect } from 'react';
⁠
const Component = () => {

   useEffect(() => {
⁠     fetch('https://urlexemplo.com')⁠
     .then((response) => response.json())
⁠     .then((response) => / comportamento desejado após a requisição */);
   }, [])⁠

⁠   return /* ... */
}
```

Para um código mais legível, poderíamos utilizar funções assíncronas da seguinte forma:

```jsx
import { useEffect } from 'react';
⁠
const Component = () => {

   useEffect(() => {
⁠     const loadData = async () => {
         const response = await fetch('https://urlexemplo.com');
⁠         const json = await response.json();
⁠        /* comportamento desejado após a requisição */
⁠     }
⁠     loadData();
   }, [])⁠

⁠   return /* ... */
}⁠
```

___Tenha em mente que efeitos tem uma ideia lógica semelhante aos eventos presentes no Javascript, no sentido que ambas apontam quando determinado comportamento deve acontecer, quando determinada função deve ser executada.___

Por isso, mesmo que os efeitos de montagem frequentemente recebam funções de requisição, eles não são essenciais para se fazer uma requisição no React, eles somente determinam quando determinada requisição deve acontecer.

## Conclusão

Nesse tópico, aprendemos sobre os usos mais comum de efeitos de montagem, para fixar bem o conteúdo, é extremamente recomendado aplicar este conteúdo nas atividades que vem à seguir.

# 📘 Aula - useEffect: Efeitos de Atualização

## Introdução

Nesta aula aprenderemos mais sobre efeitos de atualização. Efeitos que disparam a função callback cada vez que uma das dependências presente na lista é atualizada.

## Sintaxe

Como já foi apresentado em aulas anteriores, o useEffect de atualização se caracteriza por uma lista de dependências preenchida.
```jsx
useEffect(() => {
  /* efeito */
}, [dep1, dep2, dep3]);
```

## Características de funcionamento

Como já foi mencionado na introdução, um useEffect de atualização executa a função mandada como parâmetro cada vez que uma das dependências é atualizada, isso significa que um useEffect de atualização, monitora um conjunto de variáveis e dispara um "efeito colateral" a cada alteração.

Confira o seguinte exemplo:
```jsx
const App = () => {
   const [counter, setCounter] = useState(0);
⁠
⁠   useEffect(() => {⁠
      console.log("O contador alterou.");
   }, [counter])
}
```
Neste exemplo simples cada vez que counter for alterado, teremos a execução da função presente no efeito, gerando um "O contador alterou." no console a cada alteração.

**Além disso, a função também será executada uma vez a cada montagem do componente. Observe que um efeito de atualização é por consequência também um efeito de montagem.**

## Principais usos

Efeitos de atualização podem ter diversas finalidades, mas é extremamente comum encontrar funcionalidades de paginação, sincronia com o banco de dados, sincronia com o localStorage.

## Paginação

Abaixo traremos um exemplo hipotético, mas tenha em mente que APIs podem ter características distintas ou até mesmo não conter paginação. Você geralmente pode encontrar esse tipo de informação na própria documentação.

```jsx
const Component = () => {
   const [page, setPage] = useState(1);
⁠
⁠   useEffect(() => {⁠
      async loadDataFromPage(){
⁠         const response = await fetch(`https://urlexemplo.com/?page=${page}`);
         const json = await response.json();
⁠         /* comportamento desejado após a requisição */
      }
⁠      loadDataFromPage();
   }, [page])
}
```

**Nesse cenário, entendendo que há um parâmetro page na API hipotética, ocorrerá na montagem, uma requisição para https://urlexemplo.com/?page=1, e cada alteração do estado page será realizada nova requisição para a respectiva página apontada no estado.**

## Sincronia com o localStorage

Para armazenar informações não associadas a um usuário autenticado, podemos usar o localStorage. No exemplo abaixo, estamos sincronizando um estado chamado cartList, que representa a lista de itens em um carrinho de compras, com uma chave no localStorage.

```jsx
const Component = () => {
   const localCartList = localStorage.getItem("@CARTLIST");
   const [cartList, setCartList] = useState(
      localCartList ? JSON.parse(localCartList) : []
   );
⁠
⁠   useEffect(() => {⁠
      localStorage.setItem("@CARTLIST", JSON.stringfy(cartList));
   }, [cartList])
}
```

Dessa forma, ao recarregar a aplicação os dados em cartList persistirão.

Observe que, além do useEffect, é necessário inicializar o localStorage e utilizar uma regra condicional para definir o valor inicial do estado.

## Conclusão

Na aula de hoje, aprendemos mais sobre o useEffect de atualização. Para avançarmos ainda mais, é essencial praticar o conhecimento por meio das seguintes atividades. Além disso, é crucial compreender que os exemplos apresentados aqui servem como contexto para o useEffect, mas isso não implica que seu uso esteja restrito apenas aos exemplos mencionados.

