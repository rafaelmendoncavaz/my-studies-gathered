# 📘 Aula - O Que são Props?

## Introdução

Focamos nas últimas aulas em criar componentes, importá-los, exportá-los e organizá-los de forma escalável em pasta com base em referências de arquitetura. Porém, para que haja dinamismo entre os componentes e a escalabilidade se concretize de fato, precisamos conhecer um recurso essencial presente nos componentes: as props.


## O que são props?

Props são uma forma de passar dados e funções de um componente pai para um componente filho no React. As props são passadas como atributos para o componente filho e podem ser acessadas através do objeto props do componente.

São muito semelhantes aos parâmetros de uma função, só que com uma sintaxe bem própria do JSX. Confira o comparativo abaixo:⁠

__Função JavaScript com parâmetros:__

```javascript
    function person(name, surname, age){
    console.log(name, surname, age);
    }
    ⁠
    person("Alex", "Conder", 32);
```

__Função componente react com props:__

```javascript
    const PersonCard = ({name, surname, age}) => {
    return (
        <div>
        <span>
            <p>Olá, {name} {surname}</p>
            <p>Sua idade é {age} anos.</p>
        </span>
        </div>
    )
    } 

    export default PersonCard;
```

__Na importação:__

```javascript
<PersonCard name="Alex" surname="Conder" age={32} />
```

Veja que falando de funções ou componentes podemos ter um comportamento variado a cada execução graças aos parametros/props.

## Desestruturação

É importante prestar atenção a um detalhe mecânico relevante: observe que as props do componente exemplificado estão envoltas em {} - este procedimento é chamado de desestruturação. Isso é feito porque, na mecânica do React, não é criado um parâmetro individual para cada prop, mas sim um único parâmetro que condensa todas as props em um objeto.

A desestruturação não é obrigatória, mas é altamente recomendada, pois torna a sintaxe mais enxuta e a leitura das props mais intuitiva.

Exemplo sem desestruturação e suas <u>desvantagens:</u>

```javascript
    const PersonCard = (props) => {
        return (
            <div>
            <span>
                <p>Olá, {props.name} {props.surname}</p>
                <p>Sua idade é {props.age} anos.</p>
            </span>
            </div>
        )
    } 

export default PersonCard;  
```

Veja que fica subjetivo as props recebidas, além do props. ficar se repetindo a cada chamada de prop. Por isso, prefira utilizar a desestruturação.

## Reforçando

Com esse recurso, poderíamos aproveitar o componente fragmento Input criado nas aulas anteriores e torná-lo dinâmico:

```jsx
    const Input = ({id, type, label}) => {
    ⁠  return(
    ⁠    <div>
    ⁠      <label htmlFor={id}>{label}</label>
    ⁠      <input type={type} id={id} name={id} />
        </div>
    )
    }⁠
```

```jsx
<Input id="name" type="text" label="Nome"  />⁠
<Input id="email" type="email" label="E-mail"  />
<Input id="password" type="password" label="Senha"  />
```

Dessa forma, com apenas um componente Input, seria possível contemplar uma ampla variedade de possibilidades e variações.

Também vale ressaltar que as props não se limitam apenas às possibilidades de renderização dentro do JSX dos componentes e podem ser utilizadas em funções lógicas também.⁠

```jsx
    const PersonCard = ({name, surname, age}) => {
        const isOlder = () => {
            if(age > 30){
            console.log("A idade é superior a 30 anos.");
            } else {
            console.log("A idade é menor que 30 anos.");
            }
        }⁠

        return (
            <div>
            <span>
                <p>Olá, {name} {surname}</p>
                <p>Sua idade é {age} anos.</p>
            </span>
            </div>
        )
    } 

    export default PersonCard;  
```

Exploraremos mais possibilidades em aulas futuras e também nas entregas que vem pela frente.

## Comparando props com elementos HTML

Uma abordagem para entender props e componentização é imaginar que estamos criando as nossas próprias HTML, se um componente for a tag a qual estamos criando, as props nada mais são do que atributos que nos permitem criar variações de comportamento.

Por exemplo, na tag img ao, alterarmos o atributo src conseguimos alterar a imagem sendo exibida e alterarmos alt conseguimos fornecer diferentes textos alternativos.

Olhando para o componente Input apresentado lá em cima temos 3 props:⁠

    - id: que alterar o identificador juntamente com o name da tag input inserida dentro do componente
    - type: altera o tipo de input presente no componente⁠
    - label: altera o texto rótulo dentro da tag label

Podemos perceber tanto na img quanto no componente Input o objetivo de tornar o uso variável e escalável.

## Finalização

As props deixam nossos componentes muito mais versáteis e escaláveis, além de serem essenciais para o funcionamento do React. Aprendemos o essencial sobre elas nessa aula e continuaremos a evoluir neste assunto nas aulas seguintes.