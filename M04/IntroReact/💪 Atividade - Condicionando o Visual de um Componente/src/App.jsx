import { useState } from 'react'
import './App.css'
import { UserCard } from './components/UserCard/UserCard'

function App() {

  const [isActive, setActive] = useState(false)

  return (
    <>
      {
        isActive 
        ? <UserCard name={"Rafael"} email={"random@mail.com"} status={true} /> 
        : <UserCard name={"Rafael"} email={"random@mail.com"} status={false} />
      }
      <button onClick={() => setActive(!isActive)}>
        Alterar Status
      </button>
    </>
  )
}

export default App
