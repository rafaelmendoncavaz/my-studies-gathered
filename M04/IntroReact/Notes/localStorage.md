# 📘 Aula - Localstorage

## Introdução

Hoje, vamos explorar uma poderosa ferramenta que permite armazenar dados no navegador dos usuários de forma simples e eficiente. Com o localStorage, podemos criar aplicações mais interativas e personalizadas, proporcionando uma melhor experiência aos nossos usuários. 

O localStorage é uma API do JavaScript que permite que os desenvolvedores armazenem dados no navegador da web de forma persistente.

Isso significa que, mesmo após fecharmos o navegador ou reiniciarmos o computador, os dados salvos no localStorage permanecerão acessíveis.

Essa é uma característica valiosa quando precisamos armazenar configurações, preferências do usuário ou outras informações importantes.

**Vale ressaltar que o localStorage não funciona como banco de dados, por isso informações sensíveis não devem ser armazenadas no mesmo.**

No localStorage, podemos realizar o armazenamento, exclusão e leitura de dados. Confira os exemplos abaixo:

## Armazenamento
```js
 localStorage.setItem("@EXAMPLE", "Exemplo");
 ```

 ## Exclusão
 ```js
 localStorage.removeItem("@EXAMPLE");
```
### ou
```js
localStorage.clear();
```
**Obs.:** ___O localStorage oferece um método de limpeza total, mas este deve ser utilizado com muita cautela, porque, pode acabar excluindo preferências do usuário e chaves indesejadas.___

## Leitura
```js
localStorage.getItem("@EXAMPLE");
```

## Array e Objetos

O localStorage lida com o formato JSON (assim como grande parte das API), por isso, quando estamos lidando com esse tipo de dado, precisamos de métodos de conversão tanto no momento do armazenamento quanto no momento na leitura.

## Armazenamento
Utilizamos o método JSON.stringify para converter objetos e array para o formato JSON, adequado para o localStorage.
```js
const object = { id: 1, name: "Alex"};
localStorage.setItem("@EXAMPLE", JSON.stringify(object));
```

## Leitura
Na leitura, utilizando o JSON.parse para converter JSON em um formato de dado interpretável pelo Javascript.
```js
const example = localStorage.getItem("@EXAMPLE");
console.log(JSON.parse(example));
```

## Conclusão

Nesta aula, aprendemos sobre a funcionalidade do localStorage em JavaScript. Continue praticando e explorando todas as possibilidades que o localStorage oferece. Nas próximas aulas, aprenderemos como podemos utilizar esse recurso em nossas funcionalidades no React. Bons estudos!