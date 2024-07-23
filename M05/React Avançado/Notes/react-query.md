# 📘 Aula (Extra) - React Query - Introdução e Instalação

## Introdução

Neste ciclo de aulas estaremos aprendendo sobre a biblioteca React Query (useQuery), que ajudará a lidarmos com requisições e manipulações de estado (mutações).

Tendo em vista que a biblioteca é muito robusta, focaremos em apresentar somente o funcionamento essencial.

## Porque React-Query?

Um dos principais motivos para escolher o react-query é que ele trabalha com requisições de forma muito mais performática do formato nativo de manipulação do estado no React.

Por isso, ele demonstra ser excelente alternativa para podermos refatorar o CRUD que foi construído no ciclo de aulas anterior.

## Instalação

Para instalar o react-query, basta rodar o comando 
```bash
npm i @tanstack/react-query
```

## Conclusão

Nesta aula conhecemos um pouco sobre o react-query, estaremos colocando ele em prática a partir da aula seguinte. Caso você queira se aprofundar ainda mais no assunto, consulte a **[documentação](https://tanstack.com/query/latest/docs/framework/react/quick-start)**. Bom estudo!

# 📘 Aula (Extra) - React Query - useQuery

## Introdução

Nesta aula e na seguinte, estaremos refatorando o exemplo de CRUD criado no ciclo de aulas anterior. Abaixo, estaremos registrando o procedimento passo para o uso essencial desta biblioteca.

## Envolvendo a aplicação

O primeiro passo para utilizar o useQuery em uma aplicação é envolver com o QueryClientProvider. Confira o exemplo abaixo de como podemos fazer isso:

```jsx
//main
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
⁠
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
  </QueryClientProvider>
  </React.StrictMode>
);
```
Note que, fora do createRoot é instanciado QueryClient é fornecido pelo react-query.

## Criando meu primeiro useQuery

Com aplicação devidamente envolvida pelo provedor, as funcionalidades da biblioteca estarão prontas para uso. Com isso, podemos criar nossas instâncias de useQuery.

## Para que serve o useQuery?

Ele vai substituir o estado no armazenamento de dados, e pode nos oferecer um leque gigantesco recursos, como, por exemplo:

- isLoading - que nos permite verificar se uma requisição está acontecendo e pode ser excelente para trabalhar com nossos comportamentos de carregamento.

- isError - verifica se existe um erro, e pode ser excelente como condicional para comportamentos de erro.

- error - traz os erros que ocorrem na requisição (semelhante ao que o catch faz no try catch só que de forma reativa).

**A lista de recursos é gigantesca, fique a vontade para explorar mais detalhes na documentação do useQuery.**

Confira o exemplo abaixo:

```jsx
const { data: todoList } = useQuery({
  queryKey: ["todo"],
  queryFn: async () => {
    const { data } = await app.get("/todos")
    return data
  }
})
```
Esta é uma instância de useQuery para armazenar a lista de posts da aplicação, note que já na instância é realizada a requisição de carregamento, substituindo, tanto o estado quanto o useEffect. Uma abordagem muito mais compacta, além dos benefícios de performance da biblioteca. 

## Conclusão

Nessa aula, aprendemos sobre os primeiros passos do react-query na nossa aplicação e sobre o useQuery, na próxima aula, para refatorar nosso CRUD por completo, estaremos aprendendo também sobre mutações. Bom estudo!

# 📘 Aula (Extra) - React Query - useMutation

## Lidando com mutações useMutation

Prosseguindo com o estudo sobre o react-query, para realizarmos alteração no conjunto de dados renderizado pelo useQuery, precisamos criar mutações.

Uma mutação consistente basicamente em um hook para lidar com uma requisição manipula a lista de dados armazenada de alguma forma. **(Seja uma requisição POST, PUT, PATCH ou DELETE)**.

Confira o exemplo abaixo:
```jsx
// mutation function
const createTodoFn = async (formData) => {
    const newTodo = { ...formData }
    return await app.post("/todos", newTodo)
  }

// create
const createTodo = useMutation({
  mutationFn: createTodoFn,
})
```
**Note que assim como funções normais, nossas mutações também podem receber parâmetros.**
#
Assim como no modelo nativo de React, precisamos de um procedimento para trazermos nossas alterações para o front-end, e para isso podemos utilizar um mecanismo de revalidação. Confira abaixo:
```jsx
const queryClient = useQueryClient()

// revalidate
const revalidate = () => {
  client.invalidateQueries({
    queryKey: ["todo"]
  })
}
```
### alternativa
```jsx
const ifSuccess = () => {
  const cached = queryClient.getQueryData(["todo"])

  queryClient.setQueryData(["todo"], data => {
    return [...data, newTodo]
  })
}
```
Combinamos essa função a nossas mutações para que, ao realizar a requisição, o front-end também deseja atualizado logo em seguida. Desta forma:
```jsx
// create
const createTodo = useMutation({
  mutationFn: createTodoFn,
  onSuccess: revalidate, // ou ifSuccess,
})
```

## Executando mutações

Diferente de funções comuns, as mutações precisam ser executadas de forma diferente, utilizando o método mutate retornado pela respectiva mutação. Confira o exemplo abaixo:
```jsx
createTodo.mutate(formData);
```
**Combinando esse conjunto de fatores será possível criar mutations que manipulam tanto o back-end, quando trazem os resultados para o front-end de forma muito rápida.**

## Conclusão

Aprendemos o essencial sobre o react-query. Fique a vontade para aplicar esse conhecimento novo em seus projetos e aprender ainda mais. Bom estudo!