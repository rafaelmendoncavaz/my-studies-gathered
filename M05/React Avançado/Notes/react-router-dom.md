# 📘 Aula - React Router DOM - Outlet e Navigate

## Introdução

Na próxima aula, estaremos concluindo nosso conjunto de funcionalidades de autenticação. Nessa aula, demonstraremos o uso de dois recursos avançados do React Router Dom: o Outlet e o componente Navigate.

Portanto, iremos introduzir brevemente cada um desses recursos durante a aula.

## Outlet

O ```<Outlet />``` funciona de forma muito semelhante ao children, sendo um recurso que permite a renderização de uma rota filha dentro de uma rota pai. Esse recurso será fundamental para a criação da proteção de nossas rotas.

Isso permitirá que os elementos aninhados renderizem quando as rotas direcionarem a ele, ou que não renderize nada se a rota índice não existir.

Exemplo: 

```jsx
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/messages" element={<DashboardMessages />} />
        <Route path="/tasks" element={<DashboardTasks />} />
      </Route>   
    </Routes>
  )
} 
```
No código acima, é exemplificada a criação de rotas filhas em que o Dashboard é renderizado como a rota principal e possui como rotas filhas os componentes **DashboardMessages** e **DashboardTasks**. Nesse caso, poderíamos combinar os dois componentes em um mesmo endereço de navegador da seguinte forma.
```jsx
import { Outlet } from "react-router-dom"

export function Dashboard() {
  return (
    <div>
      <h1>
      Dashboard
      </h1>
      {
        /*
        Este elemento irá renderizar: 
        <DashboardMessages /> se a URL for "/messages"
        <DashboardTasks /> se a URL for "/tasks"
        não renderizar se a URL for "/" 
        */
       <Outlet />
     }
    </div>
  )
}
```
Utilizando o Outlet no componente Dashboard, o conteúdo da rota filha será renderizado no interior da tag main, juntamente com a rota pai.

Isso é semelhante ao comportamento do children, porém, está relacionando rotas em vez de componentes diretamente.

## Navigate

O componente Navigate é uma funcionalidade de redirecionamento do React Router Dom, assim como o Link e o useNavigate. Sua finalidade é realizar um redirecionamento de rota durante a renderização. Geralmente, o uso do Navigate está relacionado a condições que ocorrem no JSX.

Confira o exemplo:

```jsx
import { Navigate } from "react-router-dom";

export function Component() {

  return (
    <>
      {
        condition 
        ? <Navigate to="/DashboardMessages" /> 
        : <Navigate to="/DashboardTasks" />
      }
    </>
  )
};
```
Neste cenário, quando a condição é preenchida, a estrutura de parágrafo é renderizada do contrário acontece um redirecionamento para a rota /.

## Conclusão

Nesta aula introduzimos os conceitos de Outlet e Navigate, eles serão explorados e exemplificados de forma mais completa dentro do cenário de autenticação na próxima aula.
