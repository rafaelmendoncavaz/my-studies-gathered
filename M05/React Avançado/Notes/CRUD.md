# 📘 Aula - Crud: Introdução

# Introdução

Neste ciclo de aulas vamos trabalhar de forma completa um CRUD, e para isso utilizaremos a **[Blog Fake API](https://github.com/Kenzie-Academy-Brasil-Developers/blog-fake-api)**. 

### Preste sempre muita atenção na documentação de uma API quando estiver utilizando a mesma, e ela que determinada a possibilidades do que podemos fazer e descreve como devemos fazer.
#
Além disso, partiremos de uma aplicação já estruturada, contendo funcionalidades de autenticação semelhantes às desenvolvidas em aulas anteriores que servirão de apoio para a implementação do nosso CRUD.

## CRUD

Mas afinal, o que é isso? Um CRUD consiste num conjunto de funcionalidades muito frequente na programação. São elas:

- **C**reate - Criação (**POST**)
- **R**ead - Leitura (**GET**)
- **U**pdate - Atualização (**PUT/PATCH**)
- **D**elete - Exclusão (**DELETE**)
#
Você já deve estar ambientados com essas rotinas nessa altura do módulo, porém, no momento abordamos somente manipulação de estado, que se restringe ao front-end, e, nos exemplos a seguir combinaremos, tanto gerenciamento de front-end quanto de back-end (por meio das requisições).

# 📘 Aula - Crud: Create (Criação)

## Introdução

Nesta aula aprenderemos sobre como podemos fazer uma função de criação, criando o dado no back-end por meio de requisição e atualizando o front-end por meio de manipulação de estado.

## Na Prática

Para isso, o primeiro passo, é criar um estado para que esse posso abrigar os conjuntos de dados que criamos por meio da nossa função.
```jsx
const [postList, setPostList] = useState([]);
```
Feito isso, o segundo passo, é entender o que o corpo da requisição exige, e como posso obter cada um dos dados necessários. Confira o exemplo apresentado da vídeo aula:
```json
{ 
   "category": "economia",
   "title": "Imposto de Renda 2023: como declarar planos de previdência PGBL e VGBL.",
   "content": "Contribuições feitas para o PGBL são dedutíveis da base de cálculo do IR 2023 em até 12% da renda bruta tributável anual. Já o VGBL não permite o desconto.",
   "author": "Isabela Bolzani"
}
```
Para cadastrar uma notícia nesta API, são necessários 4 dados: category, title, content e author. Neste caso específico, os três primeiros valores vieram de um formulário e o nome do autor foi fornecido com base no nome do usuário logado.
```jsx
const newPost = { ...formData, author: user.name };
```
_Tenha em mente, que esse formato é um exemplo contextualizado na API que pegamos como referência, e que naturalmente cada API vai exigir um padrão de corpo diferente na criação de dados._
#
Com o corpo moldado, foi realizada uma requisição do tipo **POST**, para que a notícia fosse cadastrada no banco de dados do servidor. ***Como a rota exigia autorização, foi fornecida a token, conforme indica a documentação.***
```js
const token = localStorage.getItem("@TOKEN");

const { data } = await api.post("/news", newPost, {
   headers: {
      Authorization: `Bearer ${token}`,
   },
});
```
Para conseguirmos trazer a mesma notícia para nossa interface, utilizaremos uma atualização de estado semelhante a que conhecemos no decorrer do curso, com a diferença que a notícia criada veio como resposta da requisição (comportamento bem comum nas APIs).
```js
const createPost = async (formData) => {
  try {
      const newPost = { ...formData, author: user.name };

      const token = localStorage.getItem("@TOKEN");

      const { data } = await api.post("/news", newPost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });

      setPostList([...postList, data]);
  } catch (error) {
      console.log(error);
  }
};
```
Com isso, concluímos nossa função de criação.
## Conclusão

Nesta aula aprendemos sobre a rotina Create (Criação) do CRUD, estaremos explorando aula a aula mais sobre e conceito, para explorar o assunto de forma completa. Bom estudo!

# 📘 Aula - Crud: Read (Leitura)

## ⁠Introdução

Nesta aula, abordaremos a criação de funções para a leitura de dados, que envolvem a obtenção de informações a partir do back-end e sua posterior renderização no front-end.

É importante destacar que este conteúdo terá um tom de revisão para muitos, uma vez que já abordamos procedimentos semelhantes em aulas anteriores.

## Na Prática

Para implementar a função de leitura em nossas aplicações React, o primeiro passo é preparar um estado para receber os valores provenientes da API. No nosso exemplo, o estado criado na aula anterior será adequado para essa finalidade:

```jsx
const [postList, setPostList] = useState([]);
```
Sabendo disso, para leitura, será realizada uma requisição do tipo GET, conforme a documentação orienta, e o resultado, caso a resposta seja positiva, será armazenado no estado.
```jsx
const getPosts = async () => {
    try {
        const { data } = await api.get("/news");
        setPostList(data);
    } catch (error) {
        console.log(error);
    }
}
```
Uma requisição de leitura pode ser realizada em momentos variados:

- No carregamento de uma página
- Em uma ação de busca
- Em uma ação de filtro
#
E, qualquer possível outro cenário que exija consulta de dados.

Em nosso exemplo da vídeo, utilizamos um useEffect de montagem, para realizar a requisição ao carregamento do componente LoginView, principal componente disponível quando o usuário está logado.
```jsx
useEffect(() => {
    const getPosts = async () => {
       try {
          const { data } = await api.get("/news");
          setPostList(data);
       } catch (error) {
          console.log(error);
       }
    };
    getPosts();
 }, []);
 ```
 Trazendo os valores que vem como resposta da API, bastará renderizar os dados no local desejado. Neste caso, a escolha no projeto, foi renderizar a lista notícias em um componente de lista:
 ```jsx
import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";

export const PostList = () => {
  const { postList } = useContext(PostContext);
  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>
          <h3>{post.title} - {post.author}</h3>
          <span>{post.category}</span>
          <p>{post.content}</p>
          <button>Editar</button>
          <button>Excluir</button>
        </li>
      ))}
    </ul>
  );
};
```

## Conclusão

Nesta aula aprendemos sobre a rotina Read (Leitura) do CRUD, estaremos explorando aula a aula mais sobre e conceito, para explorar o assunto de forma completa. Bom estudo!

# 📘 Aula - Crud: Update (Atualização)

## Introdução

Nesta aula, continuaremos a explorar o conhecimento sobre CRUD, desenvolvendo uma funcionalidade de atualização. 

## Na Prática

Para mecânica de atualização, é necessário identificar um elemento inicial: Qual recurso estamos editando?

Para isso, no cenário React, podemos criar um estado para abrigar o dado selecionado.

No exemplo de video foi criado o respectivo estado abaixo:
```jsx
const [postEditing, setPostEditing] = useState(null);
```
Este estado foi compartilhado no contexto, e, para ser possível capturar a notícia a ser editada, aproveitamos para criar um evento de clique no interior do método map que quebra a lista de objetos em objetos individuais.
```jsx
<ul>
  {postList.map((post) => (
    <li key={post.id}>
      <h3>
        {post.title} - {post.author}
      </h3>
      <span>{post.category}</span>
      <p>{post.content}</p>
      <button onClick={() => setPostEditing(post)}>Editar</button>
      <button>Excluir</button>
    </li>
  ))}
</ul>
```
Com o estado alimentado, outra excelente prática para as funções de atualização também foi aplicada no projeto da videoaula. Utilizamos o values do React Hook Form para extrair todos os valores atuais da notícia selecionada do estado e aplicá-los nos campos correspondentes.
```jsx
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../../providers/PostContext";

export const EditPostForm = () => {
  const { postUpdate, postEditing, setPostEditing } = useContext(PostContext);

  const { register, handleSubmit } = useForm({
    values: {
      title: postEditing.title,
      content: postEditing.content,
      category: postEditing.category,
    },
  });

  const submit = (formData) => {
    postUpdate(formData);
  };

  return (
    <div>
      <button onClick={() => setPostEditing(null)}>Fechar</button>
      <h2>Editando nota</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input placeholder="Título" type="text" {...register("title")} />
        <input placeholder="Conteúdo" type="text" {...register("content")} />
        <input placeholder="Categoria" type="text" {...register("category")} />
        <button type="submit">Editar nota</button>
      </form>
    </div>
  );
};
```
Com tudo completo, começamos a trabalhar na funciona de atualização. Que, no exemplo abaixo, utilizou-se de uma rota PATCH para a requisição de atualização.
```jsx
const { data } = await api.patch(`/news/${postEditing.id}`, formData, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```
## PATCH vs PUT

Sobre requisições de atualização vale mencionar um ponto importante, existem dois tipos diferentes.

- **PATCH:** atualiza recursos de forma parcial (não precisa receber o recurso inteiro no corpo para realizar o procedimento de atualização)

- **PUT:** atualiza recursos de forma integral (depende do corpo completo), realiza uma substituição total

Retomando, além da requisição, assim como na criação, precisamos de manipulação de estado para atualizar o que está presente na visualização do front-end, para isso utilizamos o método map.
#
Como API em específico, a resposta de PATCH trazia a notícia de forma completa, substituímos a notícia anterior pela nova.
```jsx
const postUpdate = async (formData) => {
  try {
    const token = localStorage.getItem("@TOKEN");

    const { data } = await api.patch(`/news/${postEditing.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });

    const newPostList = postList.map((post) => {
        if (post.id === postEditing.id) {
          return data;
        } else {
          return post;
        }
    });

    setPostList(newPostList);
    setPostEditing(null);
  } catch (error) {
    console.log(error);
  }
};
```
Por fim, com todo em conjunto de procedimentos, conseguimos implementar uma função atualização de forma sólida no projeto.
## Conclusão

Nesta sessão de aprendizado, exploramos a etapa de Atualização (Update) no contexto do CRUD. Na aula seguinte, dedicaremos nosso foco à operação de exclusão, concluindo assim nosso conjunto abrangente de funcionalidades. Bom estudo!

# 📘 Aula - Crud: Delete (Exclusão)

## Introdução

Nesta aula, criaremos nossa última rotina de CRUD, uma funcionalidade de exclusão.

## Na Prática

Um procedimento de exclusão abrangente é bastante similar ao que estamos familiarizados com no gerenciamento de estados. A diferença reside no fato de que, nesse processo, uma requisição também é incorporada.

O exemplo apresentado na videoaula ilustra, de maneira geral, é o formato mais comumente observado em aplicações do mercado. Você pode conferir o exemplo abaixo:
```jsx
const deletePost = async (deleteId) => {
  try {
    const token = localStorage.getItem("@TOKEN");

    await api.delete(`/news/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const newPostList = postList.filter((post) => post.id !== deleteId);
    setPostList(newPostList);

    alert("Exclusão realizada com sucesso!");
  } catch (error) {
    console.log(error);
  }
 };
 ```
 Note que foi feita uma requisição do tipo DELETE, passando o deletingId recebido via parâmetro, e o mesmo foi utilizado para a manipulação de estado, que persiste exatamente no formato que foi apresentado em aulas anteriores.
 #
 A escolha de gatilho da execução da função, também foi semelhante ao que estamos acostumados a ver nas aulas anteriores, o disparo, foi realizado por um evento de onClick, no elemento renderizada de forma dinâmica pelo método map.
 ```jsx
import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";

export const PostList = () => {
  const { postList, setPostEditing, deletePost } = useContext(PostContext);
  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>
          <h3>{post.title} - {post.author}</h3>
          <span>{post.category}</span>
          <p>{post.content}</p>
          <button onClick={() => setPostEditing(post)}>Editar</button>
          <button onClick={() => deletePost(post.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};
```
Basta, este conjunto de passos para implementar uma função de remoção de forma bem sucedida.

## Conclusão

Neste conjunto de aulas, absorvemos um amplo entendimento sobre o CRUD. Para reforçar ainda mais esses conhecimentos, a aplicação prática desses conceitos em projetos e atividades se torna de extrema importância. Bom estudo!