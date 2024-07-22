# 📘 Aula - Autenticação - Parte 1

## Introdução

Neste ciclo de aulas, abordaremos todos os aspectos da autenticação do lado do cliente. Vamos aprender como criar funções para login, autoLogin e logout, além de explorar maneiras de proteger as rotas de nossas aplicações.

É importante ressaltar que esse conteúdo não se concentra em uma biblioteca ou hook específico, mas sim utilizar uma ampla gama de conhecimentos adquiridos até o momento.

Para o desenvolvimento das funcionalidades a seguir, estaremos utilizando a **[Blog Fake API](https://github.com/Kenzie-Academy-Brasil-Developers/blog-fake-api)**, já utilizada em aulas anteriores.

## userLogin

Sempre que estivermos trabalhando com API, devemos estar constantemente consultando a documentação para entendermos o que será necessário para desenvolver a _feature_ desejada, bem como se a API de fato nos proporciona tal possibilidade.

Por isso, o primeiro passo para desenvolver essa feature, foi analisar a documentação.

Nesta, encontramos informações sobre a rota /login (requisição do tipo POST), que exige o respectivo corpo abaixo:

```json
{
   "email": "johndoe@email.com",
   "password": "123456"
}
```
Bem como, tem o seguinte padrão de resposta
```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwiaWF0IjoxNjgxMjI2MzU1LCJleHAiOjE2ODEyMjk5NTUsInN1YiI6IjIifQ.HoHzAjg6luV9k6v8zHyewSTHsUnAKDBIbFiIS0r_joM",
	"user": {
		"email": "johndoe@email.com",
		"name": "John Doe",
		"job": "Jornalista",
		"id": 1
	}
}
```
Com base nisso, o primeiro passo foi verificar o formulário de login e observamos que o mesmo já produzia um objeto no formato exigido.

```jsx
return (
  <>
      <Header />
      <main>
        <h1>Faça login</h1>
        <form onSubmit={handleSubmit(submit)}>
            <label>
              E-mail
              <input type="text" {...register("email")} />
            </label>
            <label>
              Senha
              <input type="text" {...register("password")} />
            </label>
            <button type="submit">Login</button>
        </form>
      </main>
  </>
);
```
Tanto um campo email, quanto um campo password já estavam registrados via useForm

Sabendo disso, criamos então nossa função de login, e após a requisição, decidimos realizar as seguintes ações com os dados de resposta da API:

- **user:** armazenar o objeto do usuário em um estado de nossa aplicação, para que possamos renderizar e interagir com os dados enquanto a aplicação está em funcionamento.

- **accessToken:** armazenar o mesma no localStorage, pois essa é nossa chave de acesso para as rotas privadas e também será necessário para desenvolvermos nossa feature de autoLogin

- **user.id:** armazenar o identificador no localStorage, pois, conforme a documentação da API, está será necessária para realizarmos nossa requisição na feature de autoLogin

```js
const userLogin = async (formData) => {
  try {
      const { data } = await api.post('/login', formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);
      setUser(data.user);
      navigate("/dashboard");
  } catch {
      console.log(error);
  }
}
```

Com isso, nossa função foi desenvolvida por completo. Para executá-la, bastou compartilhá-la por meio do contexto e chamá-la dentro da função de envio do formulário de login.

## userLogout

O userLogout é função que existe para desfazer o que é realizado na função login, por isso, foi necessário retornar o estado ao valor inicial, limpar as respectivas chaves no localStorage e também navegar o usuário para rota inicial.

Fique atento, que o status de logado de uma aplicação não está relacionado somente a rota atual, mas a todo esse conjunto de fatores que listamos acima.

```js
const userLogout = () => {
  localStorage.removeItem("@TOKEN");
  localStorage.removeItem("@USERID");
  setUser(null);
  navigate("/");
}  
```

A mesma foi aplicada em evento de clique em um botão criado na página dashboard.

## Conclusão

Nesta aula desenvolvemos features essenciais para um fluxo de autenticação, nas proximas aulas avançaremos ainda mais trazendo mais refinamento para esse conjunto de funcionalidades.

# 📘 Aula - Autenticação - Parte 2

## Introdução

Nesta aula vamos refinar a autenticação que iniciamos na Aula | Autenticação - Parte 1, criando agora uma funcionalidade de autoLogin. 

## autoLogin

O autoLogin é uma função que permite a recuperação das informações do usuário quando a página é atualizada, por isso, tende a espelhar comportamentos existentes na função de login.

Esse comportamento é necessário porque os dados armazenados nos estados do React não são persistentes, o que significa que são reiniciados sempre que o navegador atualiza a página.

Sabendo disso, para criarmos esta funcionalidade em nossa aplicação, foi fundamental compreender as informações presentes na documentação da API.

Em nossa análise, encontramos a rota /users/:userId (GET). Nessa rota, não é necessário enviar um corpo de requisição, mas é exigido o envio do token no cabeçalho (headers).

```json
{
   'Authorization': 'Bearer token'
}
```
Para isso, foi de extrema utilidade os valores que armazenamos no localStorage em nossa função de login, criada em aulas anteriores.
```js
localStorage.setItem("@TOKEN", data.accessToken);
localStorage.setItem("@USERID", data.user.id)
```
Com todas, estas informações, utilizamos dessas chaves para trazer o usuário por meio uma requisição que será disparada por um useEffect. 
```jsx
useEffect(() => {
      const loadUser = async () => {
         const token = localStorage.getItem("@TOKEN");
         const userId = localStorage.getItem("@USERID");

         if (token && userId) {
            try {
               const { data } = await api.get(`/users/${userId}`, {
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               });
               setUser(data);
               navigate("/dashboard");
            } catch (error) {
               console.log(error);
               localStorage.removeItem("@TOKEN");
               localStorage.removeItem("@USERID");
            }
         } else {
          console.error("user/token not found");
         }
      };
      loadUser();
}, []);   
```

Alguns pontos em destaque para função acima:

- Ela foi envolvida por uma condicional validando a existência de token e userId, não é necessário realizar uma requisição se as informações necessárias forem inválidas

- No catch, são limpas as chaves do localStorage, porque, a requisição pode falhar quando a token de acesso expirar e neste caso não seria adequado ficar tentando novamente a requisição a cada atualização de página.
#
Com está função devidamente criada, agora, ao atualizar a página após a requisição se concretizar o usuário é trazido de volta, quando token e identificador são válidos.

## Conclusão

Nesta aula, avançamos no desenvolvimento das nossas funcionalidades de autenticação, permitindo agora o retorno do usuário. No entanto, nossas rotas ainda não estão adequadamente protegidas. Continuaremos a aprimorar nossa autenticação na próxima aula.

# 📘 Aula - Autenticação - Parte 3

## Introdução

Utilizando Outlet e Navigate, nesta aula, finalizaremos nosso conjunto de funcionalidades de autenticação criando uma proteção de rotas.

## Proteção de rotas

Para criarmos um mecanismo que restrinja o acesso de usuários não autenticados às rotas privadas da nossa autenticação, foi necessário criar uma regra de negócio que valide se o usuário está presente na aplicação ou não. Por isso, o gatilho de condição selecionado foi o estado user.

Confira o código abaixo:
```jsx
import { useUserContext } from "../../providers/UserContext"
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { user } = useUserContext();

    return user ? <Outlet /> : <Navigate to="/" />
}
```
Foi criado um componente com o seguinte funcionamento, ele avalia a validade do user e caso verdadeira, ele renderiza Outlet (ou seja, o conteúdo da rota filho), do contrário, utilizando-se do Navigate, ele redireciona o usuário para a rota inicial.

Criado esse componente, o mesmo foi associado as nossas rotas da seguinte foram:
```jsx
export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<DashboardPage />} />
            </Route>            
        </Routes>
    )
}
```
O componente ProtectedRoutes é o elemento renderizado no endereço / e graças ao mecanismo do Outlet, caso o usuário for válido, irá produzir renderizar o conteúdo da rota filho, ou seja, o componente DashboardPage.

Com isso, o acesso da página /dashboard se torna restrito a usuário autenticados.

## Conclusão

Com nossas rotas privadas devidamente protegidas, concluímos nossa implementação de autenticação. Disponibilizamos o repositório neste **[link](https://github.com/Kenzie-Academy-Brasil-Developers/authentication)** para que você possa estudar esse exemplo mais detalhadamente. 

### Desafio

Como desafio, fica proposto a otimização desta autenticação, adicionando comportamento de carregamento, proteção de rotas públicas e um redirecionamento dinâmico na função de autoLogin.