# 📘 Aula - Lidando com Modais no React

## Introdução

Nesta aula aprenderemos como construir um comportamento de modal simples no React. Que será a base para os comportamentos que iremos desenvolver nas próximas aulas sobre desmontagem no useEffect.

## Não será utilizado o dialog

No React, não utilizamos os recursos da tag "dialog" como estamos acostumados a trabalhar com JavaScript Vanilla. Isso ocorre porque o mecanismo de funcionamento da tag "dialog" se resume a ocultar e exibir o componente por meio da alternância do atributo "display".

O comportamento desejado é que, quando o modal não estiver ativo, seu HTML não esteja presente na renderização, por isso, iremos utilizar renderização condicional para ocultar e exibir componentes.

## Criando o modal

O comportamento básico de um modal consiste em um elemento que aparece e some quando é solicitado, por isso, começamos criando componente base de Modal e para exemplo de funcionamento, condicionando sua renderização por meio de um estado.

Confira:

```jsx
import { useState } from "react"
import { Modal } from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>
        Abrir o modal
      </button>
      {
        // ternário que não necessita emitir um : false
        isOpen && <Modal />
      }
    </div>
  )
}

export default App
```
Para criar esse componente modal de maneira mais escalável, utilizamos a prop "children" para permitir que qualquer estrutura seja passada para o interior do modal. Isto permite criar um componente **MODAL GLOBAL**, que pode ser reutilizado para a criação de modais com diferentes conteúdos dentro. Além disso, criamos uma prop específica para receber a função de fechamento, que será acionada quando o botão de fechar for clicado.
```jsx
export const Modal = ({children, setIsOpen}) => {
    return(
        <div>
            <div>
                <button onClick={() => setIsOpen(false)}>Fechar</button>
                {children}
            </div>
        </div>
    )
}
```
Com isso, o comportamento básico já acontece de forma completa, deixando pendente somente o comportamento visual e a semântica.

## Estilização

Para estilizar nossa modal, traremos um exemplo simples utilizando styled modules, mas vale reforçar, que independente do recurso de estilização o resultado será basicamente o mesmo.
```css
.modalOverlay{
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.3);
}

.modalBox{
    position: relative;
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background: #fff;
}

.closeButton{
    position: absolute;
    top: 0;
    left: 0;
}
```
**Note que, temos uma div para sobreposição, ocupando 100% da tela e centralizando a caixinha de modal (modalOverlay).**

Aplicando as classes, temos como resultado a seguinte estrutura de código:

```jsx
import styles from "./style.module.css"
⁠
export const Modal = ({children, setIsOpen}) => {
    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <button 
                   className={styles.closeButton} 
                   onClick={() => setIsOpen(false)}
                >
                  Fechar
                </button>
                {children}
            </div>
        </div>
    )
}
```

## Semântica

Por fim, para aprimorar a semântica, podemos adicionar o atributo "role" com o valor "dialog" à div principal. Dessa forma, a div, embora mantenha o comportamento de uma div comum, terá o mesmo significado semântico de uma tag "dialog".

```jsx
<div className={styles.modalOverlay} role="dialog">
  // content //
</div>
```

## Conclusão

Nesta aula, desenvolvemos um componente modal básico que servirá como referência para os efeitos de desmontagem que criaremos posteriormente. 

 