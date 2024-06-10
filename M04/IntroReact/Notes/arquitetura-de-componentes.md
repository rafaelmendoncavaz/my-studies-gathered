# 📘 Aula - Componentes: Dicas de Arquitetura

## Arquitetura

Agora que aprendemos a criar componentes e relacioná-los, é hora de aprender a organizá-los adequadamente em nossos projetos.

Vale ressaltar que não existe um padrão exato de arquitetura exigido no React em relação às pastas. No entanto, uma boa organização de pastas e arquivos pode facilitar muito a manutenção de um projeto no futuro.

Para isso, é importante entender que podemos criar componentes com diferentes finalidades e, portanto, podemos dividi-los em grupos. Com base nisso, estamos propondo a seguinte proposta de arquitetura como referência de organização:

## Páginas

Podemos criar componentes maiores que serão responsáveis por representar nossas páginas na aplicação. Esses componentes podem ser nomeados com o sufixo ou prefixo 'Page' e podem ser agrupados em uma pasta chamada pages dentro de src.
## Estruturas

Outra possibilidade de divisão de componentes dentro dessa ideia de páginas é dividir as páginas em conjuntos de estruturas. Confira o exemplo abaixo:

![Estrutura](https://i.imgur.com/KI7LrT6.jpg)

Aqui temos uma página composta por um cabeçalho, uma seção interna e um formulário. Cada uma dessas três estruturas poderia representar um componente separado.

Vale dizer que essas estruturas podem ser componentes escaláveis, ou seja, componentes que podem ser reutilizados em outras páginas ou pontos da aplicação. Esses componentes podem ser organizados na pasta components, criando uma pasta para cada componente correspondente. Além disso, se os componentes tiverem relação entre si, podemos agrupar pastas de componentes uma dentro da outra.
⁠Exemplo: um componente ProductList que utiliza internamente um componente ProductCard, poderia apresentar a seguinte organização de pastas.⁠

ProductList: components/ProductList

⁠ProductCard: components/ProductList/ProductCard 

## Fragmentos

![Fragmentos](https://i.imgur.com/sytqNEa.jpg)

Fragmentos são as estruturas menores que compõem nosso layout. Se observarmos o exemplo acima, é possível notar que o conjunto de label e input se repete consideravelmente. Além disso, é possível supor que vários outros formulários da aplicação poderão consumir esse mesmo componente.

Essa é a característica de um fragmento: ser apenas uma parte de uma estrutura maior e ter alto potencial de escalabilidade. Podemos organizar os fragmentos na pasta components ou, caso seja desejada uma divisão de pastas ainda mais organizada, é possível criar uma pasta chamada fragments para este tipo de componente.

## :warning: AVISO!

__Observação:__ não é necessário criar um componente que tenha comportamento idêntico a uma tag HTML, tendo em vista que a tag já existe, seria algo trabalhoso e redundante.