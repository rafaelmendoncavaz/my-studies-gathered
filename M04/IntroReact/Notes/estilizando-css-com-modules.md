# 📘 Aula - Estilizando com CSS Modules

## Introdução

Com a criação de diversos componentes e projetos de maior escala, começa a ficar um pouco difícil lidar com a nomenclatura das classes CSS, e, geralmente, conflitos começam a aparecer.

Por isso, o React oferece uma forma de isolar a estilização em módulos chamada CSS Modules.

## Utilizando CSS Modules

A utilização do CSS Modules é simples, ao invés de criarmos um arquivo .css, criaremos um arquivo .module.css.

Dentro do arquivo, a sintaxe se mantém a padrão do CSS, como já estamos acostumados. (Com a única mudança que, preferencialmente, utilizaremos camelCase para nomear as classes do .module). 

Segue exemplo:

```css
.exampleList{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
```

A principal mudança acontece quando importamos o arquivo de módulo em um componente React e, como aplicamos o className aos componentes e elementos HTML.

```jsx
import styles from './style.module.css';

export const ExampleList = () => {
    return(
        <ul className={styles.exampleList}>
            <li>Tema 1</li>
            <li>Tema 2</li>
            <li>Tema 3</li>
        </ul>
    )
}
```

## Nomenclatura única para as classes

Diferente do arquivo style.css comum, ao inspecionarmos nossos elementos no navegador por meio do DevTools, vamos perceber que, na renderização, as classes são nomeadas de maneira diferente ao que está presente no arquivo .module.css, adicionando uma combinação única de caracteres. Essa combinação modulariza o CSS evitando que o mesmo “vaze” para outros pontos indesejados da aplicação.

## Conclusão

Nesta aula, aprendemos sobre o CSS Modules e como esse recurso pode auxiliar na criação de estilos escaláveis. Agora, para solidificar esse conceito, será extremamente benéfico aplicá-lo nas atividades e entregas presentes no conteúdo. Desejo a você bons estudos!