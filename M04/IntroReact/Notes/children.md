# 📘 Aula - O Que são Children?

## Props: Children

Agora que compreendemos as propriedades de forma básica, nesta aula vamos aprender sobre uma propriedade de nome reservado com um comportamento especial: a children.

Se compararmos os componentes com elementos HTML, podemos dizer que até agora criamos componentes que se assemelham a tags fechadas.

Confira o exemplo abaixo:

```jsx
<img src="example.jpeg" alt="Exemplo" />
```

```jsx
⁠<PersonCard name="Alex" username="Conder" age={32} />
```

Observe que o PersonCard se assemelha muito à tag img no sentido de conter "atributos" de variação e não poder receber nenhuma estrutura como filho.

No entanto, as possibilidades de criação de componentes no React não se limitam apenas a componentes de tag fechada. Para reproduzir comportamentos semelhantes a sections, divs, etc., podemos utilizar a propriedade children.

Confira o exemplo abaixo:

```html
⁠<section>
   <div>
      <h2>Exemplo</h2>
   </div>
</section>
```

Não é novidade que estruturas hierárquicas são possíveis e comuns no HTML. Podemos colocar tags dentro de outras tags, estabelecendo uma relação de pai e filho.

O React permite que os componentes tenham um comportamento semelhante, usando a prop children. Para isso, é necessário desestruturar a prop juntamente com as demais.

```jsx
const Component = ({children}) => {
  return(
    <div>{children}</div>
  )
}
```

A renderização de children define o local na estrutura onde as tags serão renderizadas, e feito isso, podemos produzir o seguinte exemplo:

```jsx
<Component>
⁠   <h1>Olá mundo</h1>
⁠   <p>Aprenda React!</p>
</Component>
```


⁠Dessa forma, toda a estrutura do Component, incluindo os children, como as tags h1 e p, serão renderizados na interface. É importante destacar que, assim como no HTML, não há limitação na quantidade de tags que podem ser passadas como filhos.

Além de tags, é possível passar componentes como filhos, já que, em essência, eles também são construídos por elementos HTML.

```jsx
<Component>
⁠   <Component2/>
</Component>
```

## Contextualizando:

Para reforçar o aprendizado, vamos aproveitar um conjunto de componentes já criados anteriormente, confira:

```jsx
export const ContactPage = () => {
   return (
      <>
        <Header />
        <main>
          <ContactForm />
        </main>
        <Footer />
      </>
   );
};
```

Criamos anteriormente, componentes escaláveis de Header e Footer, porém com children, poderíamos tornar essa estrutura ainda mais escalável criando um componente que servisse como template para criação de páginas do nosso site.

```jsx
export const PagesTemplate = ({ children }) => {
   return (
     <>
       <Header />
       <main>
⁠         {children}
       </main>
       <Footer />
     </>
   )
}
```

Aplicando este componente na página, teríamos o seguinte resultado:

```jsx
export const ContactPage = () => {
   return (
      <PagesTemplate>  
         <ContactForm /> 
      </PagesTemplate>
   );
};⁠
```

Com isso, evitamos repetição, e tornamos a estrutura de código arquivo a arquivo ainda mais enxuta.

## Finalização

Conseguimos aprender o essencial sobre a props children, no futuro mais possibilidades por meio de children serão desdobradas, mas isso, são assuntos para aulas futuras.