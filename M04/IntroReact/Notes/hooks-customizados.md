# 📘 Aula - Hooks Customizados

## Introdução

Nesta aula, aprendemos sobre um assunto muito importante, a criação de hooks customizados no React, este é um recurso muito poderoso e utilizado por diversas bibliotecas de React, inclusive veremos algumas no decorrer do curso.

Para isso iremos converter nosso comportamento de keydown e outclick criado em aulas anteriores em hooks de React escaláveis.

## No que consiste um hook customizado?

Um hook customizado é, essencialmente, uma lógica em React que pode ser reutilizada. Sintaticamente, ele consiste em uma função em JavaScript que pode fazer uso de hooks nativos do React (como useEffect, useState, etc.), assim como outros hooks customizados. É importante ressaltar que um hook customizado deve **obrigatoriamente retornar um conjunto lógico de dados**, em vez de retornar JSX, como acontece em um componente.

Dessa forma, os hooks customizados permitem encapsular e compartilhar lógica complexa entre diferentes componentes, promovendo a reutilização e a modularidade do código.

## Prefixo use

Outra regra obrigatória para constituir um hook, é que sua nomenclatura deve, obrigatoriamente, começar com **"use"**.

```js
export const useExample = () => {
⁠  /* alguma lógica */
  return algumValor
}
```

## Qual a grande vantagem?

Ao converter uma lógica em um hook, ela se torna altamente escalável, evitando repetições excessivas de código. Além disso, quando utilizado corretamente, um hook pode produzir comportamentos que são aplicáveis a múltiplos cenários durante a construção da aplicação. Isso proporciona uma maior reutilização de código e facilita a manutenção e a expansão do projeto.

## Exemplificando

Convertemos na vídeo-aula os dois comportamentos que criamos para hooks customizados.
```js
//useOutClick()

import { useEffect, useRef } from "react";

export function useOutClick(callbackfn) {
    const ref = useRef(null);
    
    useEffect(() => {

     const handleOutclick = (event) => {
         if(!ref.current?.contains(event.target)){
             if(callbackfn) callbackfn();
         }     
     }    
 
     window.addEventListener("mousedown", handleOutclick);
 
     return () => {
         window.removeEventListener("mousedown", handleOutclick);
     }
    }, [])

    return ref;
}
```
Note que a instrução de setIsOpen(false) foi substituída por uma instrução genérica de uma **callback** que será recebida via parâmetro. Graças a essa mudança, o comportamento de outclick poderá ser reaplicado em outros cenários.

```js
// useKeyDown()

import { useEffect, useRef } from "react";

export function useKeydown(keyId, callbackfn) {
   const ref = useRef(null);

   useEffect(() => {

    const handleKeydown = (event) => {
        if(event.key === keyId){
          // neste caso, callbackfn é executada com um parâmetro genérico
            if (callbackfn) callbackfn(ref.current);
        }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
        window.removeEventListener("keydown", handleKeydown);
    }
   }, [])

   return ref;
}
```
O mesmo procedimento foi realizado com keydown, o comportamento específico foi substituído por um comportamento genérico escalável.
```jsx
// index.jsx

import { useOutClick } from ../hooks/useOutClick
import { useKeyDown } from ../hooks/useKeyDown
import { useRef } from react

export function Component({ callbackfn }) {

  const modalRef = useOutClick(() => {
    callbackfn(false)
  })

  const buttonRef = useKeyDown("Escape", (element) => {
    // é o mesmo que ref.current?.click()
    // element é o parâmetro da função callback
    element.click()
  })


  return(
    // JSX //
    <div className={styles.modalOverlay} role="dialog">
        <div ref={modalRef} className={styles.modalBox}>
          <button
              ref={buttonRef}
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}>
              Fechar
          </button>
          {children}
        </div>
    </div>
  )
}
```

## Conclusão

Nesta aula extra, exploramos a poderosa capacidade de criação de hooks customizados no React. Aproveite essa ideia para tornar seus projetos cada vez mais escaláveis e seu código cada vez mais reutilizável.