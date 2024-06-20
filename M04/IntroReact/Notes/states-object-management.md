# 📘 Aula - Estado: Gerenciando e Listas de Objeto 

## Introdução

Neste ciclo de aula abordaremos o gerenciamento de listas de objeto por meio de estados, que é um modelo extremamente frequente na programação. Para isso, colocaremos em prática o conjunto de funcionalidades chamado de CRUD:

- __C__ reate
- __R__ ead
- __U__ pdate
- __D__ elete

## Exemplificando

Para exemplificarmos cada uma das funcionalidades mencionadas acima, precisaremos primeiro de um estado, armazenando uma lista de objetos.

```jsx
const noteListData = [
   {

      title: "Example 1",
      text: "Conteúdo de exemplo",
   },
   {

      title: "Example 2",
      text: "Conteúdo de exemplo",
   },
];

const [noteList, setNoteList] = useState(noteListData);
```

__Neste exemplo criamos uma lista de objetos já com valores postos inicialmente, porém poderíamos desenvolver as mesmas funcionalidades partindo de uma lista vazia.__

A leitura de um conjunto de dados na interface é um procedimento já conhecido por nós de aulas anteriores, consiste na renderização dinâmica pelo método __map__.

```jsx
<ul>
   {noteList.map((note, index) => (
      <li key={index}>
         <h3>{note.title}</h3>
         <p>{note.text}</p>
      </li>
   ))}
</ul>

```

## Adição

Para adicionarmos novos itens a uma lista, não podemos contar com o push, afinal o mesmo se trata de um método mutável e não é adequado para manipulação de estado. Por isso, combinaremos alguns recursos para o procedimento de adição.

```jsx
setNoteList([...noteList, newNote]);
```

Estamos, no exemplo acima, criando uma nova lista com os [] e, com o spread operator ..., trazendo os itens da lista original, em seguida, adicionando um novo item.

Combinando tudo isso, conseguimos criar um mecanismo de adição não mutável. Confira a função completa:

```jsx
const addNote = (note) => {

      const newNoteList = [...noteList, newNote];
      setNoteList(newNoteList);
};
```

## ID únicos

Como estamos lidando com o lado cliente, precisamos de uma forma de atribuir identificadores únicos aos nossos objetos.

Esse mecanismo ira facilitar principalmente as funções de exclusão e edição, porque, por meio do identificador, conseguiremos tratar cada objeto de forma única.

Para isso, podemos utilizar um recurso nativo do Javascript: o método randomUUID, do crypto.

```jsx
const addNote = (note) => {
    const newNote = { ...note, id: crypto.randomUUID() };
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
};
```

__Também é possível utilizar a para gerar um id único de forma semelhante.__

## Remoção

Para remoção de itens de uma lista de objeto, também precisaremos de uma solução não mutável, para isso vamos utilizar o método filter. Criando uma expressão lógica que mantêm no filtro todos os itens com exceção do item a ser excluído.

Confira o exemplo abaixo:

```jsx
const removeNote = (removingId) => {
    const newNoteList = noteList.filter((note) => note.id !== removingId);
    setNoteList(newNoteList);
};
```

Neste exemplo, criamos um filtro que deve retornar todos os objetos com id diferente do removingId, resultado por consequência em um mecanismo de exclusão.

## Atualização

Assim como todos os cenários de manipulação de estado, para realizar a atualização de um item dentro uma lista, precisaremos de um método não mutável, por, para este cenário, teremos como mais adequado o método map.

Sim, o mesmo capaz de renderizar listas de forma dinâmica no JSX!

Confira o exemplo abaixo:

```jsx
const editNote = (editNote, editingId) => {
   const newNoteList = noteList.map((note) => {
      if (note.id === editingId) {
         return { ...note, ...editNote };
      } else {
         return note;
      }
   });
   setNoteList(newNoteList);
};
```

Para editar um item específico em uma lista, utilizamos do mesmo recurso de identificador utilizado pela função de exclusão.

```jsx
if (note.id === editingId) {
   return { ...note, ...editNote };
} else {
   return note;
}
```

Note que o editingId, recebido como parâmetro, é comparado com o id do objeto. Quando método map preenche essa condição, estamos com o objeto a ser editado selecionado, é aí que o procedimento de atualização começa.

```jsx
return { ...note, ...editNote };
```

Nesse trecho, estamos trazendo os dados atuais da nota, com o spread operator em note e em seguida, substituindo os valores a serem atualizados, espalhando o objeto editNote, fornecido via parâmetro. Isso acontece por conta da hierarquia de chaves nos objetos.

```jsx
{ example: "Example1", example: "Example2" }
```

Se temos duas ou mais chaves repetidas em um objeto, o Javascript manterá sempre a última fornecida.

## Conclusão

Nesta aula, completamos o nosso CRUD de front-end entendo como criar uma funcionalidade de atualização para uma lista de objetos. Coloque esse assunto em prática nas atividades e entregas para aprender ainda mais. Bom estudo!