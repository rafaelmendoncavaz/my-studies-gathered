# 📘 Aula - SASS: Instalação e Utilização Básica

## Introdução

SASS é um pré-processador de CSS extremamente utilizado no mercado.

Ele conta com todos os recursos de CSS existentes. E, além disso, oferece recursos próprios para tornar nossas estilizações mais fáceis e escaláveis.

## Instalação

O SASS pode ser utilizado em diversos frameworks e até mesmo em projetos Vanilla.

Para utilizá-lo em projetos React, basta instalá-lo como uma dependência, executando o seguinte comando na pasta raiz do projeto:

```bash
$ npm install sass
```

### Não esqueça de verificar o package.json para garantir que a biblioteca foi instalada de forma correta.

## Uso

Com a instalação devidamente realizada, utilizar o SASS é muito simples. Criaremos novos arquivos de estilo de forma semelhante a como fazemos em CSS puro, com a diferença que a terminação do arquivo será: .scss ao invés de .css.

Confira o exemplo abaixo:

style.scss
```scss
.exampleList{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li{
       border: 1px solid;
       padding: 2rem;
       background: white; 
    }
}
```

## CSS Modules

O SASS também é compatível com o recurso de modules que aprendemos anteriormente, funcionando da mesma forma. Arquivos com terminação .module.scss

Confira o exemplo abaixo:

style.module.scss

```scss
.header{
    padding: 1rem;
    background: black;

    nav{
        ul{
            display: flex;
            gap: 1rem;
            list-style: none;

            li{
                border-left: 3px solid;
                padding: 1rem;
                color: white;
            }
        }
    }
}
```

### Component
```jsx
import styles from "./style.module.scss";

export const Example = () => {
    return(
        <header className={styles.header}>
            Header
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}
```

### Nesting

Observando os exemplos acima, é possível notar que o SASS nos permite realizar seletores dentro de outros de seletores CSS. Isso resulta é uma sintaxe mais enxuta.

Confira o comparativo abaixo:

### sass
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

### Vs.

### css

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

## Referenciando o mesmo elemento dentro do seletor

Para utilizar pseudo-seletores com nesting (:hover, :placeholder, etc.), é necessário fazer referência ao próprio elemento, para isso utilizamos o caractere &.

Confira o exemplo abaixo:

```scss
button{
   &:hover{
     filter: saturate(1.1);
   }
}
```

## Conclusão

Nesta aula aprendemos como instalar o SASS em um projeto React, percebemos sua semelhança com o CSS que conhecemos e alguns dos seus recursos mais básicos. Nas próximas aulas aprenderemos recursos mais avançados que o pré-processador disponibiliza.

# 📘 Aula - SASS: Mixing e Extend

## Introdução

Nesta aula, iremos aprender recursos avançados do SASS que ajudarão a evitar a repetição de código em estilizações mais complexas. Esses recursos são o mixin e o extend.

## Mixin

O mixin é um recurso semelhante a uma função que permite a criação de trechos de estilização com comportamentos variados, utilizando parâmetros. Confira o exemplo abaixo:

```scss
@mixin flex($gap: 2rem){
    display: flex;
    flex-direction: column;
    gap: $gap;
}
```

Neste exemplo, criamos um mixin que pode escalar as propriedades display e flex-direction, dando a possibilidade de variar o valor de gap. Podemos aplicá-lo em uma estilização da seguinte forma:

```scss
@include flex($gap: 4rem);
```

__Vale ressaltar, que o mixin pode ser reutilizado quantos vezes quisermos. Veja o exemplo trazido da documentação:__

```scss
SCSS SYNTAX
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

## Extend

O extend também é um recurso para evitar repetição de código, porém diferentemente do mixin, ele não pode variar seu comportamento via parâmetros.

Confira o exemplo abaixo:

```scss
%flex{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
```

__Observe que no extend todos os valores de propriedade são fixos.__

Para aplicarmos o extend a uma estilização, basta fazermos como o exemplo abaixo:

```scss
@extend %flex;
```

__Assim como o mixin o extend pode ser utilizado quantas vezes quisermos. Confira o exemplo trazido da documentação:__

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

## Conclusão

Nesta aula, aprendemos sobre dois recursos avançados de SASS, o mixin e o extend, caso você queira aprender ainda mais sobre está biblioteca, acesse a documentação.