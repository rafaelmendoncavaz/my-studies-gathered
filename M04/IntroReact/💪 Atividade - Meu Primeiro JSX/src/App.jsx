export function App() {


  const user = {
    name: 'Rafael',
    module: 'M04',
    age: 28,
  }

  return (
    <>
      <div>
        <li>
          <h1>
            Nome: {user.name}
          </h1>
          <span>
            Module: {user.module} <br></br>
            Age: {user.age}
          </span> <br></br>
          <button onClick={console.log(user.name)}>
            Salvar usuário
          </button>
        </li>
      </div>
    </>
  )
}
