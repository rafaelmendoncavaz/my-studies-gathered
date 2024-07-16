# 📘 Aula - Estado: Performance

## Introdução

Nesta aula aprenderemos um recurso de React que traz melhoria de performance as nossas manipulações de estado, além de outros benefícios.

### Recebendo o valor atual do estado como parâmetro de uma função callback

A função modificadora do useState, além atribuir ao estado os valores recebidos como parâmetro, aceita uma possibilidade de uso um pouco mais avançada.

Confira os exemplos abaixo:

```jsx
setNoteList((noteList) => [...noteList, newNote]);
```

```jsx
setNoteList((noteList) => noteList.filter((note) => note.id !== removingId));
```

```jsx
setNoteList((noteList) =>
   noteList.map((note) => {
      if (note.id === editingId) {
         return { ...note, ...editNote };
      } else {
         return note;
      }
   })
);
```

Neste exemplo, recebemos como parâmetro da arrow function o valor atual do estado e graças a esse benefício, conseguimos referenciar o valor sem estabelecer o vinculado de reatividade, que, no caso de vocês, não se faz necessário.

Essa ação, causa melhoria sutil na performance, e na medida que a aplicação for escalando, detalhes como este poderão fazer a diferença.

Além disso, valem se levantar outros benefícios sobre esse formato de utilização, como, por exemplo:

-   O código fica menos verboso

-   Utilizando-se desse recurso, reduzimos um pouco a passagem de props e não vinculamos nossos estados a componentes que não precisam dele.

## Conclusão

Nesta aula aprenderemos sobre um recurso interessante que ajuda a refinar a performance das nossas manipulações de estado, daqui para frente, seria uma excelente prática aderir esse modelo para seus projetos. Boa evolução e bom estudo!
