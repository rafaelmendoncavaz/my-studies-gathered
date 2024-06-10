# 📘 Aula - JSX

## Introdução

O JSX (JavaScript XML, ou Extensible Markup Language) é um componente essencial no aprendizado de React. Ele combina HTML e JavaScript, dois conceitos com os quais você provavelmente já está familiarizado.


Como mencionado anteriormente, o JSX permite que misturemos HTML e JavaScript, eliminando a necessidade de depender exclusivamente dos métodos do DOM, como querySelector, appendChild, innerHTML, entre outros.

Em vez de escrevermos nosso código de forma imperativa, passamos a descrevê-lo de maneira declarativa.

Confira o exemplo abaixo:

```jsx
 <li>
   <h2>{teacher.name}</h2>
   <span>Cargo: {teacher.job}</span>
   <span>Salário: {teacher.budget}</span>
 </li>
```

Podemos perceber uma estrutura muito semelhante com o HTML, mas abrindo {}, estamos lidando, num mesmo código, com variáveis Javascript. 

Vale antecipar que, não somente as variáveis, a lógica Javascript também é suportada no JSX (com algumas limitações que veremos logo mais).

## Diferenças de nomenclatura

Algumas nomenclaturas de HTML mudam no JSX, por conta dos nomes nativos conflitarem com recursos já existentes. São eles:

    for - que é renomeado como [htmlFor]
    class - que é renomeado como [className]

## DOM Methods vs JSX

Observando de um ponto de vista lógico, temos um gigantesco benefício nesse novo formato.

Exemplificando, diferente da maneira imperativa, na declarativa, se quisermos aplicar dentro de elemento um texto vindo de uma lógica Javascript, não precisaremos utilizar de métodos como innerText ou innerHTML, bastará posicionar a variável onde quisermos renderizar o texto. 

Confira a comparação abaixo:

Vanilla:

```js
    const element = document.querySelector("li > h2")
    const name = "Alex"

    element.innerText = name;
```

JSX (React)

```jsx
    const name = "Alex"

    return (
    <li>
        <h2>{name}</h2>
    </li>
    )
```

Trata-se de uma maneira muito mais intuitiva de combinar lógica e estrutura.

Como já dito anteriormente, o benefício não se limita somente para variáveis, mas também para funções e eventos:

```jsx
    <li>
        <h2>{teacher.name}</h2>

        <span>Cargo: {teacher.job}</span>
        <span>Salário: {teacher.budget}</span>

        <button onClick={() => saveTeacher(teacher)}>
            Salvar professor
        </button>
    </li>
```

Neste exemplo, no botão, utilizamos o onClick para adicionar um evento de click, ao invés da instrução addEventListener(‘click’, () => saveTeacher(teacher)), o mesmo formato consiste para qualquer outro tipo de evento.

## Conclusão

Durante esta aula, adquirimos conhecimentos básicos sobre o JSX e como ele integra recursos do HTML e JavaScript. Nas próximas aulas, continuaremos a explorar essa sintaxe com mais profundidade e a descobrir os recursos disponíveis.