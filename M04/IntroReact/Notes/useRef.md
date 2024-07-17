# 📘 Aula - useRef: Entendo o Essencial

## Introdução

Até o momento aprendemos que o React é declarativo, e aprendermos a desenvolver diversas funcionalidades com este modelo sintático, porém, em algumas situações será necessário o uso de imperatividade.

Por isso, nesta aula, conheceremos o useRef um hook de React capaz de armazenar valores que não serão afetados pela renderização, ou seja, diferentemente do useState.

Sabendo disso, a utilização que exploraremos do useRef será focada em interagir com elementos de forma imperativa.

## Utilizando o useRef para interação com elementos de forma imperativa
```jsx
import { useRef } from "react"

function App() {
  const elementRef = useRef(null);  

  return (
    <div className="App">
      <button onClick={() => console.log(elementRef.current)}>Debug</button>
      <h1 ref={elementRef}>Exemplo</h1>
    </div>
  )
}

export default App
```

Para utilizarmos o useRef, o primeiro passo e importarmos o mesmo no arquivo desejado, assim como qualquer hook de React ( useState, useEffect e etc ), feito isso, instaciaremos o mesmo a uma constante e o executaremos como uma função, passando como primeiro parâmetro o valor de null.

_O null é necessário porque a referência só é aplicada após a montagem do componente._

Com isso, para associarmos essa referência a um elemento, basta utilizarmos o atributo ref, disponível em qualquer elemento ou componente React. 

Com isso teremos na referência um objeto com uma chave current, que estará armazenando o elemento ou componente selecionado.

## Conclusão

Apesar de priorizarmos o modelo declarativo, agora com o uso do useRef, percebemos que em alguns momentos precisaremos escrever funções utilizando abordagens mais imperativas. Nas próximas aulas, vamos exemplificar essa combinação entre o modelo declarativo e a imperatividade, além de explorar situações em que ocorrem efeitos de desmontagem.

# 📘 Aula - useRef: Efeitos de Desmontagem com useEffect - Parte 1

## Introdução

Nesta aula, iremos aprofundar nosso conhecimento sobre os efeitos de desmontagem, combinando-os com a ideia de seleções imperativas que estudamos em aulas anteriores. Durante este ciclo, iremos trabalhar na otimização do comportamento de um modal.

## Sintaxe

Conforme já mencionado anteriormente, um efeito de desmontagem é caracterizado por ter uma função retornada pela função de callback fornecida como primeiro parâmetro.

```jsx
useEffect(() => {  
  return () => {
⁠    /* Efeito de desmontagem */
  }
}, []);
```

## Principais usos

Um aspecto importante dos efeitos de desmontagem é que raramente um efeito será exclusivamente de desmontagem. Geralmente, o uso mais comum é **suspender um comportamento que pode ter sido gerado durante a montagem ou não atualização**. Mas o que isso significa?

Uma forma de entender isso é considerar um componente que possui um estado interno ou um comportamento específico durante a montagem, ou atualização. No entanto, quando ocorre a desmontagem desse componente, esse estado ou comportamento não deve mais existir.

Exemplos:

- Se a montagem realiza uma conexão, a desmontagem irá desfazer essa conexão;

- Se a montagem adiciona um evento, a desmontagem tende a remover esse mesmo evento.

## Exemplo
```jsx
import { useRef, useState } from React

export function Modal({ children, setIsOpen }) {
  const modalRef = useRef(null)

  useEffect(() => {
    // Montagem de evento //
    window.addEventListener("mousedown", handleMousedown);

    return () => {
      // Desmontagem de evento //
      window.removeEventListener("mousedown", handleMousedown);
    }

  }, [])

  return(
    // JSX //
  )
}
```

Durante a montagem, um evento está sendo adicionado à janela de forma imperativa (o que não pode ser feito de maneira declarativa). Já na desmontagem, o processo reverso é realizado, removendo o evento.

## Contextualizando

⁠Utilizamos essa possibilidade para produzir o exemplo de comportamento demonstrado na vídeo aula:

```jsx
import { useRef, useState } from React

export function Modal({ children, setIsOpen }) {
  const modalRef = useRef(null)

  useEffect(() => {
    // Montagem de evento //
    const handleOutclick = (event) => {
      if(!modalRef.current?.contains(event.target)){
         setIsOpen(false);
      }     
   }    
    window.addEventListener("mousedown", handleMousedown);

    return () => {
      // Desmontagem de evento //
      window.removeEventListener("mousedown", handleMousedown);
    }

  }, [])

  return(
    // JSX //
    <div 
    className={styles.modalOverlay} 
    role="dialog">

        <div 
        ref={modalRef} 
        className={styles.modalBox}>
          <button 
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

Neste exemplo estamos combinando uma seleção imperativa com useRef para conseguirmos comparar o "event.target" com o elemento presente na referência, gerando assim um comportamento de outclick, fechando o modal quando o usuário realiza um clique fora da janela principal.

## Conclusão

Nesta aula produzimos um comportamento bem interessante, combinando conhecemos abordados nas aulas anteriores, na próxima aula, teremos um segundo exemplo para reforçar ainda mais seus conhecimentos.

# 📘 Aula - useRef: Efeitos de Desmontagem com useEffect - Parte 2

## Introdução

Nesta aula aplicaremos os mesmos princípios da aula anterior para produzir mais um exemplo, otimizando ainda mais o comportamento do modal trabalhamos na aula anterior.

## Comportamento de keydown

```jsx
const buttonRef = useRef(null);

useEffect(() => {
   const handleKeydown = (event) => {
      if(event.key === "Escape"){
         buttonRef.current?.click();
      }
   }

   window.addEventListener("keydown", handleKeydown);

   return () => {
      window.removeEventListener("keydown", handleKeydown);
   }
}, [])
⁠
return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalBox}>
            <button
               ref={buttonRef}
               className={styles.closeButton}
               onClick={() => setIsOpen(false)}
            >
               Fechar
            </button>
            {children}
         </div>
      </div>
);
```

Foi criado um exemplo muito parecido, também contando com o seletor imperativo useRef, e neste exemplo, assim como no anterior, temos a montagem adicionando um evento a janela, e desmontagem removendo este mesmo exemplo. 

Com isso agora, nossa modal vai fechar cada vez que a tecla "Escape" for pressionada.

## Conclusão

Com está, exercitamos ainda mais nosso conhecimento de useRef e useEffect e deixamos nosso modal ainda mais otimizado. Vale finalizar, reforçando, que apesar da gama de exemplos ter sido vasta até aqui, é possível com essas ferramentas, criar um leque ainda maior de comportamentos. Por isso, continue sempre praticando.

