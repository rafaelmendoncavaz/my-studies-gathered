# 📘 Aula - Condições no JSX com Ternário

## Introdução

No JSX, temos a capacidade de combinar JavaScript com HTML. No entanto, como mencionado em aulas anteriores, encontramos algumas limitações, como a impossibilidade de usar estruturas condicionais como if/else. Apesar dessa restrição, podemos contornar essa limitação no JSX através do uso do operador ternário, que aprenderemos nesta aula.

## O ternário

O ternário é um formato de condição existente no Javascript que consiste na seguinte estrutura:

```js
condicao ? resposta verdadeira : resposta
```

__Observe que, em questão de funcionamento, o ternário é muito semelhante ao if/else__

```js
if(condicao){
⁠  resposta verdadeira
} else {
  resposta falsa
}
```

Com este recurso a nossa disposição, podemos criar condições em diferentes cenários.

## Renderização Condicional

Um uso extremamente comum do ternário é condicionar a renderização de estruturas no JSX.

Confira o exemplo abaixo:

```jsx
function App() { 
  const isActive = true;

  return (
    <div className="App">
      {isActive ? <p>Estou ativo</p> : <p>Estou inativo</p>};
    </div>
  )
}
```

Estamos utilizando a variável isActive como condição, e se ela for verdadeira, a interface exibirá "Estou ativo"; caso contrário, exibirá "Estou inativo". É importante ressaltar que uma renderização condicional não necessariamente precisa envolver elementos HTML.

Veja o exemplo a seguir:

```jsx
function App() { 
  const [isActive, setIsActive] = useState(false);
  // condição ? resposta verdadeira : resposta falsa (if/else)

  return (
    <div className="App">
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Desativar" : "Ativar"}
      </button>
⁠
      {isActive ? <p>Estou ativo</p> : <p>Estou inativo</p>};
    </div>
  )
}
```

Neste exemplo, estamos condicionando o texto no interior do botão. Passando como resposta valores em string.

## Atributos com valores condicionados

Mais do que apenas restringir-se a estruturas condicionais tradicionais, podemos utilizar o operador ternário sempre que precisarmos de uma condição no JSX. Com isso, podemos atribuir valores de atributos aos nossos elementos de forma condicional, adaptando-os de acordo com as necessidades do nosso código.

Confira mais um exemplo:

```jsx
<div className={isActive ? "active" : ""}>
   Exemplo
</div>
```

Neste exemplo, estamos condicionando a classe do elemento, o que nos permite alterar a aparência visual de um elemento com base em uma determinada lógica no JSX. Isso nos dá a flexibilidade de adaptar o estilo do elemento com base em condições específicas.

## Conclusão

Nesta aula, aprendemos como lidar com condições no JSX usando o operador ternário. Com esse conhecimento, podemos tornar nossas interfaces muito mais versáteis e interativas.

